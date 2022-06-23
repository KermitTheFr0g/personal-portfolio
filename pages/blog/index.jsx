import Head from 'next/head'

import ParticlesBackground from '../../components/ParticlesBackground';
import TopNav from '../../components/modules/TopNav';

export default function Home() {
  return (
    <div className='overflow-hidden text-white'>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='fixed z-[-1]'>
        <ParticlesBackground />
      </div>

      <TopNav />


    </div>

  )
}