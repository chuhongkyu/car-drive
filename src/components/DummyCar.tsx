
import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { Html, Sparkles, useCursor, useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { motion } from "framer-motion-3d";
import useIntroStore from '@/utils/introStore';

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

export function DummyCar(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/toy_car.glb') as GLTFResult
  const texture = useTexture('/img/parking.png')
  const [ info, setInfo ] = useState(false)
  const [ carState, carSetState] = useState(
    [
      { 
        name: "본체",
        isActive: false,
      },
      { 
        name: "옆면",
        isActive: false,
      },
      { 
        name: "레일",
        isActive: false,
      },
      { 
        name: "바퀴",
        isActive: false,
      }
    ]
  )
  const { introClear, setIntroClear } = useIntroStore()

  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered)

  const onClick = (e) => {
    const name = e.eventObject.name
    carSetState(carState.map((car)=> car.name === name ? { ...car, isActive: !car.isActive } : car))
  }

  useEffect(()=>{
    if(carState.every((el)=> el.isActive)){
      setIntroClear(true);
    }
  },[carState])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI/2, 0, -0.9]} scale={[0.5,0.55,0.5]}>
        <group rotation={[-Math.PI, 0, 0]} position={[0,0,0]}>
          {/* 본체 */}
          <motion.group
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            name="본체"
            onClick={!introClear && onClick}
            initial={{ x: -0.343, y: 0.371, z: 1.082 }}
            animate={carState[0].isActive ? { x: -0.343, y: 0.371, z: 1.082 }: { x: 0, y: 18, z: -0.5 }}
            transition={{ duration: 1, type: "spring"}}
            position={[-0.343, 0.371, 1.082]} 
            rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape4_Material_#6_0'].geometry} material={materials.Material_6} position={[-28.776, 14.806, 0]} />
          </motion.group>

          <motion.group
            name="옆면"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: 2.078, z: 4.227, y: 0 }}
            animate={carState[1].isActive ? { x: 2.078, y: -3.566, z: 4.227 }: { x: -23, y: 2, z: 0.5, rotateX: 0.5}}
            transition={{ duration: 1, type: "spring" }} 
            position={[2.078, -3.566, 4.227]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape11_Material_#7_0'].geometry} material={materials.Material_7} position={[-31.196, 11.661, 0]} />
          </motion.group>
          <motion.group
            name="옆면"
           onClick={!introClear && onClick}
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            initial={{ x: 2.078, y: 1.316, z: 4.227}}
            animate={carState[1].isActive ? { z: 4.227 } : { x: -23, y: 5, z: -2, rotateX: 0}}
            transition={{ duration: 1, type: "spring" }} 
            position={[2.078, 1.316, 4.227]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['Shape014_Material_#7_0'].geometry} material={materials.Material_7} position={[-31.196, 11.661, 0]} />
          </motion.group>

          <motion.group 
            name="레일"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: -2.85, y: -0.81, z: 0.276}}
            animate={carState[2].isActive ? { x: -2.85, y: -0.81, z: 0.276 }: { x: 23, y:0, z: -1.5}}
            transition={{ duration: 1, type: "spring" }} 
            position={[-2.85, -0.81, 0.276]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes['ChamferCyl001_Material_#5_0'].geometry} material={materials.Material_5} position={[-4.111, -1.316, -2.633]} />
          </motion.group>

          <motion.mesh
            name="바퀴"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: 0, y: -20 }}
            animate={carState[3].isActive ? { x: 6.084, y: -3.566, rotateX: [Math.PI/2, Math.PI/2, Math.PI/2]}: { x: 5, y: -22, z: -2, rotateX: 0 }}
            transition={{ duration: 1, type: "spring" }}  
            castShadow geometry={nodes['ChamferCyl002_Material_#5_0'].geometry} material={materials.Material_5} position={[6.084, -3.566, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <motion.mesh
            name="바퀴"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: -10, y: -20 }} 
            animate={carState[3].isActive ? { x: -6.952, y: -3.566, rotateX: [Math.PI/2, Math.PI/2, Math.PI/2] }: { x: -8, y: -22, z: -2, rotateX: 0}} 
            transition={{ duration: 1, type: "spring" }} 
            castShadow geometry={nodes['ChamferCyl003_Material_#5_0'].geometry} material={materials.Material_5} position={[-6.952, -3.566, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <motion.mesh 
            name="바퀴"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: 0, y: -10}} 
            animate={carState[3].isActive ?{ x: 6.084, y: 1.552, rotateX:[Math.PI/2, Math.PI/2, Math.PI/2] }: { x: 5, y: -15, z: -2, rotateX: 0}} 
            transition={{ duration: 1, type: "spring" }} 
            castShadow geometry={nodes['ChamferCyl004_Material_#5_0'].geometry} material={materials.Material_5} position={[6.084, 1.552, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
          <motion.mesh
            name="바퀴"
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            onClick={!introClear && onClick}
            initial={{ x: -10, y: -10}} 
            animate={carState[3].isActive ?{ x: -6.952, y: 1.552, rotateX: [Math.PI/2, Math.PI/2, Math.PI/2] }: { x: -8, y: -15, z: -2, rotateX: 0}} 
            transition={{ duration: 1, type: "spring" }} 
            castShadow geometry={nodes['ChamferCyl005_Material_#5_0'].geometry} material={materials.Material_5} position={[-6.952, 1.552, 0.276]} rotation={[Math.PI / 2, 0, 0]} />
        </group>

        <mesh 
          position={[0,1,1.5]} 
          rotation={[-Math.PI, 0, 0]}
          onPointerOver={() => setInfo(true)} 
          onPointerOut={() => setInfo(false)}
        >
          <planeGeometry args={[25,15]}/>
          <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          {info && !carState.some((state)=> state.isActive) ? <Html center><div className="info">It seems necessary to assemble the car.</div></Html> : null}
          {introClear && <Sparkles position={[0,0,2]} count={80} scale={[24,15,0.5]} size={20} speed={0.4} color={"#fef9e5"}/>}
        </mesh>
      </group>

      {/* <motion.mesh
        castShadow
        initial={{scale: 0}}
        animate={carState.every((state)=> state.isActive) ? {scale: 0.5}: {scale: 0}}
        position={[-5,1,10]}>
        <sphereGeometry args={[4,32]}/>
        <meshToonMaterial color={"brown"}/>
      </motion.mesh> */}
    </group>
  )
}

useGLTF.preload('/models/toy_car.glb')
