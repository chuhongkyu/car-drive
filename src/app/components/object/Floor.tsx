import { useTexture } from "@react-three/drei";

export default function Floor() {
    const texture = useTexture({
        map: "/materials/yellow.jpeg",
    })

    return(
        <mesh position={[0,-1,0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[20,20]}/>
            <meshStandardMaterial {...texture} color={"white"}/>
        </mesh>
    )
    
}