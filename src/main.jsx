import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from "motion/react"
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Introduction from './components/Introduction.jsx'
import Projectpreview from './components/Projectpreview.jsx'
import Slider from './components/Slider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Router>
        <div>
          <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>
)
