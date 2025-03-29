// components/SignOutButton.tsx
'use client'

import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

const SignOut = () => {
  const LogOut = () => {
    signOut()
  }

  return <Button onClick={LogOut}>Sign Out</Button>
}

export default SignOut
