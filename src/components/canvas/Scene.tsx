'use client'

import { Canvas } from '@react-three/fiber'
import { Loader, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { World } from './World'
import { usePathname } from 'next/navigation'
import { Default } from './Default'
import { useEffect } from 'react'
import useLocalSotre, { localStorageKey } from '@/utils/localStore'

export default function Scene({ ...props }) {
  const pathname = usePathname()
  const setSaveData = useLocalSotre((state) => state.setSaveData);

  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      setSaveData(JSON.parse(storedData));
    }
  }, []);

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
      <Loader 
        containerStyles={{ background: "#6e6443"}}
        dataStyles={{ fontSize: "22px"}}
        dataInterpolation={(p) => `😀 ${Math.round(p)}%`}
        />
    </>
  )
}
