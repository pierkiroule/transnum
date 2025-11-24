import React, { useState, useEffect } from 'react'

export default function Modal({ isOpen, onClose, onSubmit, title = 'Déposer un Écho' }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (isOpen) setText('')
  }, [isOpen])

  if (!isOpen) return null

  function handleSubmit() {
    const v = text.trim()
    if (!v) return
    onSubmit(v)
  }

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <h3 style={{marginTop:0}}>{title}</h3>
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
