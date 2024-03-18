import { Triplet, useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect, useMemo, useRef } from "react";
import { useWheels } from "@/utils/useWheels";
import { useControls } from "@/utils/useControls";
import { Mesh, Quaternion, Vector3 } from "three";
import { useRecoilValue } from "recoil";
import { onGameStart, onStartScene } from "@/utils/atom";
import { motion } from "framer-motion-3d";
import useFollowCam from "@/utils/useFollowCam"
import JoystickContainer from "@/components/JoystickContainer";
import { CarModel } from "./CarModel";
import { Wheel } from "./Wheel";

const FORWARD_BOUNDARY = 5.5;
const BACKWARD_BOUNDARY = -6;

export function Car() {
  const game = useRecoilValue(onGameStart);
  const isStart = useRecoilValue(onStartScene);
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), [])
  const worldQuaternion = useMemo(() => new Quaternion(), []);

  const position:Triplet = [0, 0.5, 4];
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

  const vehiclePos = useRef([0, 0, 0]);

  const [wheels, wheelInfos]:[RefObject<Mesh>[], any[]] = useWheels(front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useControls(vehicleApi, chassisApi);

  useFrame(() => {
    if (vehiclePos.current[2] > FORWARD_BOUNDARY) {
      chassisApi.position.set(0, 0.2, 0);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0.5, 0);
      return;
    }
    if (vehiclePos.current[2] < BACKWARD_BOUNDARY) {
      chassisApi.position.set(0, 0.2, 0);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0.5, 0);
      return;
    }
  });

  useEffect(() => {
    window?.document?.body.classList.remove("active")
  }, [game])

  useFrame(() => {
    if (isStart) {
      makeFollowCam();
    }
  });

  function makeFollowCam() {
    if (!chassisBody?.current) return;

    chassisBody.current.getWorldPosition(worldPosition);
    chassisBody.current.getWorldQuaternion(worldQuaternion);
    
    pivot.position.lerp(worldPosition, 0.9);
    // pivot.quaternion.slerp(worldQuaternion, 0.9);
    pivot.setRotationFromQuaternion(worldQuaternion);
  }


  return (
    <>
        <motion.group
          initial={{scale: 0 }}
          animate={isStart ? {scale: 1}: {scale: 0}}
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
