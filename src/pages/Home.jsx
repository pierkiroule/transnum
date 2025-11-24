import React from 'react'

export default function Home(){
  return (
    <section className="home">
      <div className="hero">
        <div>
          <p className="eyebrow">Revue numérique</p>
          <h1>L'Écho Transnumériste</h1>
          <p className="lead">
            Petits fragments, pensées et échos existentiels qui s'écrivent, se relisent et
            se partagent. Découvrez une collection de notes courtes à picorer lentement.
          </p>
          <div className="actions">
            <a className="btn" href="/articles">Explorer les articles</a>
            <a className="ghost" href="#experience">Comprendre l'expérience</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>En bref</h3>
          <ul>
            <li>Lecture épurée et centrée sur le texte</li>
            <li>Modal « Écho » pour réagir sans s'interrompre</li>
            <li>Navigation rapide entre fragments</li>
          </ul>
        </div>
      </div>

      <div className="panel" id="experience">
        <div>
          <p className="eyebrow">Pourquoi ce format ?</p>
          <h2>Une lecture qui invite à la résonance</h2>
          <p>
            La revue propose des textes courts qui se savourent comme des cartes postales
            numériques. Chaque article est autonome, mais tous partagent un rythme doux et
            un ton introspectif.
          </p>
        </div>
        <div className="pillars">
          <div className="pillar">
            <h4>Simplicité</h4>
            <p>Mise en page aérée, contrastes nets, et un focus total sur la lecture.</p>
          </div>
          <div className="pillar">
            <h4>Respiration</h4>
            <p>Espaces généreux, blocs courts, et un rythme visuel qui évite la saturation.</p>
          </div>
          <div className="pillar">
            <h4>Interaction douce</h4>
            <p>Un bouton « Déposer un Écho » léger, pour laisser une trace sans friction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
