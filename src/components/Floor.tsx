import { useBox} from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useSetRecoilState } from "recoil";
import { onStartScene } from "@/utils/atom";

export function Floor({position, size}) {
    const setStart = useSetRecoilState(onStartScene);
    const [ref] = useBox(
        () => ({ 
        type: 'Static', 
        args: size,
        position: position,
        }), 
        useRef(null)
    );

    return (
        <motion.mesh 
            initial={{scaleY: 0}} 
            animate={{scaleY: 1}}
            transition={{ duration: 1}}
            onAnimationComplete={()=> setStart(true)}
            ref={ref} 
            castShadow receiveShadow
            >
            <boxGeometry args={size} />  
            <meshStandardMaterial color={"#028140"}/>
        </motion.mesh>
    );
}
