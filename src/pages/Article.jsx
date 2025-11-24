import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleBySlug } from '../lib/articles'
import { renderMarkdown } from '../lib/markdown'
import Modal from '../components/Modal'

export default function Article() {
  const { slug } = useParams()
  const art = getArticleBySlug(slug)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  if (!art) return <section><h2>Article non trouvé</h2></section>

  function handleEchoSubmit(texte) {
    try {
      const raw = localStorage.getItem('echoes')
      const echoes = raw ? JSON.parse(raw) : []
      const newEcho = { id: Date.now(), article: slug, text: texte }
      echoes.push(newEcho)
      localStorage.setItem('echoes', JSON.stringify(echoes))
      setMessage('Écho enregistré localement.')
      setTimeout(() => setMessage(''), 3000)
    } catch (e) {
      setMessage('Impossible d’enregistrer l’écho.')
    }
  }

  return (
    <article>
      <h2>{art.title}</h2>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(art.content) }} />
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={() => setOpen(true)}>Déposer un Écho</button>
        {message && <span style={{ marginLeft: 12 }}>{message}</span>}
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={(text) => { handleEchoSubmit(text) }}
      />
    </article>
  )
}
