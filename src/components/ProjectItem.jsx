import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { motion } from 'framer-motion';

const ProjectItem = ({ image, name, description, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleViewDetails = () => {
    setShowDetails(true);
    setIsHovered(false); // Reset hover state when opening details
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setIsHovered(false); // Reset hover state when closing details
  };

  return (
    <motion.div 
      className="project-item"
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="project-item-inner"
        animate={{
          scale: isHovered ? 1.05 : 1,
          transition: { duration: 0.3 }
        }}
      >
        <img 
          src={image} 
          alt={name} 
          onClick={handleViewDetails} 
          className="project-image" 
        />
        <motion.div 
          className="project-overlay"
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <h3>{name}</h3>
          <p className="project-preview">{description.substring(0, 100)}...</p>
          <button className="view-details-btn" onClick={handleViewDetails}>View Details</button>
        </motion.div>
      </motion.div>

      {showDetails && (
        <ProjectDetails
          name={name}
          description={description}
          image={image}
          onClose={handleCloseDetails}
        />
      )}
    </motion.div>
  );
};

export default ProjectItem;