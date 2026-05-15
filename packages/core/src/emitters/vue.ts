import { Block, Document } from '../types'
import { lookupByUse, isKnownComponent, packageForComponent } from '../library'
import { generatedHeader } from './header'

function lookToClass(look: string | undefined): string {
  if (!look) return ''
  return look.split(/\s+/).filter(Boolean).join(' ')
}

function flowToHandler(flow: string): string {
  return flow.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

const EACH_RE = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.+?)\s*$/
const EXPR_RE = /^\{\{\s*(.+?)\s*\}\}$/

function parseEach(value: string): { varName: string; collection: string } | null {
  const m = value.match(EACH_RE)
  if (!m) return null
  return { varName: m[1], collection: m[2].trim() }
}

function emitTextValue(value: string): string {
  // In Vue, template interpolation is {{ }} natively. DSL {{expr}} → template {{ expr }}.
  const m = value.match(EXPR_RE)
  if (m) return `{{ ${m[1]} }}`
  return value
}

function emitAttrValue(value: string, attr: string): string {
  const m = value.match(EXPR_RE)
  if (m) return `:${attr}="${m[1]}"`
  return `${attr}="${value}"`
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

function emitBlock(block: Block, indent: number): string {
  const pad = '  '.repeat(indent)
  const childPad = '  '.repeat(indent + 1)

  const text = block.directives.get('text')
  const href = block.directives.get('href')
  const flow = block.directives.get('flow')
  const bind = block.directives.get('bind')
  const look = block.directives.get('look')
  const variant = block.directives.get('variant')
  const eachStr = block.directives.get('each')
  const ifStr = block.directives.get('if')
  const cls = lookToClass(look)

  const tag = componentNameFor(block)

  const attrs: string[] = []
  if (ifStr) attrs.push(`v-if="${ifStr.trim()}"`)
  if (eachStr) {
    const parsed = parseEach(eachStr)
    if (parsed) attrs.push(`v-for="(${parsed.varName}, index) in ${parsed.collection}"`, `:key="index"`)
  }
  if (cls) attrs.push(`class="${cls}"`)
  if (variant) attrs.push(emitAttrValue(variant, 'variant'))
  if (href !== undefined) attrs.push(emitAttrValue(href, 'href'))
  if (bind) attrs.push(`:modelValue="${bind}" @update:modelValue="${bind} = $event"`)
  if (flow) attrs.push(`@click="${flowToHandler(flow)}"`)

  const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''

  if (block.children.length === 0 && !text) {
    return `${pad}<${tag}${attrStr} />`
  }

  const lines: string[] = []
  lines.push(`${pad}<${tag}${attrStr}>`)
  if (text) lines.push(`${childPad}${emitTextValue(text)}`)
  for (const child of block.children) lines.push(emitBlock(child, indent + 1))
  lines.push(`${pad}</${tag}>`)
  return lines.join('\n')
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

function emitScriptBlock(components: Set<string>): string {
  const byPkg = groupImportsByPackage(components)
  if (byPkg.size === 0) return ''
  const lines: string[] = ['<script setup lang="ts">']
  for (const [pkg, names] of [...byPkg].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`import { ${names.join(', ')} } from '${pkg}'`)
  }
  lines.push('</script>')
  return lines.join('\n')
}

export interface EmitVueOptions {
  sourcePath?: string | false
}

export function emitVue(doc: Document, options?: EmitVueOptions): string {
  const used = new Set<string>()
  for (const block of doc.blocks) collectUsedComponents(block, used)

  const scriptBlock = emitScriptBlock(used)
  const body = doc.blocks.map(b => emitBlock(b, 0)).join('\n\n')
  const template = `<template>\n${body}\n</template>`

  const main = scriptBlock ? `${scriptBlock}\n\n${template}` : template
  const header = generatedHeader('html', options?.sourcePath)
  return header ? `${header}\n\n${main}` : main
}