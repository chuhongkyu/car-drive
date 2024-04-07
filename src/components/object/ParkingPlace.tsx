import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { Html, useTexture } from "@react-three/drei";
import useCarStore, {  } from "@/utils/carStore";
import { easeInOut } from "framer-motion";
import Image from "next/image";
import useGameStore from "@/utils/gameStore";

const ParkingPlace = (props) => {
    const { position, rotationY = 0 } = props
    const texture = useTexture('/img/parking.png')
    const { checkParking } = useCarStore();
    const { isStart } = useGameStore();
    return(
        <group rotation={[0,rotationY,0]}>
          {!isStart &&
          <motion.group
            initial={{ y: 0}}
            animate={{ y: [0,0.2,0,0.2,0], scaleY: [1, 1.5, 1], transition: { duration: 1, repeat: Infinity, repeatDelay: 1}}}
            position={position}>
            <Html position={[0,0.1,0]} center>
              <div className="parking-arrow">
                <Image width={40} height={40} src={"/ui/down-arrow.png"} alt="down"/>
              </div>
            </Html>
          </motion.group>}
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