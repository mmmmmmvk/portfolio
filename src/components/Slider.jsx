import React from 'react'
import { motion } from "motion/react"
import One from '/img/img-1.jpg'
import Two from '/img/img-2.jpg'
import Three from '/img/img-3.jpg'

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

const fadeInAnimationVariants2 = {
    initial: {
        opacity: 0,
        y: 0,
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
    <motion.div className="button-container"
    variants={fadeInAnimationVariants2}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0, ease: "easeInOut" }}>
        <a className="slider-button" href="#projects">View More</a>
    </motion.div>
    </motion.div>
  )
}

export default Slider