import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.h1 initial = {{ opacity: 0, y: -100 }} 
    whileInView = {{ opacity: 1, y: 0 }} 
    exit = {{ opacity: 0 }} 
    transition = {{ duration: 0.5, ease: "easeInOut" }}  
    className='contact'>contact
    </motion.h1>
  )
}

export default Contact