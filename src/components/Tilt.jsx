import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Tilt = () => {
  const tiltRef1 = useRef(null);
  const tiltRef2 = useRef(null);
  const tiltRef3 = useRef(null);
  const tiltRef4 = useRef(null);

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

const fadeInAnimationVariants2 = {
    initial: {
        opacity: 0,
        y: 0,
    },

    animate: {
        opacity: 1,
        y: 0,
    },
};


  useEffect(() => {
    if (tiltRef1.current) {
      VanillaTilt.init(tiltRef1.current, {
        max: 50,
        speed: 400,
        perspective: 500,
      });
    }
    if (tiltRef2.current) {
      VanillaTilt.init(tiltRef2.current, {
        max: 50,
        speed: 400,
        perspective: 500,
      });
    }
    if (tiltRef3.current) {
      VanillaTilt.init(tiltRef3.current, {
        max: 50,
        speed: 400,
        perspective: 500,
      });
    }
    if (tiltRef4.current) {
        VanillaTilt.init(tiltRef4.current, {
          max: 50,
          speed: 400,
          perspective: 500,
        });
      }
  }, []);

  return (
    <>
    <div className="tilt-container">
      <motion.div className="tilt-item tilt-item-1" ref={tiltRef1}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{once: true,}}
      transition={{ duration: 0.7, delay: 0, ease: "easeInOut" }}>
        <img src="https://placehold.co/300" alt="Tilted Image 1" />
      </motion.div>
      <motion.div className="tilt-item tilt-item-2" ref={tiltRef2}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{once: true,}}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}>
        <img src="https://placehold.co/300" alt="Tilted Image 2" />
      </motion.div>
      <motion.div className="tilt-item tilt-item-3" ref={tiltRef3}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{once: true,}}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}>
        <img src="https://placehold.co/300" alt="Tilted Image 3" />
      </motion.div>
      <motion.div className="tilt-item tilt-item-4" ref={tiltRef4}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{once: true,}}
      transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}>
        <img src="https://placehold.co/300" alt="Tilted Image 4" />
      </motion.div>
    </div>
      <motion.div className="button-container"
      variants={fadeInAnimationVariants2}
      initial="initial"
      whileInView="animate"
      viewport={{once: true,}}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}>
          <Link to="/projects" className="slider-button">View More</Link>
      </motion.div>
    </>
  );
};

export default Tilt;