import Hero from '../components/Hero.jsx'
import { useState } from 'react'

export default function Home({ title = 'Home', subtitle = '', output = '' }) {
  const [showOutput, setShowOutput] = useState(true)

  return (
    <div className="page home-page">
      <Hero
        title={title}
        subtitle={subtitle}
        cta={{ href: '/contact', label: 'Click here' }}
      />
    </div>
  )
}
