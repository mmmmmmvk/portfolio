import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Environment, Html } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <Experience />
      <directionalLight intensity={2} position={[0, 2, 3]}/>
      <Environment preset="city" />
    </Canvas>
  )
}

export default App
