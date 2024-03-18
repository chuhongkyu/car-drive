import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Balken_Balken_0: THREE.Mesh
    ['R��ckwand_R��ckwand_0']: THREE.Mesh
    Boden_Boden_0: THREE.Mesh
    Dach_Dach_0: THREE.Mesh
    Krippe_krippe_0: THREE.Mesh
    Krippe_holy_shine_0: THREE.Mesh
    ['Stern_mit_Fl��geln_Stern_m_F_0']: THREE.Mesh
    Jesus_Baby_Jesus_0: THREE.Mesh
    Balthasar_Balthasar_0: THREE.Mesh
    Schaf_Schaf_0: THREE.Mesh
    Melchior_Caspar_0: THREE.Mesh
    Maria_Maria_0: THREE.Mesh
    Joseph_Joseph_0: THREE.Mesh
    Hirte_Hirte_0: THREE.Mesh
    Caspar_Melchior_0: THREE.Mesh
    Esel_Esel_0: THREE.Mesh
    _Kuh_Kuh_0: THREE.Mesh
    Krippebackup_krippe_0: THREE.Mesh
    Holy_backup_holy_shine_0: THREE.Mesh
  }
  materials: {
    Balken: THREE.MeshStandardMaterial
    Rckwand: THREE.MeshStandardMaterial
    Boden: THREE.MeshStandardMaterial
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

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/toy_wood_people.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.135, -2.968, -1.398]} rotation={[-Math.PI / 2, 0, -0.122]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[36.605, 21.68, 30.816]} rotation={[-1.484, 0.159, 0.009]} scale={[1, 0.882, 1]}>
            <group position={[-32.073, 33.403, -28.389]} rotation={[-0.08, -0.158, -0.023]} scale={[1.262, 1.149, 0.511]}>
              <mesh geometry={nodes.Boden_Boden_0.geometry} material={materials.Boden} position={[0, -2.573, -2.732]} />
            </group>
            <mesh geometry={nodes.Dach_Dach_0.geometry} material={materials.Dach} />
          </group>
          <group position={[-19.493, 6.702, -64.547]} rotation={[-Math.PI / 2, 0, 0]} scale={0.586}>
            <mesh geometry={nodes.Krippe_krippe_0.geometry} material={materials.krippe} />
            <mesh geometry={nodes.Krippe_holy_shine_0.geometry} material={materials.holy_shine} />
          </group>
          <group position={[-19.604, 8.116, 11.382]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Jesus_Baby_Jesus_0.geometry} material={materials.Jesus} position={[13.51, 84.956, -8.116]} />
          </group>
          <group position={[-36.217, 14.005, -13.765]} rotation={[Math.PI, 0, 0]} scale={[0.769, 0.812, 0.769]}>
            <mesh geometry={nodes.Balthasar_Balthasar_0.geometry} material={materials.Balthasar} position={[-58.815, -0.369, 53.731]} />
          </group>
          <group position={[30.088, 9.236, -17.409]} rotation={[Math.PI, -0.459, 0]} scale={0.734}>
            <mesh geometry={nodes.Schaf_Schaf_0.geometry} material={materials.Schaf} position={[1.052, 0.847, -2.953]} />
          </group>
          <group position={[-44.305, 13.483, -3.316]} rotation={[0, -0.417, -Math.PI]} scale={0.734}>
            <mesh geometry={nodes.Melchior_Caspar_0.geometry} material={materials.Caspar} position={[2.198, -2.329, -2.953]} />
          </group>
          <group position={[-30.019, 13.381, 15.93]} rotation={[Math.PI, 0, 0]} scale={0.734}>
            <mesh geometry={nodes.Maria_Maria_0.geometry} material={materials.Maria} position={[-13.126, 0.538, 96.813]} />
          </group>
          <group position={[-11.388, 14.706, 18.286]} rotation={[Math.PI, 0.377, 0]} scale={0.734}>
            <mesh geometry={nodes.Joseph_Joseph_0.geometry} material={materials.Joseph} position={[-1.64, -0.66, -2.953]} />
          </group>
          <group position={[37.141, 14.354, -11.2]} rotation={[Math.PI, -0.352, 0]} scale={0.734}>
            <mesh geometry={nodes.Hirte_Hirte_0.geometry} material={materials.Hirte} position={[2.696, -1.13, -2.953]} />
          </group>
          <group position={[-39.699, 12.612, 7.542]} rotation={[Math.PI, 0.095, 0]} scale={0.734}>
            <mesh geometry={nodes.Caspar_Melchior_0.geometry} material={materials.Melchior} position={[-17.587, -0.115, 86.777]} />
          </group>
          <group position={[29.087, 9.916, 15.376]} rotation={[Math.PI, 0, 0]} scale={0.734}>
            <mesh geometry={nodes.Esel_Esel_0.geometry} material={materials.Esel} position={[-16.255, 5.402, 96.058]} />
          </group>
          <group position={[16.717, 11.207, 17.713]} rotation={[Math.PI, 0, 0]} scale={0.826}>
            <mesh geometry={nodes._Kuh_Kuh_0.geometry} material={materials.material} position={[27.128, 5.348, 88.286]} />
          </group>
          <mesh geometry={nodes.Balken_Balken_0.geometry} material={materials.Balken} position={[-39.529, 2.406, 21.957]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.484, 0.257, 0.51]} />
          <mesh geometry={nodes['R��ckwand_R��ckwand_0'].geometry} material={materials.Rckwand} position={[0.018, 2.365, 30.395]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.49, 0.51, 0.51]} />
          <mesh geometry={nodes['Stern_mit_Fl��geln_Stern_m_F_0'].geometry} material={materials.Stern_m_F} position={[-1.038, 36.552, 10.241]} rotation={[Math.PI, 0, 0]} scale={0.28} />
          <mesh geometry={nodes.Krippebackup_krippe_0.geometry} material={materials.krippe} position={[-19.493, 6.702, -64.547]} rotation={[-Math.PI / 2, 0, 0]} scale={0.586} />
          <mesh geometry={nodes.Holy_backup_holy_shine_0.geometry} material={materials.holy_shine} position={[-19.493, 6.702, -64.547]} rotation={[-Math.PI / 2, 0, 0]} scale={0.586} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/toy_wood_people.glb')
