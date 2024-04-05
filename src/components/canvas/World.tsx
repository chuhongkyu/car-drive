'use client'

import { Car } from "../Car"
import { Suspense, useEffect } from "react"
import { Environment, Html } from "@react-three/drei"
import { Stage1 } from "../Stage1"
import useDebugStore from "@/utils/debugStore"
import useGameStore from "@/utils/gameStore"

export const World = ({ route = '/world', ...props }) => {
  const { checkStart, gameState, setGameState, stageData, stageNumber } = useGameStore()
  const { setDebug } = useDebugStore()

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


  return (
    <Suspense fallback={<></>}>
      <Environment preset="forest"/>
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

