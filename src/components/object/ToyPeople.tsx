import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

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

  // const [ref, api] = useTrimesh(
  //   () => ({
  //     args: [
  //       nodes.Boden_Boden_0_1.geometry.attributes.position.array,
  //       nodes.Boden_Boden_0_1.geometry.index.array
  //     ],
  //     mass: 1,
  //     ...props
  //   }),
  //   useRef(null)
  // )

  return (
    <group {...props}>
      <mesh geometry={nodes.Boden_Boden_0_1.geometry} material={materials.Boden} />
      <mesh geometry={nodes.Boden_Boden_0_2.geometry} material={materials.Balken} />
      <mesh geometry={nodes.Boden_Boden_0_3.geometry} material={materials.Rckwand} />
      <mesh geometry={nodes.Boden_Boden_0_4.geometry} material={materials.Dach} />
      <mesh geometry={nodes.Boden_Boden_0_5.geometry} material={materials.krippe} />
      <mesh geometry={nodes.Boden_Boden_0_6.geometry} material={materials.holy_shine} />
      <mesh geometry={nodes.Boden_Boden_0_7.geometry} material={materials.Stern_m_F} />
      <mesh geometry={nodes.Boden_Boden_0_8.geometry} material={materials.Jesus} />
      <mesh geometry={nodes.Boden_Boden_0_9.geometry} material={materials.Balthasar} />
      <mesh geometry={nodes.Boden_Boden_0_10.geometry} material={materials.Schaf} />
      <mesh geometry={nodes.Boden_Boden_0_11.geometry} material={materials.Caspar} />
      <mesh geometry={nodes.Boden_Boden_0_12.geometry} material={materials.Maria} />
      <mesh geometry={nodes.Boden_Boden_0_13.geometry} material={materials.Joseph} />
      <mesh geometry={nodes.Boden_Boden_0_14.geometry} material={materials.Hirte} />
      <mesh geometry={nodes.Boden_Boden_0_15.geometry} material={materials.Melchior} />
      <mesh geometry={nodes.Boden_Boden_0_16.geometry} material={materials.Esel} />
      <mesh geometry={nodes.Boden_Boden_0_17.geometry} material={materials.material} />
    </group>
  )
}

useGLTF.preload('/models/toy_people.glb')
