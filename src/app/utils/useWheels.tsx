import { ShapeType, useCompoundBody } from "@react-three/cannon";
import { RefObject, useRef } from "react";
import { Mesh } from "three";

export const useWheels = (front: number, radius: number): [RefObject<Mesh>[], any[]] => {
  
  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const wheelPosition = 0.01
  const wheelPositionZ = front - 0.15

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    axleLocal: [1, 0, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.1,
    frictionSlip: 8,
    dampingRelaxation: 2,
    dampingCompression: 2,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
    sleepSpeedLimit: 0.01,
  };

  const wheelInfos = [
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-0.2, wheelPosition, wheelPositionZ],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [0.2, wheelPosition, wheelPositionZ],
      isFrontWheel: true,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [0.2, wheelPosition, -wheelPositionZ - 0.045],
      isFrontWheel: false,
    },
    {
      ...wheelInfo,
      chassisConnectionPointLocal: [-0.2, wheelPosition, -wheelPositionZ - 0.045],
      isFrontWheel: false,
    },
    
  ];

  interface IProps {
    collisionFilterGroup: number;
    mass: number;
    shapes: [
      {
        args: number[];
        rotation: number[];
        type: ShapeType;
      },
    ],
    type?: "Dynamic" | "Static" | "Kinematic";
  }

  const propsFunc = ():IProps => ({
    collisionFilterGroup: 0,
    mass: 150,
    shapes: [
      {
        args: [wheelInfo.radius, wheelInfo.radius, 0.09, 16],
        rotation: [0, 0, -Math.PI / 2],
        type: "Cylinder",
      },
    ],
    type: "Kinematic",
  });

  useCompoundBody(propsFunc, wheels[0]);
  useCompoundBody(propsFunc, wheels[1]);
  useCompoundBody(propsFunc, wheels[2]);
  useCompoundBody(propsFunc, wheels[3]);

  return [wheels, wheelInfos];
};
