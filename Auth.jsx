import {useState} from 'react'
import {motion} from 'framer-motion'
import './Auth.css'

export default function Auth({setUser}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = e => {
    e.preventDefault()
    const storedPassword = localStorage.getItem(username)

    if (storedPassword) {
      if (storedPassword === password) {
        setUser(username)
        localStorage.setItem('user', username)
        alert(`Welcome back, ${username}!`)
      } else {
        alert('Wrong password!')
      }
    } else {
      localStorage.setItem(username, password)
      setUser(username)
      localStorage.setItem('user', username)
      alert(`Account created for ${username}!`)
    }
  }

  return (
    <motion.section
      className='auth-page'
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <motion.div
        className='auth-card'
        initial={{scale: 0.9, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay: 0.2, duration: 0.4}}
      >
        <h2>Sign In / Sign Up</h2>
        <form onSubmit={handleAuth}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type='submit' className='primary'>
            Submit
          </button>
        </form>
      </motion.div>
    </motion.section>
  )
}
