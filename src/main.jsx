import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from "motion/react"
import './index.css'
import App from './App.jsx'
import Introduction from './components/Introduction.jsx'
import Projectpreview from './components/Projectpreview.jsx'
import Slider from './components/Slider.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <div>
  <section className="canvas">
  <StrictMode>
    <App/>
  </StrictMode>
  </section>
  <div className="header">
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <section className="introduction">
    <Introduction />
  </section>
  <section className="projects-main">
    <Projectpreview />
    <Slider />


  </section>
  </div>
  </>
)
