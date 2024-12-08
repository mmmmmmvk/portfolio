import React from 'react'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <motion.h1 initial = {{ opacity: 0, y: -100 }} 
    whileInView = {{ opacity: 1, y: 0 }} 
    exit = {{ opacity: 0 }} 
    transition = {{ duration: 0.7, ease: "easeInOut" }}  
    className='projects'>projects
    </motion.h1>
  )
}

export default Projects