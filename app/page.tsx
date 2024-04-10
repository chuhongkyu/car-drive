'use client'

import Login from "@/components/home/Login"
import { UserAuth } from "@/context/AuthContext"

export default function Page() {
  const { user } = UserAuth()

  console.log(user)

  return (
    <>
      <Login/>
      {/* <View className='flex h-screen w-full'>
        <Suspense fallback={null}>
          <World/>
          <Common />
        </Suspense>
      </View> */}
    </>
  )
}
