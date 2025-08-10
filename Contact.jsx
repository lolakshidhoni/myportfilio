import React, {useState} from 'react'
import './Contact.css' // your css file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Here you can integrate with EmailJS or backend API
    console.log('Message sent:', formData)

    setStatus('Message Sent ✅')

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    })

    // Hide success message after 3 seconds
    setTimeout(() => {
      setStatus('')
    }, 3000)
  }

  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type='submit'>Send</button>
      </form>

      {status && <p className='status-message'>{status}</p>}
    </div>
  )
}
