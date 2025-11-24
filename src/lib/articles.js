import matter from 'gray-matter'

// Charge tous les fichiers Markdown situés dans /articles (root)
// Utilise un glob absolu pour être sûr que Vite empaquette correctement les fichiers statiques.
const modules = import.meta.glob('/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

function filenameToSlug(path) {
  const name = path.split('/').pop() || ''
  return name.replace(/\.md$/, '')
}

function titleFromRaw(raw, slug) {
  const m = raw.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : slug
}

function normalizeDate(value) {
  const d = value ? new Date(value) : null
  return Number.isNaN(d?.getTime()) ? null : d
}

const articles = Object.entries(modules).map(([path, raw]) => {
  const slug = filenameToSlug(path)
  const parsed = matter(raw || '')
  const title = parsed.data.title || titleFromRaw(parsed.content, slug)
  const date = normalizeDate(parsed.data.date)
  const author = parsed.data.author || 'Anonyme'

  return { slug, title, date, author, content: parsed.content.trim() }
})

function sortByDateAndTitle(a, b) {
  if (a.date && b.date) return b.date - a.date
  if (a.date) return -1
  if (b.date) return 1
  return a.title.localeCompare(b.title)
}

export function getAllArticles() {
  return [...articles].sort(sortByDateAndTitle)
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}
