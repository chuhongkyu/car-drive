import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    model: THREE.Mesh
    model_1: THREE.Mesh
    model_2: THREE.Mesh
    model_3: THREE.Mesh
    model_4: THREE.Mesh
    model_5: THREE.Mesh
    model_6: THREE.Mesh
    model_7: THREE.Mesh
    model_8: THREE.Mesh
    model_9: THREE.Mesh
  }
  materials: {
    ['material.001']: THREE.MeshStandardMaterial
    ['material.002']: THREE.MeshStandardMaterial
    ['material.003']: THREE.MeshStandardMaterial
    ['material.004']: THREE.MeshStandardMaterial
    ['material.005']: THREE.MeshStandardMaterial
    ['material.006']: THREE.MeshStandardMaterial
    ['material.007']: THREE.MeshStandardMaterial
    ['material.008']: THREE.MeshStandardMaterial
    ['material.009']: THREE.MeshStandardMaterial
    ['material.010']: THREE.MeshStandardMaterial
  }
}

export function Map(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/map.glb') as GLTFResult

  const [ref0] = useTrimesh(
    () => ({
      args: [
        nodes.model.geometry.attributes.position.array,
        nodes.model.geometry.index.array,
      ],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref1] = useTrimesh(
    () => ({
      args: [
        nodes.model_1.geometry.attributes.position.array,
        nodes.model_1.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  const [ref2] = useTrimesh(
    () => ({
      args: [
        nodes.model_2.geometry.attributes.position.array,
        nodes.model_2.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  const [ref3] = useTrimesh(
    () => ({
      args: [
        nodes.model_3.geometry.attributes.position.array,
        nodes.model_3.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  const [ref4] = useTrimesh(
    () => ({
      args: [
        nodes.model_4.geometry.attributes.position.array,
        nodes.model_4.geometry.index.array,
      ],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref5] = useTrimesh(
    () => ({
      args: [
        nodes.model_5.geometry.attributes.position.array,
        nodes.model_5.geometry.index.array,
      ],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref6] = useTrimesh(
    () => ({
      args: [
        nodes.model_6.geometry.attributes.position.array,
        nodes.model_6.geometry.index.array,
      ],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref7] = useTrimesh(
    () => ({
      args: [
        nodes.model_7.geometry.attributes.position.array,
        nodes.model_7.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  const [ref8] = useTrimesh(
    () => ({
      args: [
        nodes.model_8.geometry.attributes.position.array,
        nodes.model_8.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  const [ref9] = useTrimesh(
    () => ({
      args: [
        nodes.model_9.geometry.attributes.position.array,
        nodes.model_9.geometry.index.array,
      ],
      type: "Static",
      
    }),
    useRef(null)
  )

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh ref={ref0} geometry={nodes.model.geometry} material={materials['material.001']} />
        <mesh ref={ref1} geometry={nodes.model_1.geometry} material={materials['material.002']} />
        <mesh ref={ref2} geometry={nodes.model_2.geometry} material={materials['material.003']} />
        <mesh ref={ref3} geometry={nodes.model_3.geometry} material={materials['material.004']} />
        <mesh ref={ref4} geometry={nodes.model_4.geometry} material={materials['material.005']} />
        <mesh ref={ref5} geometry={nodes.model_5.geometry} material={materials['material.006']} />
        <mesh ref={ref6} geometry={nodes.model_6.geometry} material={materials['material.007']} />
        <mesh ref={ref7} geometry={nodes.model_7.geometry} material={materials['material.008']} />
        <mesh ref={ref8} geometry={nodes.model_8.geometry} material={materials['material.009']} />
        <mesh ref={ref9} geometry={nodes.model_9.geometry} material={materials['material.010']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/map.glb')
