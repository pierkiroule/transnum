const staticModules = import.meta.glob('/echoes/*.json', {
  import: 'default',
  eager: true
})

const staticEchoes = Object.values(staticModules)
  .map((data, index) => ({
    id: data.id ?? index,
    article: data.article,
    text: data.text,
    type: data.type || 'intime',
    createdAt: data.createdAt || null,
    source: 'statique'
  }))
  .filter(e => Boolean(e.article))

function isBrowser() {
  return typeof window !== 'undefined'
}

function readLocalEchoes() {
  if (!isBrowser()) return []
  try {
    const raw = window.localStorage.getItem('echoes')
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch (e) {
    return []
  }
}

function persistLocalEchoes(list) {
  if (!isBrowser()) return
  window.localStorage.setItem('echoes', JSON.stringify(list))
}

function normalizeEcho(payload) {
  return {
    id: payload.id ?? Date.now(),
    article: payload.article,
    text: payload.text.trim(),
    type: payload.type || 'intime',
    createdAt: payload.createdAt || new Date().toISOString(),
    source: payload.source || 'local'
  }
}

export function saveEcho(echo) {
  const list = readLocalEchoes()
  const normalized = normalizeEcho(echo)
  list.push(normalized)
  persistLocalEchoes(list)
  return normalized
}

export function getEchoesForArticle(slug) {
  const locals = readLocalEchoes()
  const combined = [...staticEchoes, ...locals].filter(e => e.article === slug)
  return combined.sort((a, b) => {
    const da = a.createdAt ? new Date(a.createdAt).getTime() : 0
    const db = b.createdAt ? new Date(b.createdAt).getTime() : 0
    if (da && db) return db - da
    return String(b.id).localeCompare(String(a.id))
  })
}
