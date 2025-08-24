"use client"

import {  Suspense, useEffect, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { DummyCar } from "../DummyCar"
import { DefaultLights } from "./Lights"

export const Default = () => {
  const { camera } = useThree()
  const cameraRef = useRef(null)

  useEffect(()=>{
    camera.position.x = 3
    camera.position.y = 15
    camera.position.z  = 10
  },[camera])

  return (
    <>
      <Suspense fallback={<></>}>
        
        <DummyCar position={[0,1,0]} scale={0.5}/>
        <mesh rotation={[-Math.PI/2,0,0]} position={[0,0.55,0]} castShadow receiveShadow>
          <planeGeometry args={[30, 30]} />  
          <shadowMaterial attach="material" color="#aa7d39" />
        </mesh>
      </Suspense>
      <DefaultLights/>
      <OrbitControls
        ref={cameraRef}
        makeDefault 
        maxDistance={32} 
        minDistance={10} 
        minAzimuthAngle={-Math.PI/2 + 1} 
        maxAzimuthAngle={Math.PI/2 - 1} 
        minPolarAngle={-Math.PI/2 + 0.5}
        maxPolarAngle={Math.PI/2 - 0.5}
        enablePan={false}
      />
    </>
  )
}

