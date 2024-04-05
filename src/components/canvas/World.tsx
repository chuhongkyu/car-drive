'use client'

import { Car } from "../Car"
import { Suspense, useEffect } from "react"
import { Environment, Html } from "@react-three/drei"
import { Stage1 } from "../Stage1"
import useDebugStore from "@/utils/debugStore"
import useGameStore from "@/utils/gameStore"
import { WorldLights } from "./Lights"
import { useThree } from "@react-three/fiber"

export const World = ({ route = '/world', ...props }) => {
  const { isStart, checkStart, gameState, setGameState, stageData, stageNumber } = useGameStore()
  const { setDebug } = useDebugStore()
  const three = useThree()

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
      three.camera.rotation.set(-0.6, 0, 0)
      three.camera.position.set(0, 16, 25)
    }
  },[isStart])


  return (
    <Suspense fallback={<></>}>
      <WorldLights/>
      {gameState === "READY" && 
        <Html center>
          <button className="start" onClick={()=> setGameState("START")}>Start</button>
        </Html>
      }
      
      {stageData[stageNumber].name === "stage1" && <Stage1/>}
      {gameState === "START" && <Car/>}
    </Suspense>
  )
}

