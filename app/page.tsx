'use client'

import NavBar from "@/components/home/NavBar"
import { UserAuth } from "@/context/AuthContext"

export default function Page() {
  const { user } = UserAuth()

  // console.log(user)

  return (
    <>
      <NavBar/>
      {/* <View className='flex h-screen w-full'>
        <Suspense fallback={null}>
          <World/>
          <Common />
        </Suspense>
      </View> */}
    </>
  )
}
