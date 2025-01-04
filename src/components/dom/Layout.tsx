'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import GoGame from '../ui/GoGame'
import GameStatus from '../game/GameStatus'
import useGameStore from '@/utils/gameStore'
import GameOver from '../ui/GameOver'
import GameSuccess from '../ui/GameSuccess'
import GameOverAd from '../ui/GameOverAd'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
          overflow: 'hidden',
          touchAction: 'auto',
        }}
      >
        {pathname == "/world" && gameState === "START" && isStart && <GameStatus/>}
        {pathname == "/world" && gameState === "GAMEOVERAD" && <GameOverAd gameState={gameState} />}
        {pathname == "/world" && gameState === "GAMEOVER" && <GameOver/>}
        {pathname == "/world" && gameState === "SUCCESS" && <GameSuccess/>}
        {pathname == "/" && <GoGame/>}
        {children}
        {/* <FullscreenBtn/> */}
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100dvh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'
        />
      </motion.div>
  )
}

export { Layout }
