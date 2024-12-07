import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Environment } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas>
      <Experience />
      <directionalLight intensity={2} position={[0, 2, 3]}/>
      <Environment files="/img/studio_hdri.hdr" environmentIntensity={5} />
    </Canvas>
    </div>
  )
}

export default App
