import React from 'react'
import { Link } from 'react-router-dom'
import { getAllArticles } from '../lib/articles'

export default function Articles(){
  const articles = getAllArticles()
  return (
    <section>
      <h2>Articles</h2>
      <div className="article-list">
        {articles.map(a => (
          <article key={a.slug} className="article-item">
            <h3><Link to={`/article/${a.slug}`}>{a.title}</Link></h3>
            <p style={{margin:0,fontSize:'0.9rem',color:'#555'}}>slug: {a.slug}</p>
          </article>
        ))}
        {articles.length === 0 && <p>Aucun article trouvé.</p>}
      </div>
    </section>
  )
}
