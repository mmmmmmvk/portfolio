import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-overview">
      <motion.img
        src={project.previewImage}
        alt={project.title}
        className="project-preview"
        onClick={toggleModal}
        initial = {{ opacity: 0, y: 100 }} 
        whileInView = {{ opacity: 1, y: 0 }}
        viewport={{once: true,}} 
        exit = {{ opacity: 0 }} 
        transition = {{ duration: 0.5, ease: "easeInOut" }}
      />
      {isOpen && (
        <div className="modal-overlay" 
          onClick={toggleModal}>
          <div className="modal-content" 
            onClick={(e) => e.stopPropagation()}>
            <button className="close-button" 
              onClick={toggleModal}>
              &times;
            </button>
            <motion.h2 
            initial = {{ opacity: 0, x: -100 }} 
            whileInView = {{ opacity: 1, x: 0 }}
            viewport={{once: true,}} 
            exit = {{ opacity: 0 }} 
            transition = {{ duration: 0.5, ease: "easeInOut" }}>{project.title}</motion.h2>
            <motion.p
            initial = {{ opacity: 0, x: -100 }} 
            whileInView = {{ opacity: 1, x: 0 }}
            viewport={{once: true,}} 
            exit = {{ opacity: 0 }} 
            transition = {{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}>{project.description}</motion.p>
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} ${index + 1}`} className="project-image" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;