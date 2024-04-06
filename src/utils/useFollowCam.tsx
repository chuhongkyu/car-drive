import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'
import useGameStore from './gameStore'

export default function useFollowCam() {
  const { scene, camera } = useThree()
  const { isStart } = useGameStore()
  const pivot = useMemo(() => new Object3D(), [])
  const followCam = useMemo(() => {
    const o = new Object3D()
    o.position.set(0, 0, 0)
    return o
  }, [])

  const makeCamera = ()=>{
    // console.log(camera.rotation, camera.position)
    camera.rotation.set(-0.85, 0, 0)
    camera.position.set(0, 2.5, 1)
    followCam.add(camera)
    pivot.add(followCam)
    scene.add(pivot)
  }

  const cleanupCamera = () => {
    followCam.remove(camera);
    pivot.remove(followCam);
    scene.remove(pivot);
  }


  useEffect(() => {
    if(isStart){
      makeCamera()
    }
    return () => {
      cleanupCamera();
    };
  }, [isStart])

  return { pivot }
}
