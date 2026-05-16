import { Block, Document } from '../types'
import { lookupByUse, isKnownComponent, packageForComponent } from '../library'
import { generatedHeader } from './header'

function lookToClassName(look: string | undefined): string {
  if (!look) return ''
  return look.split(/\s+/).filter(Boolean).join(' ')
}

function flowToHandler(flow: string): string {
  return flow.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

function flowToPropName(flow: string): string {
  const camel = flowToHandler(flow)
  return 'on' + camel.charAt(0).toUpperCase() + camel.slice(1)
}

function bindToSetter(bind: string): string {
  return 'set' + bind.charAt(0).toUpperCase() + bind.slice(1)
}

const EACH_RE = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.+?)\s*$/
const EXPR_RE = /^\{\{\s*(.+?)\s*\}\}$/

// HTML attributes passed straight through to the rendered element. Same
// literal-vs-`{{expr}}` semantics as `href` / `id`. Enables native forms.
const PASSTHROUGH_ATTRS = ['name', 'type', 'placeholder', 'action', 'method'] as const

function parseEach(value: string): { varName: string; collection: string } | null {
  const m = value.match(EACH_RE)
  if (!m) return null
  return { varName: m[1], collection: m[2].trim() }
}

function emitTextValue(value: string): string {
  const m = value.match(EXPR_RE)
  if (m) return `{${m[1]}}`
  return `{${JSON.stringify(value)}}`
}

function emitAttrValue(value: string): string {
  const m = value.match(EXPR_RE)
  if (m) return `{${m[1]}}`
  return JSON.stringify(value)
}

// Inline i18n: `text@en: "..."` / `text@de: "..."`. The emitted component
// gains a `locale` prop (default 'en') and renders the matching string,
// falling back to en → plain `text:` → first defined locale.
const TEXT_LOCALE_RE = /^text@([a-z]{2}(?:-[A-Za-z]{2})?)$/

function localeValueExpr(value: string): string {
  const m = value.match(EXPR_RE)
  if (m) return `(${m[1]})`
  return JSON.stringify(value)
}

function localizedTextOf(
  block: Block,
): { locales: [string, string][]; def: string } | null {
  const entries: [string, string][] = []
  for (const [k, v] of block.directives) {
    const m = k.match(TEXT_LOCALE_RE)
    if (m) entries.push([m[1], v])
  }
  if (entries.length === 0) return null
  const plain = block.directives.get('text')
  const en = entries.find(([l]) => l === 'en')
  const def = en ? en[1] : plain !== undefined ? plain : entries[0][1]
  return { locales: entries, def }
}

function blockNeedsLocale(block: Block): boolean {
  for (const k of block.directives.keys()) if (TEXT_LOCALE_RE.test(k)) return true
  return block.children.some(blockNeedsLocale)
}

function componentNameFor(block: Block): string {
  const use = block.directives.get('use')
  if (use) {
    const entry = lookupByUse(use)
    if (entry) return entry.main
  }
  return block.blockType
}

function collectUsedComponents(block: Block, used: Set<string>): void {
  const name = componentNameFor(block)
  if (isKnownComponent(name)) used.add(name)
  for (const child of block.children) collectUsedComponents(child, used)
}

function collectBinds(block: Block, acc: Set<string>): void {
  const bind = block.directives.get('bind')
  if (bind) acc.add(bind)
  for (const c of block.children) collectBinds(c, acc)
}

function collectFlows(block: Block, acc: Set<string>): void {
  const flow = block.directives.get('flow')
  if (flow) acc.add(flow)
  for (const c of block.children) collectFlows(c, acc)
}

function collectEachCollections(block: Block, acc: Set<string>): void {
  const eachStr = block.directives.get('each')
  if (eachStr) {
    const parsed = parseEach(eachStr)
    // Only add simple identifiers as auto-props; complex expressions are user-owned.
    if (parsed && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(parsed.collection)) acc.add(parsed.collection)
  }
  for (const c of block.children) collectEachCollections(c, acc)
}

type EmitMode = 'fragment' | 'component'

function emitBlockCore(block: Block, indent: number, mode: EmitMode, extraAttrs: string[]): string {
  const pad = '  '.repeat(indent)
  const childPad = '  '.repeat(indent + 1)

  const text = block.directives.get('text')
  const loc = localizedTextOf(block)
  const hasText = text !== undefined || loc !== null
  const id = block.directives.get('id')
  const href = block.directives.get('href')
  const flow = block.directives.get('flow')
  const bind = block.directives.get('bind')
  const look = block.directives.get('look')
  const variant = block.directives.get('variant')
  const className = lookToClassName(look)

  const componentName = componentNameFor(block)

  const attrs: string[] = [...extraAttrs]
  if (id !== undefined) attrs.push(`id=${emitAttrValue(id)}`)
  if (className) attrs.push(`className="${className}"`)
  if (variant) attrs.push(`variant=${emitAttrValue(variant)}`)
  if (href !== undefined) attrs.push(`href=${emitAttrValue(href)}`)
  for (const a of PASSTHROUGH_ATTRS) {
    const v = block.directives.get(a)
    if (v !== undefined) attrs.push(`${a}=${emitAttrValue(v)}`)
  }
  if (bind) attrs.push(`value={${bind}} onChange={(v) => ${bindToSetter(bind)}(v)}`)
  if (flow) {
    const handlerRef = mode === 'component' ? flowToPropName(flow) : flowToHandler(flow)
    attrs.push(`onClick={${handlerRef}}`)
  }

  const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''

  if (block.children.length === 0 && !hasText) {
    return `${pad}<${componentName}${attrStr} />`
  }

  const lines: string[] = []
  lines.push(`${pad}<${componentName}${attrStr}>`)
  if (loc && mode === 'component') {
    const map =
      '{ ' +
      loc.locales.map(([l, v]) => `${JSON.stringify(l)}: ${localeValueExpr(v)}`).join(', ') +
      ' }'
    lines.push(`${childPad}{((${map}) as Record<string, string>)[locale] ?? ${localeValueExpr(loc.def)}}`)
  } else if (loc) {
    lines.push(`${childPad}${emitTextValue(loc.def)}`)
  } else if (text) {
    lines.push(`${childPad}${emitTextValue(text)}`)
  }
  for (const child of block.children) lines.push(emitBlock(child, indent + 1, mode))
  lines.push(`${pad}</${componentName}>`)
  return lines.join('\n')
}

function emitBlock(block: Block, indent: number, mode: EmitMode): string {
  const eachStr = block.directives.get('each')
  const ifStr = block.directives.get('if')
  const pad = '  '.repeat(indent)
  const innerIndent = (eachStr || ifStr) ? indent + 1 : indent

  const each = eachStr ? parseEach(eachStr) : null
  const extraAttrs = each ? ['key={index}'] : []

  let inner = emitBlockCore(block, innerIndent, mode, extraAttrs)

  if (each) {
    inner = `${pad}{${each.collection}.map((${each.varName}, index) => (\n${inner}\n${pad}))}`
  }

  if (ifStr) {
    inner = `${pad}{${ifStr.trim()} && (\n${inner}\n${pad})}`
  }

  return inner
}

function groupImportsByPackage(components: Set<string>): Map<string, string[]> {
  const byPkg = new Map<string, string[]>()
  for (const name of components) {
    const pkg = packageForComponent(name)
    if (!pkg) continue
    const arr = byPkg.get(pkg)
    if (arr) arr.push(name)
    else byPkg.set(pkg, [name])
  }
  for (const [, names] of byPkg) names.sort()
  return byPkg
}

function emitImportLines(components: Set<string>): string[] {
  const byPkg = groupImportsByPackage(components)
  if (byPkg.size === 0) return []
  return [...byPkg]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([pkg, names]) => `import { ${names.join(', ')} } from '${pkg}'`)
}

function pascalCase(s: string): string {
  return s.replace(/(?:^|[-_])([a-z])/g, (_, c: string) => c.toUpperCase())
    .replace(/(?:^|[-_])([A-Z])/g, (_, c: string) => c)
    .replace(/^(.)/, (_, c: string) => c.toUpperCase())
}

function inferExportName(doc: Document): string | null {
  const root = doc.blocks[0]
  if (!root?.name) return null
  return pascalCase(root.name)
}

export interface EmitReactOptions {
  exportName?: string
  sourcePath?: string | false
}

export function emitReact(doc: Document, options?: EmitReactOptions): string {
  const used = new Set<string>()
  for (const block of doc.blocks) collectUsedComponents(block, used)

  const exportName = options?.exportName ?? inferExportName(doc)
  const header = generatedHeader('js', options?.sourcePath)
  const headerPrefix = header ? `${header}\n\n` : ''

  if (!exportName) {
    const imports = emitImportLines(used).join('\n')
    const body = doc.blocks.map(b => emitBlock(b, 0, 'fragment')).join('\n\n')
    const main = imports ? `${imports}\n\n${body}` : body
    return `${headerPrefix}${main}`
  }

  const binds = new Set<string>()
  const flows = new Set<string>()
  const eachCollections = new Set<string>()
  for (const b of doc.blocks) {
    collectBinds(b, binds)
    collectFlows(b, flows)
    collectEachCollections(b, eachCollections)
  }

  const importLines: string[] = []
  if (binds.size > 0) importLines.push(`import { useState } from 'react'`)
  importLines.push(...emitImportLines(used))

  const needLocale = doc.blocks.some(blockNeedsLocale)
  const flowProps = [...flows].map(flowToPropName).sort()
  const eachProps = [...eachCollections].sort()
  const hasProps = flowProps.length > 0 || eachProps.length > 0 || needLocale

  const propLines: string[] = []
  for (const name of eachProps) propLines.push(`  ${name}: unknown[]`)
  for (const name of flowProps) propLines.push(`  ${name}?: () => void`)
  if (needLocale) propLines.push(`  locale?: string`)

  const propsInterface = hasProps
    ? `export interface ${exportName}Props {\n${propLines.join('\n')}\n}`
    : ''

  const destructureNames = [...eachProps, ...flowProps]
  if (needLocale) destructureNames.push(`locale = 'en'`)
  const propDestructure = hasProps ? `{ ${destructureNames.join(', ')} }: ${exportName}Props` : ''

  const stateLines = [...binds].sort().map(b => `  const [${b}, ${bindToSetter(b)}] = useState('')`)

  const multipleRoots = doc.blocks.length > 1
  const blockIndent = multipleRoots ? 3 : 2
  const bodyBlocks = doc.blocks.map(b => emitBlock(b, blockIndent, 'component')).join('\n\n')
  const returnBody = multipleRoots
    ? `    <>\n${bodyBlocks}\n    </>`
    : bodyBlocks

  const fnLines: string[] = []
  if (stateLines.length > 0) {
    fnLines.push(...stateLines, '')
  }
  fnLines.push('  return (')
  fnLines.push(returnBody)
  fnLines.push('  )')

  const parts: string[] = []
  parts.push(importLines.join('\n'))
  parts.push('')
  if (propsInterface) {
    parts.push(propsInterface)
    parts.push('')
  }
  parts.push(`export function ${exportName}(${propDestructure}) {`)
  parts.push(fnLines.join('\n'))
  parts.push('}')

  return `${headerPrefix}${parts.join('\n')}`
}