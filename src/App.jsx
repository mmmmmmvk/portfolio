import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Environment } from '@react-three/drei'
import Introduction from './components/Introduction'
import Projectpreview from './components/Projectpreview'
import Slider from './components/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <Experience />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment files="/img/studio_hdri.hdr" environmentIntensity={5} />
        </Canvas>
      </div>
      <div>
        <section className="canvas"></section>
        <section className="introduction">
          <Introduction />
        </section>
        <section className="projects-main">
          <Projectpreview />
          <Slider />
        </section>
      </div>
    </div>
  )
}

export default App
