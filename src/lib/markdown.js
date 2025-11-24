import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: true })

export function renderMarkdown(raw) {
  return md.render(raw || '')
}
