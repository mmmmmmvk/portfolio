import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Environment } from '@react-three/drei'
import Introduction from './components/Introduction'
import Projectpreview from './components/Projectpreview'
import Tilt from './components/Tilt'
import Skills from './components/Skills'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Canvas>
          <Experience />
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
    </div>
  )
}

export default App
