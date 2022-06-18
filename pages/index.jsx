import PatriclesBackground from '../components/ParticlesBackground';
import TopNav from '../components/modules/TopNav';
import Profile from '../components/modules/Profile';
import Socials from '../components/modules/Socials';
import RecentPosts from '../components/modules/RecentPosts';


export default function Home() {
  return (
    <div className='text-white'>
        
      <div className='fixed z-[-1]'>
        <PatriclesBackground />
      </div>

      <TopNav />

      <Profile />

      <Socials />

      <RecentPosts />

    </div>

  )
}

// https://coryhughart.com/
// https://www.giftegwuenu.dev/