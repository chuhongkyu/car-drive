'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import * as THREE from 'three'
import React, { useEffect } from 'react'
import Lights from './Lights'
import { World } from './World'
import { usePathname } from 'next/navigation'
import { Default } from './Default'

export default function Scene({ ...props }) {
  const pathname = usePathname()

  return (
    <Canvas 
      {...props} 
      shadows
      camera={{fov: 55, position: [3, 18, 25]}}
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <Lights/>
      <Preload all />
        {pathname == "/" && <Default/>}
        {pathname == "/world" && <World/>}
      {/* <OrbitControls makeDefault maxDistance={42} minDistance={5} enablePan={false} /> */}
    </Canvas>
  )
}
