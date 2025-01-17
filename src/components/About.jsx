import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '/img/Unbenannt-2.svg';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main-container">
        <motion.h1           
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='about'>about
        </motion.h1>
        <motion.div             
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="logo-container">
          <img src={logo} alt='Logo' className="logo" />
        </motion.div>
        <motion.div className="about-container">
          <motion.h3             
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>Hey there! I'm Maxi, a 21-year-old digital artist with a passion for creating visual experiences that leave a lasting impression. My journey into the world of design began a few years ago, and since then, I've found my niche in crafting eye-catching social media art and cover artworks.
            Through my work, I aim to help brands and creators stand out in the crowded digital landscape. Whether it's designing scroll-stopping social media content or creating album covers that capture the essence of a musician's work, I bring creativity and precision to every project.
            My background in design, combined with an understanding of current social media trends, allows me to create visuals that not only look stunning but also resonate with today's digital audience.
            Want to work together or just chat about design? I'd love to hear from you!
          </motion.h3>
        </motion.div>
        <motion.div             
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }} className="contact-form-container">
          <h2>get in touch</h2>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </motion.div>
        <motion.div className='imprint'>
          <h3>
            <br />
            Imprint
          </h3>
          <p>
            Angaben gemäß § 5 TMG
            <br />
            Max Mustermann
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
          </p>
          <p>
            Kontakt
            <br />
            Telefon: +49 (0) 123 456789
            <br />
            E-Mail: info@musterfirma.dea
            <br />
            Website: www.musterfirma.de
          </p>
          <p>
            Vertreten durch
            <br />
            Max Mustermann
          </p>
          <p>
            Umsatzsteuer-ID
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE 123456789
          </p>
          <p>
            Haftungsausschluss
            <br />
            Haftung für Inhalte:
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            <br />
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p>
            Haftung für Links:
            <br />
            Unser Angebot enthält Links zu externen Websites Dritter, <br />
            auf deren Inhalte wir keinen Einfluss haben. 
            <br />
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
            <br />
          </p>
          <p>
            Urheberrecht:
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default About;