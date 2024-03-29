import Head from 'next/head'

import PatriclesBackground from '../components/ParticlesBackground';
import TopNav from '../components/modules/TopNav';
import Profile from '../components/modules/Profile';
import RecentPosts from '../components/modules/RecentPosts';
import Footer from '../components/modules/Footer'


export default function Home() {
  return (
    <div className='overflow-hidden text-white flex flex-col min-h-screen justify-between'>
      <Head>
        <title>Oli Gray</title>
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
// https://www.soumya-jit.tech/
// https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour