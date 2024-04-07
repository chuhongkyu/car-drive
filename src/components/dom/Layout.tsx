'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import FullscreenBtn from '../ui/FullscreenBtn'
import GoGame from '../ui/GoGame'
import GameStatus from '../game/GameStatus'
import useGameStore from '@/utils/gameStore'
import GameOver from '../ui/GameOver'
import GameSuccess from '../ui/GameSuccess'
import SelectPanel from '../ui/SelectPanel'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()
  const pathname = usePathname()
  const { isStart, gameState }= useGameStore();

  return (
      <motion.div
        className="body"
        ref={ref}
        style={{
          position: 'relative',
          width: ' 100%',
          height: '100%',
          overflow: 'auto',
          touchAction: 'auto',
        }}
      >
        {pathname == "/world" && isStart && <GameStatus/>}
        {pathname == "/world" && gameState === "GAMEOVER" && <GameOver/>}
        {pathname == "/world" && gameState === "SUCCESS" && <GameSuccess/>}
        {pathname == "/world" && gameState === "READY" &&  <SelectPanel/>}
        {pathname == "/" && <GoGame/>}
        {children}
        {/* <FullscreenBtn/> */}
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'
        />
      </motion.div>
  )
}

export { Layout }
