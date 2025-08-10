import React, {useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

import {FiSun, FiMoon, FiMenu, FiX} from 'react-icons/fi'
import './Navbar.css'

export default function Navbar() {
  const {user, signout} = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    signout()
    navigate('/signin')
  }

  return (
    <header className='nav'>
      <div className='nav-inner'>
        <div className='logo'>
          <Link to='/'>MyPortfolio</Link>
        </div>

        <nav className={`links ${open ? 'open' : ''}`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/skills'>Skills</Link>
          <Link to='/contact'>Contact</Link>

          {user ? (
            <button className='btn-logout' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to='/signin' className='login-link'>
              Login
            </Link>
          )}
        </nav>

        <button className='hamburger' onClick={() => setOpen(o => !o)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
