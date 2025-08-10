import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {AuthProvider} from './context/AuthContext'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main className='app-main'>
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />

              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/about'
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/projects'
                element={
                  <ProtectedRoute>
                    <Projects />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/projects/:id'
                element={
                  <ProtectedRoute>
                    <ProjectDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/resume'
                element={
                  <ProtectedRoute>
                    <Resume />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/skills'
                element={
                  <ProtectedRoute>
                    <Skills />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/contact'
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
      </AuthProvider>
    </Router>
  )
}
