import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from "motion/react"
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Projects from './components/projects.jsx'
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
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>
)
