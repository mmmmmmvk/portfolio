import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '/img/Unbenannt-2.svg';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="contact-main-container">
        <motion.h1           
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='contact'>contact
        </motion.h1>
        <motion.div             
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }} className="contact-form-container">
          <h2>get in touch</h2>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </motion.div>
        <motion.div className="contact-socials">
          <motion.a             
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }} href="https://www.instagram.com/mmmmmmvk/" target="_blank" rel="noreferrer">
            <img src="/img/instagram.png" alt="Instagram" /></motion.a>
          <motion.a             
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }} href="https://www.behance.net/maximilvdovkin" target="_blank" rel="noreferrer">
            <img src="/img/behance.png" alt="Behance" /></motion.a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default About;