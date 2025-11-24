import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'

export default function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  )
}
