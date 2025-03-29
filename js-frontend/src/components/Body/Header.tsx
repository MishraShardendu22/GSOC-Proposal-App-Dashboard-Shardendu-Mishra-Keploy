import { auth } from '@/auth';
import SignIn from '../AuthButton/SignIn';
import SignOut from '../AuthButton/SignOut';
import Tabs from './Tabs';

const Header = async () => {
  const session = await auth();

  return (
    <nav>
      <div>
        Keploy App DashBoard
      </div>
      <div>
        <Tabs />
      </div>
      <div>
        {session ? (<SignOut />) : (<SignIn />)}
      </div>
    </nav>
  )
}

export default Header
