'use client'

import { Canvas } from '@react-three/fiber'
import { Loader, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { World } from './World'
import { usePathname } from 'next/navigation'
import { Default } from './Default'
import Floor from '../object/Floor'


export default function Scene({ ...props }) {
  const pathname = usePathname()

  return (
    <>
      <Canvas 
        {...props} 
        shadows
        camera={{fov: 45, position: [3, 18, 25]}}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      >
          <Preload all />
          {pathname == "/" && <Default/>}
          {pathname == "/world" && <World/>}
          {/* <Floor/> */}
      </Canvas>
      <Loader/>
    </>
  )
}
