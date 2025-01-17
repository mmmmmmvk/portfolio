import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectItem from './ProjectItem';
import coverArt1 from '/img/cover_1.jpg';
import coverArt2 from '/img/cover_2.jpg';
import coverArt3 from '/img/cover_3.jpg';
import coverArt4 from '/img/cover_4.jpg';
import poster1 from '/img/poster_1.jpg';
import poster2 from '/img/poster_2.png';
import poster3 from '/img/poster_3.jpg';
import poster4 from '/img/poster_4.png';
import poster5 from '/img/poster.gif';
import poster6 from '/img/poster_dt.png'

const Projects = () => {
  const coverArtworks = [
    { image: coverArt1, name: 'lauf für dich (2022)', description: '"lauf für dich" by swagboipi is an introspective song that delves into themes of inner conflict, self-doubt, and relationship dynamics. The artist reflects on alternative life paths and expresses regret over past decisions. He describes his music as vital, keeping his heart beating, while struggling with temptations like smoking. The metaphor of running at high speed and crashing into a wall symbolizes his self-destructive way of dealing with challenges. Despite these inner struggles, he emphasizes that everything seems fine in his relationship. The song conveys a sense of vulnerability and the constant battle between self-destruction and striving for personal growth.' },
    { image: coverArt2, name: '4lifer (2022)', description: '"4 lifer" by swagboipi is a poignant track that delves into themes of loss, emotional numbness, and longing. The artist uses the metaphor of a neglected flower to represent a past relationship, highlighting feelings of abandonment and the resulting emotional coldness. He reflects on his struggles with substance use as a coping mechanism, acknowledging the temporary relief it provides while expressing a desire for healing and closure.' },
    { image: coverArt3, name: 'x freund (2022)', description: '"x freund" by swagboipi is a reflective track that explores themes of separation, emotional turmoil, and personal transformation. The artist recounts a past relationship where he felt mistrust and betrayal, expressing regret over unfulfilled desires and the impact of deceit. He acknowledges the pain caused by lies and the resulting trauma, symbolizing his soul withering in the presence of his former partner. Despite the emotional exhaustion, he continues moving forward, guided by the citys lights, yet finds himself drawn back to his ex-partner to avoid inner coldness. The song delves into the complexities of lingering feelings post-breakup, the struggle for self-rediscovery, and the challenges of moving on from a relationship that left deep emotional scars.' },
    { image: coverArt4, name: 'TOP 1 (2020)', description: '"TOP 1" by swagboipi and Junger Broh is an energetic track that showcases the artists confidence and ambition. The song emphasizes their determination to reach the top of their game, highlighting themes of perseverance and self-assurance. The collaboration blends dynamic beats with assertive lyrics, creating an anthem of ambition and drive. Released in 2020, "TOP 1" reflects the artists commitment to their craft and their aspiration to achieve excellence in their musical journey.' },
  ];

  const posters = [
    { image: poster1, name: 'Poster 1', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
    { image: poster2, name: 'Poster 2', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
    { image: poster3, name: 'Poster 3', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
    { image: poster6, name: 'Poster 6', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="projects-main-container">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-title"
        >
          projects
        </motion.h1>

        <section className="project-section">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Cover Artworks
          </motion.h2>
          
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coverArtworks.map((art, index) => (
              <ProjectItem key={index} {...art} index={index} />
            ))}
          </motion.div>
        </section>

        <section className="project-section">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Posters
          </motion.h2>
          
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {posters.map((poster, index) => (
              <ProjectItem key={index} {...poster} index={index} />
            ))}
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;