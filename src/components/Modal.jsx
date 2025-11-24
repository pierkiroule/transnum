import React, { useState, useEffect } from 'react'

const DEFAULT_TYPE = 'intime'

export default function Modal({ isOpen, onClose, onSubmit, title = 'Déposer un Écho' }) {
  const [text, setText] = useState('')
  const [type, setType] = useState(DEFAULT_TYPE)

  useEffect(() => {
    if (isOpen) {
      setText('')
      setType(DEFAULT_TYPE)
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleSubmit() {
    const v = text.trim()
    if (!v) return
    onSubmit({ text: v, type })
  }

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <h3 style={{marginTop:0}}>{title}</h3>
        <div className="echo-type">
          <label>
            <input
              type="radio"
              name="echoType"
              value="intime"
              checked={type === 'intime'}
              onChange={e => setType(e.target.value)}
            />
            Écho intime
          </label>
          <label>
            <input
              type="radio"
              name="echoType"
              value="pratique"
              checked={type === 'pratique'}
              onChange={e => setType(e.target.value)}
            />
            Écho pratique
          </label>
          <label>
            <input
              type="radio"
              name="echoType"
              value="collectif"
              checked={type === 'collectif'}
              onChange={e => setType(e.target.value)}
            />
            Écho collectif
          </label>
        </div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: 8, fontSize: '0.95rem' }}
          placeholder="Écrire un court écho..."
        />
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }}>
          <button className="btn" onClick={handleSubmit}>Enregistrer</button>
          <button onClick={onClose} style={{ background: '#eee', borderRadius: 6, padding: '8px 12px', border: 'none' }}>Annuler</button>
        </div>
      </div>
    </div>
  )
}
