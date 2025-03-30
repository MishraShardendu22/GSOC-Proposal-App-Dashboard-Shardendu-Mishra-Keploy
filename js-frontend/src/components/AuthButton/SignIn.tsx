'use client'

import { signIn } from 'next-auth/react'

export default function SignIn() {
  
  const HandleSignIn = async () => {
    await signIn('github')
  }

  return <button onClick={HandleSignIn}>SignIn</button>
}
