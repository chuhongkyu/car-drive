"use client"

import { Car } from "../Car"
import { Suspense, useEffect, useRef } from "react"
import { Html, PerspectiveCamera } from "@react-three/drei"
import { Stage1 } from "../stage/Stage1"
import useDebugStore from "@/app/utils/debugStore"
import useGameStore from "@/app/utils/gameStore"
import { WorldLights } from "./Lights"
import DebugWrapper from "../DebugWrapper"
import { Physics } from "@react-three/cannon"
import { Stage2 } from "../stage/Stage2"
import { Stage3 } from "../stage/Stage3"
import SelectPanel from "../ui/SelectPanel"
import { Stage4 } from "../stage/Stage4"
import Background from "../object/Background"
import { Stage5 } from "../stage/Stage5"
import { Stage6 } from "../stage/Stage6"
import * as THREE from "three"

export const World = ({ route = "/world", ...props }) => {
  const { isStart, checkStart, gameState, setGameState, stageData, stageNumber } = useGameStore()
  const { setDebug } = useDebugStore()
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(()=>{
    const urlParams = new URLSearchParams(window?.location.search);
    const modeParam = urlParams.get("mode");
    if (modeParam === "debug") {
      setDebug(true)
    }
    
    return ()=>{
      setGameState("READY")
      checkStart(false)
    }

  },[])

  useEffect(()=>{
    if(!isStart && cameraRef.current){
      cameraRef.current.position.x = 0;
      cameraRef.current.position.y = 10;
      cameraRef.current.position.z = 7;
      cameraRef.current.rotation.set(-1,0,0)
      // console.log(cameraRef.current.position)
    }
  },[isStart, cameraRef])

  useEffect(()=>{
    if(isStart){
      const check = stageData[stageNumber].quest.every((el)=> el.clear)
      if(check) setGameState("SUCCESS")
    }
  },[isStart, stageData, stageNumber])

  return (
    <>
    {/* <color attach="background" args={["rgb(199, 191, 168)"]} /> */}
    <Physics broadphase="SAP" gravity={[0, -9.6, 0]} allowSleep>
      <DebugWrapper>
        <Suspense fallback={<></>}>
          <WorldLights/>
          {stageData[stageNumber]?.name === "stage1" && <Stage1/>}
          {stageData[stageNumber]?.name === "stage2" && <Stage2/>}
          {stageData[stageNumber]?.name === "stage3" && <Stage3/>}
          {stageData[stageNumber]?.name === "stage4" && <Stage4/>}
          {stageData[stageNumber]?.name === "stage5" && <Stage5/>}
          {stageData[stageNumber]?.name === "stage6" && <Stage6/>}
          {gameState === "START" && <Car carPosition={stageData[stageNumber]?.carPosition}/>}
          {gameState === "READY" && <SelectPanel/>}
        </Suspense>
      </DebugWrapper>
    </Physics>
    <Background/>
    <PerspectiveCamera makeDefault ref={cameraRef} fov={45} position={[0,1,2]}/>
    </>
  )
}

