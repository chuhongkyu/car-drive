'use client'

import { Canvas } from '@react-three/fiber'
import { Loader, Preload } from '@react-three/drei'
import * as THREE from 'three'
import Lights from './Lights'
import { World } from './World'
import { usePathname } from 'next/navigation'
import { Default } from './Default'
import { Physics } from '@react-three/cannon'
import DebugWrapper from '../DebugWrapper'


export default function Scene({ ...props }) {
  const pathname = usePathname()

  return (
    <>
      <Canvas 
        {...props} 
        shadows
        camera={{fov: 55, position: [3, 18, 25]}}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      >
        <Lights/>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]} allowSleep>
          <DebugWrapper>
            <Preload all />
            {pathname == "/" && <Default/>}
            {pathname == "/world" && <World/>}
          </DebugWrapper>
        </Physics>
      </Canvas>
      <Loader/>
    </>
  )
}
