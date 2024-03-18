'use client'

import {  useEffect, useRef, useState } from 'react'
import { Caustics,  CubeCamera,  MeshRefractionMaterial,  MeshTransmissionMaterial, useCursor } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion-3d'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'

const varients = {
  initial: { scaleY: 0, y: -0.5 },
  animate: { scaleY:[ 0, 1], y: [-0.5, 0] , transition: { duration: 1, type: 'spring'}}
}

export const Default = ({ route = '/', ...props }) => {
  useEffect(()=>{
    
  },[])

  return (
    <group>

    </group>
  )
}

