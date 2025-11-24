import React from 'react'

const labels = {
  intime: 'Écho intime',
  pratique: 'Écho pratique',
  collectif: 'Écho collectif'
}

export default function EchoList({ echoes }) {
  if (!echoes || echoes.length === 0) {
    return <p className="muted">Aucun écho pour le moment. Soyez la première voix à résonner.</p>
  }

  return (
    <div className="echo-list">
      {echoes.map((echo) => (
        <div key={echo.id} className="echo-card">
          <div className="echo-meta">
            <span className={`pill pill-${echo.type || 'intime'}`}>
              {labels[echo.type] || 'Écho'}
            </span>
            {echo.createdAt && (
              <time>{new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium' }).format(new Date(echo.createdAt))}</time>
            )}
            {echo.source && <span className="echo-source">{echo.source}</span>}
          </div>
          <p className="echo-text">{echo.text}</p>
        </div>
      ))}
    </div>
  )
}
