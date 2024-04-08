import { useTexture } from "@react-three/drei";

export default function Floor() {
    const texture = useTexture({
        roughnessMap: "/materials/roughness.png",
        map: "/materials/yellow.jpeg",
        normalMap: "/materials/normal.png",
    })

    return(
        <mesh position={[0,-1,0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[20,20]}/>
            <meshStandardMaterial {...texture}/>
        </mesh>
    )
    
}