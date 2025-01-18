import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectItem from './ProjectItem';
import coverArt1 from '/img/cover_1.jpg';
import coverArt2 from '/img/cover_2.jpg';
import coverArt3 from '/img/cover_3.jpg';
import coverArt4 from '/img/cover_4.jpg';
import coverArt5 from '/img/cover_5.png';
import poster1 from '/img/poster_1.jpg';
import poster2 from '/img/poster_2.png';
import poster3 from '/img/poster_3.jpg';
import poster5 from '/img/poster_5.jpg';
import poster4 from '/img/poster_dt.png';

const Projects = () => {
  const coverArtworks = [
    { image: coverArt1, name: 'lauf für dich (2022)', description: '"lauf für dich" by swagboipi is an introspective song that delves into themes of inner conflict, self-doubt, and relationship dynamics. The artist reflects on alternative life paths and expresses regret over past decisions. He describes his music as vital, keeping his heart beating, while struggling with temptations like smoking. The metaphor of running at high speed and crashing into a wall symbolizes his self-destructive way of dealing with challenges. Despite these inner struggles, he emphasizes that everything seems fine in his relationship. The song conveys a sense of vulnerability and the constant battle between self-destruction and striving for personal growth.' },
    { image: coverArt2, name: '4lifer (2022)', description: '"4 lifer" by swagboipi is a poignant track that delves into themes of loss, emotional numbness, and longing. The artist uses the metaphor of a neglected flower to represent a past relationship, highlighting feelings of abandonment and the resulting emotional coldness. He reflects on his struggles with substance use as a coping mechanism, acknowledging the temporary relief it provides while expressing a desire for healing and closure.' },
    { image: coverArt3, name: 'x freund (2022)', description: '"x freund" by swagboipi is a reflective track that explores themes of separation, emotional turmoil, and personal transformation. The artist recounts a past relationship where he felt mistrust and betrayal, expressing regret over unfulfilled desires and the impact of deceit. He acknowledges the pain caused by lies and the resulting trauma, symbolizing his soul withering in the presence of his former partner. Despite the emotional exhaustion, he continues moving forward, guided by the citys lights, yet finds himself drawn back to his ex-partner to avoid inner coldness. The song delves into the complexities of lingering feelings post-breakup, the struggle for self-rediscovery, and the challenges of moving on from a relationship that left deep emotional scars.' },
    { image: coverArt5, name: 'ROSALILAPINK (2022)', description: '"Rosalilapink" by Lyran Dasz is an introspective song that explores themes of emotional emptiness, self-discovery, and the search for meaning in life. The artist reflects on inner turmoil and the feeling of unfulfillment, despite material wealth and fleeting relationships. He contemplates his inability to understand the world, leading to a deep sense of isolation. The song conveys a somber mood, with the artist caught between loneliness and a yearning for genuine connection.'},
  ];

  const posters = [
    { image: poster1, name: 'Fendi Baguette (2024,concept)', description: 'The Iconic Fendi Baguette: A Timeless Statement Celebrate the legacy of the Fendi Baguette, the bag that revolutionized the world of fashion. Introduced in 1997, this masterpiece redefined luxury with its elegant design and bold personality. Crafted to be effortlessly chic, the Baguette combines functionality with artistic flair. Known as the first true "It-bag," it has graced the arms of icons and continues to inspire fashion lovers around the globe. Whether in classic leather, adorned with sequins, or reimagined in modern collaborations, the Baguette is more than a bag—it’s a cultural phenomenon. Carry your style legacy forward with Fendi.' },
    { image: poster2, name: 'LV (2024, concept)', description: 'Louis Vuitton: Redefining Elegance Step into a world of timeless sophistication with Louis Vuitton’s iconic bags. Since 1854, Louis Vuitton has set the standard for luxury, blending artisanal craftsmanship with innovative design. Each bag is a masterpiece, showcasing the brand’s signature monogram, unparalleled attention to detail, and a commitment to enduring quality. Whether it’s the classic Speedy, the bold Capucines, or the versatile Neverfull, Louis Vuitton bags transcend trends and embody effortless chic. Carry a symbol of prestige, elegance, and heritage. A Louis Vuitton bag is more than an accessory—it’s a statement of style that lasts forever.' },
    { image: poster3, name: 'materialism (2024, concept)', description: 'A captivating display of designer bags paired with the profound wisdom of Swami Vivekananda:`Materialism and its miseries can never be conquered by materialism.´ This poster juxtaposes the allure of luxury with a timeless reflection on the limits of material wealth. While designer bags represent artistry, aspiration, and individuality, Vivekananda’s words challenge us to look deeper for lasting happiness and inner peace. Where elegance meets introspection—celebrate beauty while embracing the search for something greater.' },
    { image: poster4, name: 'Deutsches Theater (2025, concept)', description: 'Deutsches Theater Berlin Presents: Die kahle Sängerin Step into the absurd with Eugène Ionesco’s groundbreaking masterpiece, Die kahle Sängerin (The Bald Soprano). This iconic play challenges conventions and takes the audience on a surreal journey through the chaos of communication and the banality of modern life. With sharp wit, nonsensical dialogue, and a satirical edge, Die kahle Sängerin transforms the ordinary into the extraordinary. At the Deutsches Theater in Berlin, experience this timeless exploration of absurdity, humor, and the human condition—performed by a stellar cast in one of the city’s most historic venues. Discover the absurd. Embrace the unexpected. Only at the Deutsches Theater.' },
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