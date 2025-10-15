import { useState } from 'react'

export default function Contact({ title = 'Contact' }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks ${name}! We got your message.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </div>
  )
}
