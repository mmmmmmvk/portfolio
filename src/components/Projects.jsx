import React from 'react';
import { motion } from 'framer-motion';
import ProjectOverview from './ProjectOverview';
import Navbar from './Navbar';
import Footer from './Footer';

const projectData = [
  {
    title: 'ROSALILAPINK',
    previewImage: '/img/cover_5.png',
    description: 'Lyran Dasz (2022)',
    images: [
      '/img/cover_5.png',
    ],
  },
  {
    title: '4lifer',
    previewImage: '/img/cover_2.jpg',
    description: 'swagboipi (2022)',
    images: [
      '/img/cover_2.jpg',
    ],
  },
  {
    title: 'x-freund',
    previewImage: '/img/cover_3.jpg',
    description: 'swagboipi (2022)',
    images: [
      'img/cover_3.jpg',
    ],
  },
  {
    title: 'lauf für dich',
    previewImage: '/img/cover_1.jpg',
    description: 'swagboipi (2022)',
    images: [
      'img/cover_1.jpg',
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <motion.h1 initial={{ opacity: 0, y: -100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0 }}
        viewport={{ once: true }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}  
        className='projects'>projects
      </motion.h1>
      <div className="projects">
        <motion.h2 initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}>
          cover artworks
        </motion.h2>
        <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectOverview key={index} project={project} />
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;