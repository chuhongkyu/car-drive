import { useBox} from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export function Floor({position, size}) {
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
            ref={ref} 
            castShadow receiveShadow
            >
            <boxGeometry args={size} />  
            <meshStandardMaterial color={"#028140"}/>
        </motion.mesh>
    );
}
