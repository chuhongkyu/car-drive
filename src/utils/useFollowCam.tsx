import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'
import useGameStore from './gameStore'

export default function useFollowCam() {
  const { scene, camera } = useThree()
  const { isStart, cameraType } = useGameStore()
  const pivot = useMemo(() => new Object3D(), [])
  const followCam = useMemo(() => {
    const o = new Object3D()
    o.position.set(0, 0, 0)
    return o
  }, [])

  const makeFocusCamera = ()=>{
    // console.log(camera.rotation, camera.position)
    camera.rotation.set(-0.5, 0, 0)
    camera.position.set(0, 1, 1)
    
    followCam.add(camera)
    pivot.add(followCam)
    scene.add(pivot)
  }

  const makeAllCamera = ()=>{
    camera.rotation.set(-0.8, 0, 0)
    camera.position.set(0, 3, 2)

    followCam.add(camera)
    pivot.add(followCam)
    scene.add(pivot)
  }

  const makeViewCamera = ()=>{
    camera.rotation.set(-0.2, 0, 0)
    camera.position.set(0, 1, 1)

    followCam.add(camera)
    pivot.add(followCam)
    scene.add(pivot)
  }

  const cleanupCamera = () => {
    followCam.remove(camera);
    pivot.remove(followCam);
    scene.remove(pivot);
  }

  useEffect(()=>{
    if(!isStart) return

    if(cameraType === "ALL"){
      cleanupCamera();
      makeAllCamera()
    }else if(cameraType === "FOCUS"){
      cleanupCamera();
      makeFocusCamera()
    }else if(cameraType === "VIEW"){
      cleanupCamera();
      makeViewCamera();
    }
    return () =>  cleanupCamera();
  },[cameraType, isStart])

  return { pivot }
}
