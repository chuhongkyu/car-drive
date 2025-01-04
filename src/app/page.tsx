'use client'

import NavBar from "@/components/home/NavBar"
import { UserAuth } from "@/context/AuthContext"

export default function Page() {
  const { user } = UserAuth()
  
  return (
    <>
      <NavBar/>
    </>
  )
}
