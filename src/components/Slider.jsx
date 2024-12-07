import React from 'react'
import { motion } from "motion/react"
import One from '../images/img-1.jpeg'
import Two from '../images/img-2.jpeg'
import Three from '../images/img-3.jpeg'

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


const Slider = () => {
  return (
    <motion.div className="container"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.9, delay: 0, ease: "easeInOut" }}>
    <div className="slider-wrapper">
    <div className="slider">
      <img id="slide-1" src={One} />
      <img id="slide-2" src={Two} />
      <img id="slide-3" src={Three} />
    </div>
    <div className="slider-nav">
      <a href="#slide-1"></a>
      <a href="#slide-2"></a>
      <a href="#slide-3"></a>
    </div>
    </div>
    </motion.div>
  )
}

export default Slider