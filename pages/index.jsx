import Head from 'next/head'

import PatriclesBackground from '../components/ParticlesBackground';
import TopNav from '../components/modules/TopNav';
import Profile from '../components/modules/Profile';
import RecentPosts from '../components/modules/RecentPosts';
import Footer from '../components/modules/Footer'

import kermitFavicon from '../public/images/kermit.png';

export default function Home() {
  return (
    <div className='overflow-hidden text-white'>
      <Head>
        <title>Oli Gray</title>
        <link rel="icon" type='image/png' href={kermitFavicon} />
      </Head>

      <div className='fixed z-[-1]'>
        <PatriclesBackground />
      </div>

      <TopNav />

      <Profile />

      <RecentPosts />

      <Footer />

    </div>

  )
}

// https://coryhughart.com/
// https://www.giftegwuenu.dev/