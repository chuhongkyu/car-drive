'use client'

import {  Suspense, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { DummyCar } from '../DummyCar'
import { DefaultLights } from './Lights'

export const Default = () => {
  const { camera } = useThree()

  useEffect(()=>{
    camera.position.x = 3
    camera.position.y = 18
    camera.position.z  = 18
  },[camera])

  return (
    <>
      <Suspense fallback={<></>}>
        <DummyCar position={[0,1,0]}/>
        <mesh rotation={[-Math.PI/2,0,0]} castShadow receiveShadow>
          <planeGeometry args={[30, 30]} />  
          <shadowMaterial attach='material' color="#aa7d39" />
        </mesh>
      </Suspense>
      <DefaultLights/>
      <OrbitControls
        makeDefault 
        maxDistance={62} 
        minDistance={20} 
        minAzimuthAngle={-Math.PI/2 + 1} 
        maxAzimuthAngle={Math.PI/2 - 1} 
        minPolarAngle={-Math.PI/2 + 0.5}
        maxPolarAngle={Math.PI/2 - 0.5}
        enablePan={false}
      />
    </>
  )
}

