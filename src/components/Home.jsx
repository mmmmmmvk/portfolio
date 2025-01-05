
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Introduction from './Introduction';
import Projectpreview from './Projectpreview';
import Tilt from './Tilt';
import Skills from './Skills';
import { Experience } from './Experience';
import { Experiencemobile } from './Experiencemobile';
import Navbar from './Navbar';
import '../App.css';
import { useEffect, useState } from 'react';
import Footer from './Footer';


function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="wordmarksection">
        <Canvas>
          <Experience />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment files="/img/studio_hdri.hdr" environmentIntensity={5} />
        </Canvas>
      </div>
      <div className="wordmarksectionmobile">
        <Canvas>
          <Experiencemobile />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment files="/img/studio_hdri.hdr" environmentIntensity={5} />
        </Canvas>
      </div>
      <div>
        <section className="introduction">
          <Introduction />
        </section>
        <section className="skills">
          <Skills />
        </section>
        <section className="projects-main">
          <Projectpreview />
          <Tilt />
        </section>
      </div>
      <div className="scroll-indicator" style={{ opacity: scrollY === 0 ? 1 : 0 }}>
        <div className="scroll-bar"></div>
      </div>
      <Footer />
    </div>
  );
}


export default Home;