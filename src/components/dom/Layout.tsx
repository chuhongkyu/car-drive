'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion"

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()
  const path = usePathname()

  return (
      <motion.div
        ref={ref}
        style={{
          position: 'relative',
          width: ' 100%',
          height: '100%',
          overflow: 'auto',
          touchAction: 'auto',
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div 
            key={path + "KEY"}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            className='mx-auto w-full'>

            <div className='flex w-96 flex-col items-start justify-center p-12 fixed z-10'>
              <p className='w-full'>mr.chu three</p>
              <h1 className='my-4 text-5xl font-bold leading-tight'>{path == '/' ? "Default": path.replace('/','').toUpperCase()}</h1>
              <p className='mb-8 text-2xl leading-normal'>We can be anything.</p>
            </div>

            <div className='flex flex-col gap-4 fixed z-10 top-5 right-5'>
              <Link href={'/'}>
                Default
              </Link>
              <Link href={'/world'}>
                World
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
        {children}
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
