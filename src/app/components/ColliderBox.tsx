import { Triplet, useBox } from "@react-three/cannon";
import { useRef } from "react";

export function ColliderBox({ position, scale }:{ position:Triplet, scale:any}) {
  const [ref] = useBox(() => ({
    args: scale,
    position,
    type: "Static",
    mass: 1,
  }),useRef<any>(null));

  return(
    <mesh ref={ref} position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.1} />
    </mesh>
  )
}
