import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import './SignUp.css'

export default function SignUp() {
  const {signup} = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const handle = async e => {
    e.preventDefault()
    setErr('')
    try {
      await signup({username, email, password})
      navigate('/')
    } catch (error) {
      setErr(error.message || 'Signup failed')
    }
  }

  return (
    <section className='auth-page'>
      <form className='auth-card' onSubmit={handle}>
        <h2>Create account</h2>
        {err && <div className='error'>{err}</div>}
        <input
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className='primary'>Sign Up</button>
      </form>
    </section>
  )
}
