// Charge tous les fichiers Markdown situés dans /articles (root)
// Utilise un glob absolu pour être sûr que Vite empaquette correctement les fichiers statiques.
const modules = import.meta.glob('/articles/*.md', { as: 'raw', eager: true })

function filenameToSlug(path) {
  const name = path.split('/').pop() || ''
  return name.replace(/\.md$/, '')
}

function titleFromRaw(raw, slug) {
  const m = raw.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : slug
}

const articles = Object.entries(modules).map(([path, raw]) => {
  const slug = filenameToSlug(path)
  const title = titleFromRaw(raw, slug)
  return { slug, title, content: raw }
})

export function getAllArticles() {
  return articles.sort((a, b) => a.title.localeCompare(b.title))
}

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}
