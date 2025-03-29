import { auth, signIn } from '@/auth'

const SignIn = async () => {
  const session = await auth()

  if (!session) {
    console.log('Session:', session)

    return (
      <form
        action={async () => {
          'use server'
          await signIn('github')
        }}
      >
        <button type="submit">Sign in with GitHub</button>
      </form>
    )
  }

  return <div>Logout</div>
}

export default SignIn
