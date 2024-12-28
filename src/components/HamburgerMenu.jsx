import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        &#9776;
      </button>
      {isOpen && (
        <div className="menu-overlay">
          <button className="close-icon" onClick={toggleMenu}>
            &times;
          </button>
          <div className="menu-links">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;