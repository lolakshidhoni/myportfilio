import React from 'react'
import {motion} from 'framer-motion'
import './Home.css'

export default function Home() {
  return (
    <motion.section
      className='home-page page'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -10}}
    >
      <div className='home-inner'>
        <h1>Hi, I'm Lolakshi</h1>
        <p className='subtitle'>Frontend Developer • React • Animations • UI</p>
        <div className='home-cta'>
          <a className='btn' href='/projects'>
            View Projects
          </a>
          <a className='btn-outline' href='/about'>
            About Me
          </a>
        </div>
      </div>
      <div className='home-right'>
        <img
          src='/images/lol2.jpg'
          alt='My Photo'
          style={{width: '300px', borderRadius: '10px'}}
        />
      </div>
    </motion.section>
  )
}
