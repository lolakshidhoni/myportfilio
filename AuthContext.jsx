import React, {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext()

const STORAGE_KEY = 'my_portfolio_user'

export function AuthProvider({children}) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  }, [user])

  // signup stores credentials in "users_db" simple map (for demo only)
  const signup = async ({username, email, password}) => {
    // load DB
    const raw = localStorage.getItem('users_db')
    const db = raw ? JSON.parse(raw) : {}
    if (db[email]) {
      throw new Error('User already exists')
    }
    db[email] = {username, email, password}
    localStorage.setItem('users_db', JSON.stringify(db))
    setUser({username, email})
  }

  const signin = async (email, password) => {
    const raw = localStorage.getItem('users_db')
    const db = raw ? JSON.parse(raw) : {}
    const record = db[email]
    if (!record || record.password !== password) {
      throw new Error('Invalid credentials')
    }
    setUser({username: record.username, email: record.email})
  }

  const signout = () => setUser(null)

  return (
    <AuthContext.Provider value={{user, signin, signup, signout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
