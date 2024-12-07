import React from 'react';
import { motion } from "motion/react";

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


const Introduction = () => {
  return (
    <div>
    <motion.h1
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}>
        Hi, I'm Maxi.
    </motion.h1>
    <motion.h2
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0, ease: "easeInOut" }}>
        I'm a Designer based in Potsdam, Germany.
    </motion.h2>
    </div>
  )
}

export default Introduction