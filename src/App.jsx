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
    <Canvas style={{background: '#000000'}}>
      <Experience />
      <directionalLight intensity={2} position={[0, 2, 3]}/>
      <Environment preset="city" />
    </Canvas>
  )
}

export default App
