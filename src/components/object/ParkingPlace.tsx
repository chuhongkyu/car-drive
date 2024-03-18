import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

const ParkingPlace = ({position}) => {

    const [ref] = useBox(
        () => ({ 
            type: 'Static', 
            args: [1.3,0.05,0.9],
            position,
            onCollide: onCheckPlace
        }), 
        useRef(null)
    );

    const onCheckPlace = (e) => {
        console.log(e)
    }

    return(
        <mesh ref={ref} castShadow receiveShadow > 
            <boxGeometry args={[1.3,0.05,0.9]}/>  
            <meshBasicMaterial transparent color="#fff" opacity={0.8}/>
        </mesh>
    )
}

export default ParkingPlace