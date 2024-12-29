import React from 'react';
import { motion } from 'framer-motion';
import ProjectOverview from './ProjectOverview';
import Navbar from './Navbar';

const projectData = [
  {
    title: 'Project 1',
    previewImage: 'https://placehold.co/400',
    description: 'Detailed description of Project 1.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
  },
  {
    title: 'Project 2',
    previewImage: 'https://placehold.co/400',
    description: 'Detailed description of Project 2.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
  },
  {
    title: 'Project 3',
    previewImage: 'https://placehold.co/400',
    description: 'Detailed description of Project 3.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
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
        {projectData.map((project, index) => (
          <ProjectOverview key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;