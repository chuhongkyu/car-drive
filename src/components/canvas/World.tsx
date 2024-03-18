'use client'

import { Debug, Physics } from "@react-three/cannon"
import { Car } from "../Car"
import { Ground } from "../Ground"
import { Suspense, useEffect } from "react"
import { useRecoilState } from "recoil"
import { debugAtom, onGameStart } from "@/utils/atom"
import DebugWrapper from "../DebugWrapper"

export const World = ({ route = '/world', ...props }) => {
  const [ game, setGame] = useRecoilState(onGameStart);
  const [debug, setDebug] = useRecoilState(debugAtom);

  useEffect(()=>{
    setGame(true)
    
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    if (modeParam === 'debug') {
      setDebug(true);
    }

  },[])

  useEffect(()=>{
    
  },[])

  return (
    <Physics broadphase="SAP" gravity={[0, -2.6, 0]} allowSleep>
      <DebugWrapper>
        <Suspense fallback={<></>}>
          <Ground/>
          <Car/>
        </Suspense>
      </DebugWrapper>
    </Physics>
  )
}

