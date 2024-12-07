import React from 'react'
import { motion } from "motion/react"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: {
        opacity: 1,
        y: 0,
    },
};



const Projectpreview = () => {
  return (
    <motion.h2 className='projectpreview'
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0, ease: "easeInOut" }}>
        Here are some of my projects:
    </motion.h2>
  )
}

export default Projectpreview