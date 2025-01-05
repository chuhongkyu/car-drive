import { useTexture } from "@react-three/drei";

const StartPlace = ({position, rotationY = 0}:{position: number[], rotationY: number}) => {
    const texture = useTexture('/img/parking_yellow.png')

    return(
        <group>
          <mesh position={[position[0], position[1], position[2]]} rotation={[-Math.PI/2,0,rotationY]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
        </group>
    )
}

export default StartPlace