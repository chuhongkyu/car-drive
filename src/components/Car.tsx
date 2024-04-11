import { Triplet, useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { RefObject, useMemo, useRef, useState } from "react";
import { useWheels } from "@/utils/useWheels";
import { Mesh, Quaternion, Vector3 } from "three";
import useCarStore from "@/utils/carStore";
import { motion } from "framer-motion-3d";
import useFollowCam from "@/utils/useFollowCam"
import JoystickContainer from "@/components/JoystickContainer";
import { CarModel } from "./CarModel";
import { Wheel } from "./Wheel";
import useGameStore from "@/utils/gameStore";
import useDebugStore from "@/utils/debugStore";


export function Car( { carPosition }) {
  const { isStart } = useGameStore()
  const { checkParking, setCheckParking } = useCarStore();
  const { checkStart, stageData, stageNumber } = useGameStore()
  const { debug } = useDebugStore()

  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), [])
  const worldQuaternion = useMemo(() => new Quaternion(), []);

  const position:Triplet = carPosition;
  let width, height, front, wheelRadius;
  width = 0.35;
  height = 0.15;
  front = 0.45;
  wheelRadius = 0.1;
  
  const chassisBodyArgs:Triplet = [width, height, front * 2];

  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      position,
      allowSleep: false,
      rotation: [0, 0, 0],
      mass: 150,
      collisionFilterGroup: 5,
    }),
    useRef(null),
  );

  const [wheels, wheelInfos]:[RefObject<Mesh>[], any[]] = useWheels(front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
      collisionFilterGroup: 6, 
    }),
    useRef(null),
  );

  useFrame(() => {
    if (isStart) {
      makeFollowCam();
    }
    makeStage()
  });

  function makeFollowCam() {
    if (!chassisBody?.current) return;

    chassisBody.current.getWorldPosition(worldPosition);
    chassisBody.current.getWorldQuaternion(worldQuaternion);
    pivot.position.lerp(worldPosition, 0.9);
    pivot.setRotationFromQuaternion(worldQuaternion);
  }

  function makeStage(){
    const xPosition = stageData[stageNumber].quest[0].position[0]
    const zPosition = stageData[stageNumber].quest[0].position[1]

    const chassisPosition = new Vector3().setFromMatrixPosition(chassisBody.current.matrixWorld);
    debug && console.log(chassisPosition.x, chassisPosition.z)
    if ( Math.abs(xPosition - chassisPosition.x) < 0.3 && Math.abs(zPosition - chassisPosition.z) < 0.3){
      setCheckParking(true)
    }else{
      setCheckParking(false);
    }
  }

  return (
    <>
      <motion.group
        initial={{scale: 0 }}
        animate={isStart ? {scale: 1}: {scale: 0}}
        onAnimationComplete={(()=> checkStart(true))}
        ref={vehicle}
        name="vehicle"
        >
        <group ref={chassisBody} position={[0,0.2,0]} name="chassisBody">
          <CarModel/>
        </group>
        
        <Wheel wheelRef={wheels[0]} radius={wheelRadius} back={0.03} />
        <Wheel wheelRef={wheels[1]} radius={wheelRadius} back={-0.03} lefSide={true}/>
        <Wheel wheelRef={wheels[2]} radius={wheelRadius} back={0} />
        <Wheel wheelRef={wheels[3]} radius={wheelRadius} back={0} lefSide={true}/>
        
      </motion.group>
      <JoystickContainer vehicleApi={vehicleApi} chassisApi={chassisApi} />
    </>
  );
}
