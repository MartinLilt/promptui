import { Block, Document } from './types'

type Token =
  | { kind: 'block_header'; blockType: string; name: string | null; line: number }
  | { kind: 'lbrace'; line: number }
  | { kind: 'rbrace'; line: number }
  | { kind: 'directive'; key: string; value: string; line: number }

export class ParseError extends Error {
  constructor(message: string, public line: number) {
    super(`[line ${line}] ${message}`)
    this.name = 'ParseError'
  }
}

function tokenize(source: string): Token[] {
  const tokens: Token[] = []

  for (const [i, raw] of source.split('\n').entries()) {
    const line = i + 1
    const trimmed = raw.trim()

    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#')) continue

    if (trimmed === '{') {
      tokens.push({ kind: 'lbrace', line })
      continue
    }

    if (trimmed === '}') {
      tokens.push({ kind: 'rbrace', line })
      continue
    }

    if (trimmed.startsWith('[')) {
      const match = trimmed.match(/^\[([A-Za-z][A-Za-z0-9_]*)(?::([A-Za-z][A-Za-z0-9_]*))?\](.*)$/)
      if (!match) throw new ParseError(`Invalid block header: ${trimmed}`, line)

      tokens.push({ kind: 'block_header', blockType: match[1], name: match[2] ?? null, line })

      const rest = match[3].trim()
      if (rest === '{') {
        tokens.push({ kind: 'lbrace', line })
      } else if (rest.startsWith('{') && rest.endsWith('}')) {
        // inline block: [Title] { text: "foo" } or [Title] { key: val key2: val2 }
        tokens.push({ kind: 'lbrace', line })
        const inner = rest.slice(1, -1).trim()
        const directiveRe = /([A-Za-z][A-Za-z0-9_@-]*)\s*:\s*(?:"([^"]*)"|((?:(?![A-Za-z][A-Za-z0-9_@-]*\s*:)\S)+(?:\s+(?![A-Za-z][A-Za-z0-9_@-]*\s*:)\S+)*))/g
        let m: RegExpExecArray | null
        while ((m = directiveRe.exec(inner)) !== null) {
          tokens.push({ kind: 'directive', key: m[1], value: m[2] ?? m[3].trim(), line })
        }
        tokens.push({ kind: 'rbrace', line })
      } else if (rest) {
        throw new ParseError(`Unexpected content after block header: ${rest}`, line)
      }
      continue
    }

    const colonIdx = trimmed.indexOf(':')
    if (colonIdx > 0) {
      const key = trimmed.slice(0, colonIdx).trim()
      const rawValue = trimmed.slice(colonIdx + 1).trim()
      if (/^[A-Za-z][A-Za-z0-9_@-]*$/.test(key)) {
        const value = rawValue.startsWith('"') && rawValue.endsWith('"')
          ? rawValue.slice(1, -1)
          : rawValue
        tokens.push({ kind: 'directive', key, value, line })
        continue
      }
    }
  }

  return tokens
}

class Parser {
  private pos = 0

  constructor(private readonly tokens: Token[]) {}

  parseDocument(): Document {
    const blocks: Block[] = []
    while (this.pos < this.tokens.length) {
      if (this.peek()?.kind === 'block_header') {
        blocks.push(this.parseBlock())
      } else {
        this.pos++
      }
    }
    return { blocks }
  }

  private parseBlock(): Block {
    const header = this.tokens[this.pos++]
    if (header.kind !== 'block_header') {
      throw new ParseError('Expected block header', header.line)
    }

    const lbrace = this.tokens[this.pos++]
    if (lbrace?.kind !== 'lbrace') {
      throw new ParseError(`Expected '{' after block header [${header.blockType}]`, header.line)
    }

    const directives = new Map<string, string>()
    const children: Block[] = []

    while (this.pos < this.tokens.length) {
      const tok = this.peek()
      if (!tok) break
      if (tok.kind === 'rbrace') { this.pos++; break }
      if (tok.kind === 'directive') { directives.set(tok.key, tok.value); this.pos++; continue }
      if (tok.kind === 'block_header') { children.push(this.parseBlock()); continue }
      this.pos++
    }

    return { blockType: header.blockType, name: header.name, directives, children }
  }

  private peek(): Token | undefined {
    return this.tokens[this.pos]
  }
}

export function parse(source: string): Document {
  const tokens = tokenize(source)
  return new Parser(tokens).parseDocument()
}