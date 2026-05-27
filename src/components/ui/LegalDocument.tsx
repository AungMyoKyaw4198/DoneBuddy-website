import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-heading text-4xl font-bold text-brown">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading text-xl font-semibold text-brown">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed text-brown-light">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-brown-light">{children}</ul>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-brown">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-sage-dark hover:underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

type LegalDocumentProps = {
  content: string
}

export default function LegalDocument({ content }: LegalDocumentProps) {
  return (
    <div className="space-y-6 [&_h2:not(:first-child)]:mt-2 [&_h2:not(:first-child)]:pt-2">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}
