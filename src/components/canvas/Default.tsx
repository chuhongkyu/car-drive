'use client'

import {  Suspense, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { ToyPeople } from '../object/ToyPeople'
import { DummyCar } from '../DummyCar'
import { DefaultLights } from './Lights'

export const Default = () => {
  const three = useThree()

  useEffect(()=>{
    three.camera.position.x = 3
    three.camera.position.y = 18
    three.camera.position.z  = 50
  },[])

  return (
    <>
      <Suspense fallback={<></>}>
        <ToyPeople rotation={[0,Math.PI + 0.3,0]} position={[-4,0,-25]}/>
        <DummyCar position={[0,1,0]}/>
        <mesh rotation={[-Math.PI/2,0,0]} castShadow receiveShadow>
          <planeGeometry args={[50, 50]} />  
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

