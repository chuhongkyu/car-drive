import useGameStore from "@/utils/gameStore";
import { useBox } from "@react-three/cannon"
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function RRUpPoint(props) {
    const { setGameState } = useGameStore()
    const onCollide = () => setGameState("GAMEOVER")

    const texturemap = useTexture({
        roughnessMap: "/materials/roughness.png",
        map: "/materials/base.png",
        normalMap: "/materials/normal.png",
    })
    const texturemap2 = useTexture({
        map: "/materials/red.png",
    })

    const width = 5
    const height = 0.5
    const depth = 5

    const { position } = props
    const [ref] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [width, height, depth],
            position: position,
        }), useRef(null)
    );

    const [ref1] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [width,1,0.5],
            position: [position[0], position[1] + 0.75, position[2] - depth/2],
            onCollide: onCollide,
        }), useRef(null)
    );

    const [ref2] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [0.5,1,depth],
            position: [position[0] - width/2, position[1] + 0.75, position[2]],
            onCollide: onCollide,
        }), useRef(null)
    );

    return(
        <group>
            <mesh castShadow receiveShadow ref={ref}>
                <boxGeometry args={[width,height,depth]}/>
                <meshStandardMaterial {...texturemap} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref1}>
                <boxGeometry args={[width,1,0.5]}/>
                <meshStandardMaterial {...texturemap2} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref2}>
                <boxGeometry args={[0.5,1,depth]}/>
                <meshStandardMaterial {...texturemap2} color={"yellow"}/>
            </mesh>
        </group>
    )
}