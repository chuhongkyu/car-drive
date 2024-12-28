import { motion } from "framer-motion-3d";
import { motion as Dmotion} from "framer-motion";
import { Html, useTexture } from "@react-three/drei";
import useCarStore from "@/app/utils/carStore";
import Image from "next/image";
import useGameStore from "@/app/utils/gameStore";

const ParkingPlace = ({position, rotationY = 0}:{ position: number[], rotationY?: number}) => {
    const texture = useTexture('/img/parking.png')
    const { checkParking } = useCarStore();
    const { isStart } = useGameStore();
    return(
        <group rotation={[0,rotationY,0]}>
          {!isStart &&
            <Html position={[position[0], position[1] + 0.5, position[2]]} center>
              <Dmotion.div 
                initial={{y: position[1]+ 0.5}}
                animate={{
                  y: [position[1]+0.5, 5, position[1]+0.5,5, position[1]+0.5],
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5}}
                className="parking-arrow">
                <Image width={40} height={40} src={"/ui/down-arrow.png"} alt="down"/>
              </Dmotion.div>
            </Html>
          }
          <mesh position={[position[0], position[1], position[2]]} rotation={[-Math.PI/2,0,0]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
          <motion.mesh initial={{ y: -2}} animate={checkParking ? { y: [-2,-0.18]}: { y: -2}} transition={{ duration: 0.5, ease: "easeInOut"}}  position={[position[0],-1,position[2]]} rotation={[-Math.PI/2,0,0]}>
            <planeGeometry args={[1.4,0.8]}/>
            <meshStandardMaterial color={"green"} transparent opacity={0.7}/>
          </motion.mesh>
        </group>
    )
}

export default ParkingPlace