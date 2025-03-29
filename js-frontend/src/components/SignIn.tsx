import { signIn } from '@/auth'

const SignIn = () => {
 return (
  <form
   action={async () => {
    'use server'
    await signIn('github')
   }}
  >
   <button type="submit">Signin with GitHub</button>
  </form>
 )
}

export default SignIn;