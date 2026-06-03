import type { ReactNode } from 'react'

// Inline: match inline code first (literal contents), then bold, then italic.
const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  INLINE.lastIndex = 0
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const t = m[0]
    if (t.startsWith('`')) {
      nodes.push(
        <code
          key={key++}
          className="font-mono text-[0.85em] bg-neutral-800 text-green-300 rounded px-1 py-0.5"
        >
          {t.slice(1, -1)}
        </code>,
      )
    } else if (t.startsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-semibold text-neutral-100">
          {t.slice(2, -2)}
        </strong>,
      )
    } else {
      nodes.push(
        <em key={key++} className="italic">
          {t.slice(1, -1)}
        </em>,
      )
    }
    last = INLINE.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function renderBlock(block: string, key: number): ReactNode {
  const lines = block.split('\n')
  if (block.startsWith('### ')) {
    return (
      <h4 key={key} className="text-sm font-semibold text-neutral-200 mt-3 first:mt-0">
        {parseInline(block.slice(4))}
      </h4>
    )
  }
  if (block.startsWith('## ')) {
    return (
      <h3 key={key} className="text-base font-semibold text-neutral-100 mt-4 first:mt-0">
        {parseInline(block.slice(3))}
      </h3>
    )
  }
  if (lines.every((l) => l.startsWith('> '))) {
    return (
      <blockquote
        key={key}
        className="border-l-2 border-green-700 pl-3 italic text-neutral-400 my-3"
      >
        {parseInline(lines.map((l) => l.slice(2)).join(' '))}
      </blockquote>
    )
  }
  if (lines.every((l) => l.startsWith('- '))) {
    return (
      <ul key={key} className="list-disc pl-5 mb-3 space-y-1">
        {lines.map((l, j) => (
          <li key={j}>{parseInline(l.slice(2))}</li>
        ))}
      </ul>
    )
  }
  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol key={key} className="list-decimal pl-5 mb-3 space-y-1">
        {lines.map((l, j) => (
          <li key={j}>{parseInline(l.replace(/^\d+\.\s/, ''))}</li>
        ))}
      </ol>
    )
  }
  return (
    <p key={key} className="mb-3 leading-relaxed last:mb-0">
      {parseInline(lines.join(' '))}
    </p>
  )
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/)
  return <div className="text-sm text-neutral-300">{blocks.map((b, i) => renderBlock(b, i))}</div>
}
