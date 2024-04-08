import useCarStore from "@/utils/carStore";
import useGameStore from "@/utils/gameStore";
import { useCylinder } from "@react-three/cannon";
import { useRef } from "react";

export default function CylinderPlace(props){
    const { position, mySize = [0.6, 0.6, 0.5, 32], floorTexture, wallTexture } = props
    const { setGameState } = useGameStore()
    const { checkCarCollide } = useCarStore()
    const onCollide = (e) => {
        const { body } = e;
        if (body.name === "chassisBody") {
            checkCarCollide(true)
            setTimeout(()=> setGameState("GAMEOVER"),500)
        }
    }

    const width = mySize[0]
    const width2 = mySize[1]
    const height = mySize[2]
    const depth = mySize[3]

    const [ref] = useCylinder(
        () => ({ 
            type: 'Static',
            args: [width, width2, height, depth],
            position: position,
            onCollide: onCollide
        }), useRef(null)
    );

    return(
        <group ref={ref}>
            <mesh>
                <cylinderGeometry args={[width-0.2, width2-0.2, height, depth]}/>
                <meshStandardMaterial {...floorTexture} color={"yellow"}/>
            </mesh>
            <mesh castShadow>
                <cylinderGeometry args={[width, width2, height -0.1, depth]}/>
                <meshStandardMaterial {...wallTexture}/>
            </mesh>
        </group>
    )
}