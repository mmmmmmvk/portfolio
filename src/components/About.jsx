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
      <motion.div className="about-container">
        <motion.h3 initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}>Hey there! I'm Maxi, a 21-year-old digital artist with a passion for creating visual experiences that leave a lasting impression. My journey into the world of design began a few years ago, and since then, I've found my niche in crafting eye-catching social media art and cover artworks.
          Through my work, I aim to help brands and creators stand out in the crowded digital landscape. Whether it's designing scroll-stopping social media content or creating album covers that capture the essence of a musician's work, I bring creativity and precision to every project.
          My background in design, combined with an understanding of current social media trends, allows me to create visuals that not only look stunning but also resonate with today's digital audience.
          Want to work together or just chat about design? I'd love to hear from you!
        </motion.h3>
      </motion.div>
    </>
  );
}

export default About;