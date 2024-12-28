import { Environment, OrbitControls, Stage, Stars, PresentationControls } from "@react-three/drei"
import { Wordmark } from "./Wordmark"

export const Experiencemobile = () => {
    return (
        <>
        <ambientLight intensity={200} />
        <OrbitControls autoRotate={true} autoRotateSpeed={3} enablePan={false} enableZoom={false} enableRotate={false} />
        <Wordmark scale={[50,50,50]} />
        </>
    )
}