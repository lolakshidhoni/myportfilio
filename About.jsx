// src/pages/About.js
import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.div
      className='page'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -10}}
      transition={{duration: 0.5}}
    >
      <h1>About Me</h1>
      <p className='lead'>
        I’m a front-end developer who loves building polished UI.
      </p>
      <img src='/profile.jpg' alt='Profile' className='profile-img' />
      <p style={{marginTop: 12}}>
        I focus on React, animations, and accessible responsive design.
      </p>
    </motion.div>
  )
}
