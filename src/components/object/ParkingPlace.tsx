import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useTexture } from "@react-three/drei";
import useCarStore, {  } from "@/utils/carStore";
import { easeInOut } from "framer-motion";

const ParkingPlace = (props) => {
    const { position, rotationY = 0 } = props
    const texture = useTexture('/img/parking.png')
    const { checkParking } = useCarStore();
    return(
        <group rotation={[0,rotationY,0]}>
          <mesh position={position} rotation={[-Math.PI/2,0,0]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
          <motion.mesh initial={{ y: -2}} animate={checkParking ? { y: [-2,-0.18]}: { y: -2}} transition={{ duration: 0.5, type: easeInOut}}  position={[position[0],-1,position[2]]} rotation={[-Math.PI/2,0,0]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshStandardMaterial color={"green"} transparent opacity={0.7}/>
          </motion.mesh>
        </group>
    )
}

export default ParkingPlace