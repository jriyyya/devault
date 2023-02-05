import IssuerLoginn from '@/pages/issuer/IssuerLogin'
import LandingPage from '@/pages/LandingPage'
import Navbar from '@/components/Navbar'
import UserLogin from '@/pages/user/UserLogin'
import styles from './page.module.css'
import UserDashboard from '@/pages/user/UserDashboard'
import UserRequest from '@/pages/user/UserRequest'

export default function Home() {
  return (
    <main>
      {/* <LandingPage /> */}
       {/* <UserLogin /> */}
       {/* <UserDashboard /> */}
       <UserRequest />
    </main>
  )
}
