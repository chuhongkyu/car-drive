import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./CarModel";

useGLTF.preload("/models/toy_car.glb")

export const Wheel = ({ wheelRef, back = -0.03, lefSide = false }:any) => {
  const { nodes, materials } = useGLTF("/models/toy_car.glb") as GLTFResult

  return(
    <group ref={wheelRef}>
        <group rotation={lefSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0]} position={[back,0,0]}>
            <mesh castShadow scale={[0.05, 0.05, 0.1]} geometry={nodes["ChamferCyl002_Material_#5_0"].geometry} position={[-0.08,0,0]} material={materials.Material_5} rotation={[0, Math.PI / 2, 0]} />
        </group>
    </group>
  );
};
