import { OrbitControls } from "@react-three/drei"
import { Dispersioncube } from "./Dispersioncube"

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <Dispersioncube />
        </>
    )
}