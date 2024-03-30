import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Floor } from "@/components/Floor";
import { useRecoilValue } from "recoil";
import { onGameStart } from "@/utils/atom";
import { ColliderBox } from "@/components/ColliderBox";
import ParkingPlace from "./object/ParkingPlace";

export function Ground() {
  const game = useRecoilValue(onGameStart);
  const [ref] = usePlane(
    () => ({ 
      type: 'Static', 
      material: 'ground',
      rotation: [-Math.PI / 2, 0, 0],
    }), 
    useRef(null)
  );

  return (
    <>
      <group ref={ref}>
        <mesh castShadow receiveShadow>
          <planeGeometry args={[40, 40]} />  
          <shadowMaterial attach='material' color="#aa7d39" />
        </mesh>
      </group>
      {game && <Floor size={[10.2,0.1,10.2]} position={[20,0.05,0]}/>}
      {game && <ParkingPlace position={[-4,0.08,-4]} />}

      {/* <ColliderBox position={[0,1,-5.5]} scale={[10,2,1]}/>
      <ColliderBox position={[0,1,5.5]} scale={[10,2,1]}/>
      <ColliderBox position={[-5.5,1,0]} scale={[1,2,10]}/>
      <ColliderBox position={[5.5,1,0]} scale={[1,2,10]}/> */}
      {/* <Map position={[0,0,0]}/> */}
      {/* <ToyPeople scale={0.05} rotation={[0,Math.PI,0]} position={[0,0.05,-6.5]}/> */}
    </>
  );
}
