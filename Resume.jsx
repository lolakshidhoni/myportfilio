import React from 'react'
import {motion} from 'framer-motion'

export default function Resume() {
  return (
    <motion.div
      className='page'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <h1>Resume</h1>
      <p className='lead'>Download my resume or view highlights below.</p>
      <div className='resume-card'>
        <div>
          <h2>Lolakshi Neyyila</h2>
          <p className='muted'>Front-End Developer</p>
        </div>
        <div>
          <a
            className='cta-btn'
            href='/resume.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  )
}
