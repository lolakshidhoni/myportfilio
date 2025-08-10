import React from 'react'
import {motion} from 'framer-motion'

export default function Skills() {
  const groups = [
    {title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'python', 'SQL']},
    {title: 'Frameworks', items: ['React', 'Framer Motion']},
  ]
  return (
    <motion.div
      className='page'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <h1>Skills</h1>
      <div className='skills-grid'>
        {groups.map(g => (
          <div className='skill-card' key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
