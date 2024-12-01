import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Dispersioncube } from "./Dispersioncube"

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
        <OrbitControls />
        <Dispersioncube />
        </ScrollControls>
        </>
    )
}