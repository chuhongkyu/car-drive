import useGameStore from "@/app/utils/gameStore";
import { IPointProps } from "@/app/utils/type";
import { useBox } from "@react-three/cannon"
import { useRef } from "react";

export default function RRUpPoint({position, floorTexture, wallTexture}:IPointProps) {
    const { setGameState } = useGameStore()
    const onCollide = (e:any) => {
        const { body } = e;
        if (body.name === "chassisBody") {
            setTimeout(()=> setGameState("GAMEOVERAD"),500)
        }
    }

    const width = 5
    const height = 0.5
    const depth = 5

    const [ref] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [width, height, depth],
            position: position,
        }), useRef<any>(null)
    );

    const [ref1] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [width,1,0.5],
            position: [position[0], position[1] + 0.75, position[2] - depth/2],
            onCollide: onCollide,
        }), useRef<any>(null)
    );

    const [ref2] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [0.5,1,depth],
            position: [position[0] - width/2, position[1] + 0.75, position[2]],
            onCollide: onCollide,
        }), useRef<any>(null)
    );

    return(
        <group>
            <mesh castShadow receiveShadow ref={ref}>
                <boxGeometry args={[width,height,depth]}/>
                <meshStandardMaterial {...floorTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref1}>
                <boxGeometry args={[width,1,0.5]}/>
                <meshStandardMaterial {...wallTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref2}>
                <boxGeometry args={[0.5,1,depth]}/>
                <meshStandardMaterial {...wallTexture} color={"yellow"}/>
            </mesh>
        </group>
    )
}