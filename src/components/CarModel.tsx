
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { motion } from "framer-motion-3d";

export type GLTFResult = GLTF & {
  nodes: {
    ['ChamferCyl002_Material_#5_0']: THREE.Mesh
    ['Shape2_Material_#3_0']: THREE.Mesh
    ['Shape4_Material_#6_0']: THREE.Mesh
    ['Shape11_Material_#7_0']: THREE.Mesh
    ['Shape014_Material_#7_0']: THREE.Mesh
    ['ChamferCyl001_Material_#5_0']: THREE.Mesh
    ['ChamferCyl003_Material_#5_0']: THREE.Mesh
    ['ChamferCyl004_Material_#5_0']: THREE.Mesh
    ['ChamferCyl005_Material_#5_0']: THREE.Mesh
  }
  materials: {
    Material_5: THREE.MeshStandardMaterial
    Material_3: THREE.MeshStandardMaterial
    Material_6: THREE.MeshStandardMaterial
    Material_7: THREE.MeshStandardMaterial
  }
}

export function CarModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/toy_car.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI/2, 0, Math.PI/2]} scale={[0.05,0.06,0.05]}>
        <group rotation={[-Math.PI, 0, 0]} position={[0,-1.7,1]}>
          <group position={[6.084, 0.371, 0.276]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape2_Material_#3_0'].geometry} material={materials.Material_3} position={[-35.202, 15.612, 0]} />
          </group>
          <group position={[-0.343, 0.371, 1.082]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape4_Material_#6_0'].geometry} material={materials.Material_6} position={[-28.776, 14.806, 0]} />
          </group>
          <group position={[2.078, -3.566, 4.227]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape11_Material_#7_0'].geometry} material={materials.Material_7} position={[-31.196, 11.661, 0]} />
          </group>
          <group position={[2.078, 1.316, 4.227]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape014_Material_#7_0'].geometry} material={materials.Material_7} position={[-31.196, 11.661, 0]} />
          </group>
          <group position={[-2.85, -0.81, 0.276]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['ChamferCyl001_Material_#5_0'].geometry} material={materials.Material_5} position={[-4.111, -1.316, -2.633]} />
          </group>
          {/* <mesh geometry={nodes['ChamferCyl002_Material_#5_0'].geometry} material={materials.Material_5} position={[6.084, -3.566, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['ChamferCyl003_Material_#5_0'].geometry} material={materials.Material_5} position={[-6.952, -3.566, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['ChamferCyl004_Material_#5_0'].geometry} material={materials.Material_5} position={[6.084, 1.552, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['ChamferCyl005_Material_#5_0'].geometry} material={materials.Material_5} position={[-6.952, 1.552, 0.276]} rotation={[Math.PI / 2, 0, 0]} /> */}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/toy_car.glb')
