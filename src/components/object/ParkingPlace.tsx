import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useTexture } from "@react-three/drei";

const ParkingPlace = (props) => {
    const texture = useTexture('/img/parking.png')

    return(
        <mesh {...props} rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[1.5,1]}/>
          <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
        </mesh>
    )
}

export default ParkingPlace