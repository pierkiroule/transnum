import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <nav className="nav">
      <div className="brand">
        <Link to="/">L'Écho Transnumériste</Link>
        <span className="brand-sub">Fragments numériques et résonances poétiques</span>
      </div>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/articles">Articles</Link>
      </div>
    </nav>
  )
}
