import React from 'react'
import {useParams, Link} from 'react-router-dom'
import './ProjectDetail.css'
import {projects} from '../data/projectsData'

export default function ProjectDetail() {
  const {id} = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className='page'>
        <h1>Not found</h1>
        <Link to='/projects'>Back</Link>
      </div>
    )
  }

  return (
    <div className='page project-detail'>
      <h1>{project.title}</h1>
      <p className='lead'>{project.desc}</p>
      <div style={{marginTop: 18}}>
        <a
          className='project-link'
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Demo
        </a>
        <Link to='/projects' className='project-link' style={{marginLeft: 12}}>
          Back
        </Link>
      </div>
    </div>
  )
}
