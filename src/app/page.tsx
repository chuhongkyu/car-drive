'use client'

import NavBar from "@/app/components/home/NavBar"
import { UserAuth } from "@/app/context/AuthContext"

export default function Page() {
  const { user } = UserAuth()
  
  return (
    <>
      <NavBar/>
    </>
  )
}
