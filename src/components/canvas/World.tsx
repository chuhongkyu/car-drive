'use client'

import { Car } from "../Car"
import { Suspense, useEffect, useRef } from "react"
import { Html, OrthographicCamera, PerspectiveCamera } from "@react-three/drei"
import { Stage1 } from "../stage/Stage1"
import useDebugStore from "@/utils/debugStore"
import useGameStore from "@/utils/gameStore"
import { WorldLights } from "./Lights"
import DebugWrapper from "../DebugWrapper"
import { Physics } from "@react-three/cannon"
import { Stage10 } from "../stage/Stage10"
import { Stage2 } from "../stage/Stage2"

export const World = ({ route = '/world', ...props }) => {
  const { isStart, checkStart, gameState, setGameState, stageData, stageNumber } = useGameStore()
  const { setDebug } = useDebugStore()
  const cameraRef = useRef(null)

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    if (modeParam === 'debug') {
      setDebug(true)
    }
  },[])

  useEffect(()=>{
    let time;
    if(gameState === "START"){
      time = setTimeout(()=> checkStart(true) , 1000)
    }
    return ()=> clearTimeout(time)
  },[gameState])

  useEffect(()=>{
    if(!isStart){
      cameraRef.current.position.x = 0;
      cameraRef.current.position.y = 1;
      cameraRef.current.position.z = 2;
      cameraRef.current.rotation.set(0,0,0)
      // console.log(cameraRef.current.position)
    }
  },[isStart])

  useEffect(()=>{
    if(isStart){
      const check = stageData[stageNumber].quest.every((el)=> el.clear)
      if(check){ setGameState("SUCCESS")}
    }
  },[isStart, stageData, stageNumber])

  return (
    <>
    <Physics broadphase="SAP" gravity={[0, -9.6, 0]} allowSleep>
      <DebugWrapper>
        <Suspense fallback={<></>}>
          <WorldLights/>
          {stageData[stageNumber].name === "stage1" && <Stage1/>}
          {stageData[stageNumber].name === "stage2" && <Stage2/>}
          {stageData[stageNumber].name === "stage3" && <Stage10/>}
          {gameState === "START" && <Car carPosition={stageData[stageNumber].carPosition}/>}
        </Suspense>
      </DebugWrapper>
    </Physics>
    <PerspectiveCamera makeDefault ref={cameraRef} fov={45} position={[0,1,2]}/>
    </>
  )
}

