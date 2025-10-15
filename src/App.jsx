import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  
  const homeTitle = "First react project"
  const aboutTitle = 'About this student project'
  const contactTitle = 'Contact (demo)'

  return (
      <>
        <Navbar siteTitle="Simple Site" />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home title={homeTitle} />}
            />
            <Route path="/about" element={<About title={aboutTitle} />} />
            <Route path="/contact" element={<Contact title={contactTitle} />} />
          </Routes>
        </main>
      </>
  )
}

export default App
