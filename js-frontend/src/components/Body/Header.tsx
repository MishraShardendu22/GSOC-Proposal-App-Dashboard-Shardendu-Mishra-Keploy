import Tabs from './Tabs'
import { auth } from '@/auth'
import SignIn from '../AuthButton/SignIn'
import SignOut from '../AuthButton/SignOut'

const Header = async () => {
  const session = await auth()

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-md p-4">
      <div className="text-xl font-semibold text-gray-800">
        Keploy App Dashboard
      </div>
      <div className="flex-1 flex justify-center">
        <Tabs />
      </div>
      {session ? <SignOut /> : <SignIn />}
    </nav>
  )
}

export default Header
