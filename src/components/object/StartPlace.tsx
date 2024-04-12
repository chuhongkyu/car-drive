import { useTexture } from "@react-three/drei";

const StartPlace = (props) => {
    const { position, rotationY = 0 } = props
    const texture = useTexture('/img/parking_yellow.png')

    return(
        <>
          <mesh position={position} rotation={[-Math.PI/2,0,rotationY]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
        </>
    )
}

export default StartPlace