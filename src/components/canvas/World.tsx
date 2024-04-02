'use client'

import { Debug, Physics } from "@react-three/cannon"
import { Car } from "../Car"
import { Suspense, useEffect } from "react"
import { useRecoilState } from "recoil"
import { currentStageNumber, debugAtom, onGameStart, onStartScene, stageData } from "@/utils/atom"
import { Environment, Html } from "@react-three/drei"
import { Stage1 } from "../Stage1"

export const World = ({ route = '/world', ...props }) => {
  const [ game, setGame] = useRecoilState(onGameStart);
  const [debug, setDebug] = useRecoilState(debugAtom);

  const [ isStart, setStart] = useRecoilState(onStartScene);
  const [ stage, setStage] = useRecoilState(stageData);
  const [ current, setCurrent] = useRecoilState(currentStageNumber);

  useEffect(()=>{
    console.log(stage[current])
  },[])

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    if (modeParam === 'debug') {
      setDebug(true);
    }

  },[])

  useEffect(()=>{
    let time;
    if(game){
      time = setTimeout(()=> setStart(true) , 1000)
    }
    return ()=> clearTimeout(time)
  },[game])


  return (
    <Suspense fallback={<></>}>
      <Environment preset="forest"/>
      {!game && 
        <Html center>
          <button className="start" onClick={()=> setGame(true)}>Start</button>
        </Html>
      }
      
      {stage[current].name === "stage1" && <Stage1/>}
      
      {game && <Car/>}
    </Suspense>
  )
}

