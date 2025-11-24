// Léger parseur de frontmatter compatible gray-matter pour l'environnement sans dépendances externes.
export default function matter(raw = '') {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/
  const match = raw.match(frontmatterRegex)

  let data = {}
  let content = raw

  if (match) {
    const frontmatter = match[1]
    content = raw.slice(match[0].length)
    data = frontmatter
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .reduce((acc, line) => {
        const [key, ...rest] = line.split(':')
        if (!key) return acc
        const rawValue = rest.join(':').trim()
        const value = rawValue.replace(/^['"]|['"]$/g, '')
        acc[key.trim()] = value
        return acc
      }, {})
  }

  return { data, content }
}
