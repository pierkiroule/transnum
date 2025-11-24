---
title: "Principe de la revue"
date: "2024-06-01"
author: "Équipe éditoriale"
---

# Principe de la revue L'Écho Transnumériste

L'Écho Transnumériste est une revue scientifique frugale, ouverte et décentralisée. Cette note résume la façon dont la revue fonctionne, l'intention éditoriale et les choix techniques qui guident la plateforme.

## 1) Nature de la revue

- Revue numérique open source.
- Contenus rédigés en Markdown, stockés dans un dépôt Git.
- Publications statiques, légères et accessibles via GitHub Pages.
- Pas d'infrastructure lourde ni de serveurs coûteux.

## 2) Objectif

Créer une revue scientifique où :

- La frugalité numérique est centrale.
- Les auteurs restent souverains sur leurs textes.
- Le savoir circule hors des plateformes commerciales.
- Les lecteurs deviennent co-acteurs, pas simples consommateurs.

## 3) Système de validation : l'Écho Existentiel

L'évaluation d'un article repose sur les résonances humaines, recueillies sous forme d'échos JSON :

1. 🌱 **Écho intime** — ce que le texte a transformé en moi (réflexion, émotion, compréhension).
2. 🌿 **Écho pratique** — ce que le texte m'a permis d'expérimenter, de tester ou de modifier dans ma pratique.
3. 🌳 **Écho collectif** — l'impact du texte dans un groupe, une équipe, une classe, un atelier, une communauté.

La validation scientifique est la somme qualitative de ces résonances.

## 4) Architecture technique simple

- Webapp React + Vite.
- Articles Markdown rendus via markdown-it ou remark.
- Échos stockés en JSON.
- Parcours : liste d'articles + lecture.
- Mode statique compatible GitHub Pages et GitHub Codespaces.

## 5) Dimension transnumériste

La revue cultive une relation harmonieuse entre humains et IA. L'IA :

- soutient la co-rédaction,
- propose des clarifications ou restructurations,
- aide à synthétiser les échos,
- ne remplace jamais l'auteur humain.

L'IA est un instrument de résonance, pas un substitut de pensée.

## 6) Décentralisation (option IPFS)

Pour réduire la dépendance aux serveurs :

- les articles peuvent être publiés sur IPFS ;
- les lecteurs peuvent héberger le contenu via Helia dans leur navigateur ;
- plus il y a de lecteurs, plus la revue est résiliente.

## 7) Philosophie

Frugalité technologique. Transparence. Souveraineté des auteurs. Simplicité radicale du code. Pas de tracking. Pas de métriques toxiques. Pas de barrières payantes. Une science vivante, accessible et poétique.

## 8) Mission pour l'IA

Générer du code clair, léger et lisible. Prioriser les solutions statiques sans serveur. Aider à structurer le passage Markdown → HTML → rendu. Ne jamais enfermer les données dans des structures privées.
