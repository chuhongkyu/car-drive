'use client'

import { Car } from "../Car"
import { Suspense, useEffect, useRef } from "react"
import { Html, OrthographicCamera } from "@react-three/drei"
import { Stage1 } from "../Stage1"
import useDebugStore from "@/utils/debugStore"
import useGameStore from "@/utils/gameStore"
import { WorldLights } from "./Lights"
import DebugWrapper from "../DebugWrapper"
import { Physics } from "@react-three/cannon"
import { Stage10 } from "../Stage10"

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
      cameraRef.current.position.y = 2.5;
      cameraRef.current.position.z = 2;
      // console.log(cameraRef.current.position)
    }
  },[isStart])

  useEffect(()=>{
    const check = stageData[stageNumber].quest.every((el)=> el.clear)
    if(check){
      setGameState("SUCCESS")
    }
  },[stageData])

  return (
    <>
    <Physics broadphase="SAP" gravity={[0, -9.6, 0]} allowSleep>
      <DebugWrapper>
        <Suspense fallback={<></>}>
          <WorldLights/>
          {gameState === "READY" && 
            <Html center>
              <button className="start" onClick={()=> setGameState("START")}>Start</button>
            </Html>
          }
          {stageData[stageNumber].name === "stage1" && <Stage1/>}
          {stageData[stageNumber].name === "stage2" && <Stage10/>}
          {gameState === "START" && <Car carPosition={stageData[stageNumber].carPosition}/>}
        </Suspense>
      </DebugWrapper>
    </Physics>
    <OrthographicCamera
      ref={cameraRef}
       makeDefault
       left={-(window.innerWidth / window.innerHeight)}
       right={window.innerWidth / window.innerHeight}
       top={1}
       rotation={[-0.85, 0, 0]}
       position={[0, 2.5, 2]}
       zoom={0.5}
       bottom={-1}
       near={-1000}
       far={1000}
     />
    </>
  )
}

