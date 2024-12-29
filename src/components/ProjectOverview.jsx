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
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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