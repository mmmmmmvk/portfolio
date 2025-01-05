import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <motion.h1 initial={{ opacity: 0, y: -100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}  
        className='about'>about
      </motion.h1>
    </>
  );
}

export default About;