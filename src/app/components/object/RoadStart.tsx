import useCarStore from "@/app/utils/carStore";
import useGameStore from "@/app/utils/gameStore";
import { IPointProps } from "@/app/utils/type";
import { useBox } from "@react-three/cannon"
import { useRef } from "react";

export default function RoadStart ({position, mySize = [5,0.5,5], floorTexture, wallTexture}:IPointProps) {
    const { setGameState } = useGameStore()
    const { checkCarCollide } = useCarStore()
    const onCollide = (e:any) => {
        const { body } = e;
        if (body.name === "chassisBody") {
            checkCarCollide(true)
            setTimeout(()=> setGameState("GAMEOVERAD"),500)
        }
    }

    const width = mySize[0]
    const height = mySize[1]
    const depth = mySize[2]

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
            args: [0.5,0.5,depth],
            position: [position[0] + width/2, position[1] + 0.25, position[2]],
            onCollide: onCollide
        }), useRef<any>(null)
    );

    const [ref2] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [0.5,0.5,depth],
            position: [position[0] - width/2, position[1] + 0.25, position[2]],
            onCollide: onCollide
        }), useRef<any>(null)
    );

    const [ref3] = useBox(
        () => ({ 
            type: 'Static', 
            material: 'ground',
            args: [width,0.5,0.5],
            position: [position[0], position[1] + 0.25, position[2] + depth/2],
            onCollide: onCollide
        }), useRef<any>(null)
    );

    return(
        <group>
            <mesh castShadow receiveShadow ref={ref}>
                <boxGeometry args={[width,height,depth]}/>
                <meshStandardMaterial {...floorTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref1}>
                <boxGeometry args={[0.5,0.5,depth]}/>
                <meshStandardMaterial {...wallTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref2}>
                <boxGeometry args={[0.5,0.5,depth]}/>
                <meshStandardMaterial {...wallTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow receiveShadow ref={ref3}>
                <boxGeometry args={[width,0.5,0.5]}/>
                <meshStandardMaterial {...wallTexture} color={"yellow"}/>
            </mesh>
        </group>
    )
}