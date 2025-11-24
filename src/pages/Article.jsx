import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleBySlug } from '../lib/articles'
import { renderMarkdown } from '../lib/markdown'
import Modal from '../components/Modal'
import { getEchoesForArticle, saveEcho } from '../lib/echoes'
import EchoList from '../components/EchoList'

function formatDate(date) {
  if (!date) return null
  return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)
}

export default function Article() {
  const { slug } = useParams()
  const art = getArticleBySlug(slug)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [echoes, setEchoes] = useState(() => getEchoesForArticle(slug))

  useEffect(() => {
    setEchoes(getEchoesForArticle(slug))
  }, [slug])

  if (!art) return <section><h2>Article non trouvé</h2></section>

  function handleEchoSubmit({ text, type }) {
    try {
      const saved = saveEcho({ article: slug, text, type })
      setEchoes((current) => [saved, ...current])
      setMessage('Écho enregistré localement. Vous pouvez exporter ce JSON et le publier si besoin.')
      setOpen(false)
      setTimeout(() => setMessage(''), 3000)
    } catch (e) {
      setMessage('Impossible d’enregistrer l’écho.')
    }
  }

  const formattedDate = formatDate(art.date)

  return (
    <article className="article-detail">
      <header>
        <p className="article-meta">
          {art.author}
          {formattedDate ? ` · ${formattedDate}` : ''}
        </p>
        <h2>{art.title}</h2>
      </header>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(art.content) }} />
      <div className="article-cta">
        <button className="btn" onClick={() => setOpen(true)}>Déposer un Écho</button>
        {message && <span className="echo-message">{message}</span>}
      </div>

      <section className="echo-panel">
        <div className="section-header">
          <div>
            <p className="eyebrow">Résonances</p>
            <h3>Échos partagés</h3>
            <p className="lead">Lecteurs et lectrices peuvent déposer un écho intime, pratique ou collectif.</p>
          </div>
        </div>
        <EchoList echoes={echoes} />
      </section>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={(payload) => { handleEchoSubmit(payload) }}
      />
    </article>
  )
}
