// src/pages/Projects.jsx
import React from 'react'
import {projects} from '../data/projectsData'
import './Projects.css'

export default function Projects() {
  return (
    <div className='page projects-page'>
      <h1>Projects</h1>
      <p className='lead'>Selected work — click "View" to open live site.</p>

      <div className='projects-grid'>
        {projects.map(p => (
          <article key={p.id} className='project-card'>
            <div>
              <h3>{p.title}</h3>
              <p className='muted'>{p.desc}</p>

              <div className='tag-row'>
                {p.tags.map(tag => (
                  <span key={tag} className='tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='card-actions'>
              <a
                href={p.link}
                target='_blank'
                rel='noopener noreferrer'
                className='project-link'
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
