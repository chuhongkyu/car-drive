import { useBox } from "@react-three/cannon";

export function ColliderBox({ position, scale }) {
  const [ref] = useBox(() => ({
    args: scale,
    position,
    type: "Static",
    mass: 1,
  }));

  return(
    <mesh ref={ref} position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.1} />
    </mesh>
  )
}
