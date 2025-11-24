import React from 'react'
import { Link } from 'react-router-dom'
import { getAllArticles } from '../lib/articles'

export default function Articles(){
  const articles = getAllArticles()
  return (
    <section>
      <div className="section-header">
        <div>
          <p className="eyebrow">Collection</p>
          <h2>Articles</h2>
          <p className="lead">Une sélection de textes courts à parcourir librement.</p>
        </div>
      </div>
      <div className="article-grid">
        {articles.map(a => (
          <article key={a.slug} className="article-item">
            <div className="article-meta">{a.slug}</div>
            <h3><Link to={`/article/${a.slug}`}>{a.title}</Link></h3>
            <p className="article-summary">Texte concis, pensé pour être lu en une respiration.</p>
            <div className="article-actions">
              <Link className="btn ghost" to={`/article/${a.slug}`}>Lire</Link>
            </div>
          </article>
        ))}
        {articles.length === 0 && <p>Aucun article trouvé.</p>}
      </div>
    </section>
  )
}
