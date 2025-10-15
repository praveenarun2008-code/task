import { Link } from 'react-router-dom'

export default function Navbar({ siteTitle = 'My Site' }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">{siteTitle} (student)</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
