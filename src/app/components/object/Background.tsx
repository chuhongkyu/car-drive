import { useTexture } from "@react-three/drei";

export default function Background() {
    const texture = useTexture({
        roughnessMap: "/materials/roughness.png",
        map: "/img/city_01.jpeg",
        normalMap: "/materials/normal.png",
    })

    return(
        <group>
            <mesh position={[10,1.5,-5]} rotation={[0, -Math.PI/2, 0]}>
                <planeGeometry args={[20,5]}/>
                <meshStandardMaterial {...texture} color={"white"}/>
            </mesh>
            <mesh position={[-10,1.5,-5]} rotation={[0, Math.PI/2, 0]}>
                <planeGeometry args={[20,5]}/>
                <meshStandardMaterial {...texture} color={"white"}/>
            </mesh>
            <mesh position={[0,1.5,-10]} rotation={[0, 0, 0]}>
                <planeGeometry args={[20,5]}/>
                <meshStandardMaterial {...texture} color={"white"}/>
            </mesh>
        </group>
        
    )
    
}