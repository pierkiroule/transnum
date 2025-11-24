import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <nav>
      <div className="brand"><Link to="/">L'Écho Transnumériste</Link></div>
      <div style={{flex:1}} />
      <Link to="/articles">Articles</Link>
    </nav>
  )
}
