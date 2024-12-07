import { Environment, OrbitControls, Stage, Stars, PresentationControls } from "@react-three/drei"
import { Wordmark } from "./Wordmark"

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={200} />
        <OrbitControls autoRotate={true} autoRotateSpeed={5} enablePan={false} enableZoom={false} enableRotate={true} />
        <Wordmark scale={[50,50,50]} />
        </>
    )
}