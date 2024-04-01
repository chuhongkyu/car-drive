import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { motion } from "framer-motion-3d";

type GLTFResult = GLTF & {
  nodes: {
    Boden_Boden_0_1: THREE.Mesh
    Boden_Boden_0_2: THREE.Mesh
    Boden_Boden_0_3: THREE.Mesh
    Boden_Boden_0_4: THREE.Mesh
    Boden_Boden_0_5: THREE.Mesh
    Boden_Boden_0_6: THREE.Mesh
    Boden_Boden_0_7: THREE.Mesh
    Boden_Boden_0_8: THREE.Mesh
    Boden_Boden_0_9: THREE.Mesh
    Boden_Boden_0_10: THREE.Mesh
    Boden_Boden_0_11: THREE.Mesh
    Boden_Boden_0_12: THREE.Mesh
    Boden_Boden_0_13: THREE.Mesh
    Boden_Boden_0_14: THREE.Mesh
    Boden_Boden_0_15: THREE.Mesh
    Boden_Boden_0_16: THREE.Mesh
    Boden_Boden_0_17: THREE.Mesh
  }
  materials: {
    Boden: THREE.MeshStandardMaterial
    Balken: THREE.MeshStandardMaterial
    Rckwand: THREE.MeshStandardMaterial
    Dach: THREE.MeshStandardMaterial
    krippe: THREE.MeshStandardMaterial
    holy_shine: THREE.MeshStandardMaterial
    Stern_m_F: THREE.MeshStandardMaterial
    Jesus: THREE.MeshStandardMaterial
    Balthasar: THREE.MeshStandardMaterial
    Schaf: THREE.MeshStandardMaterial
    Caspar: THREE.MeshStandardMaterial
    Maria: THREE.MeshStandardMaterial
    Joseph: THREE.MeshStandardMaterial
    Hirte: THREE.MeshStandardMaterial
    Melchior: THREE.MeshStandardMaterial
    Esel: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
  }
}

export function ToyPeople(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/toy_people.glb') as GLTFResult
  
  return (
    <group {...props} scale={[0.4,0.2,0.4]}>
      <motion.mesh castShadow receiveShadow initial={{scaleY: 0, scaleX: 4 }} animate={{scaleY: 1, scaleX: 4 }} transition={{duration: 1}} geometry={nodes.Boden_Boden_0_1.geometry} material={materials.Boden} />
      <motion.mesh initial={{scaleY: 0, scaleX: 2}} animate={{scaleY: 1.5, scaleX: 2}} transition={{duration: 1, delay:1}} geometry={nodes.Boden_Boden_0_2.geometry} material={materials.Balken} />
      <motion.mesh initial={{scaleY: 0, scaleX: 2}} animate={{scaleY: 1.5, scaleX: 2}} transition={{duration: 1, delay:1}} geometry={nodes.Boden_Boden_0_3.geometry} material={materials.Rckwand} />
      <motion.mesh initial={{scaleY: 0, scaleX: 2}} animate={{scaleY: 1.5, scaleX: 2}} transition={{duration: 1, delay:1}} geometry={nodes.Boden_Boden_0_4.geometry} material={materials.Dach} />

      <motion.mesh initial={{scaleY: 0}} animate={{scaleY: 1.5, scaleX: 1.5}} transition={{duration: 1, delay:1}} geometry={nodes.Boden_Boden_0_7.geometry} material={materials.Stern_m_F} />
      
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_5.geometry} material={materials.krippe} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_6.geometry} material={materials.holy_shine} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_8.geometry} material={materials.Jesus} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_9.geometry} material={materials.Balthasar} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_10.geometry} material={materials.Schaf} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_11.geometry} material={materials.Caspar} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_12.geometry} material={materials.Maria} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_13.geometry} material={materials.Joseph} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_14.geometry} material={materials.Hirte} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_15.geometry} material={materials.Melchior} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_16.geometry} material={materials.Esel} />
      <motion.mesh castShadow initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 1, delay:2}} geometry={nodes.Boden_Boden_0_17.geometry} material={materials.material} />
    </group>
  )
}

useGLTF.preload('/models/toy_people.glb')
