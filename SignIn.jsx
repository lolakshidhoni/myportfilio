import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import './SignIn.css'

export default function SignIn() {
  const {user, signin} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const handle = async e => {
    e.preventDefault()
    setErr('')
    try {
      await signin(email, password)
      navigate('/')
    } catch (error) {
      setErr(error.message || 'Login failed')
    }
  }

  return (
    <section className='auth-page'>
      <form className='auth-card' onSubmit={handle}>
        <h2>Sign In</h2>
        {err && <div className='error'>{err}</div>}
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
        <button className='primary'>Sign In</button>
        <div className='alt'>
          Don't have an account? <a href='/signup'>Sign up</a>
        </div>
      </form>
    </section>
  )
}
