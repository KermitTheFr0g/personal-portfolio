import Head from 'next/head';

import TopNav from '../components/modules/TopNav';
import ParticlesBackground from '../components/ParticlesBackground';


function AboutMe(){
    
    return(
        <>
            <Head>
                <title>About Me</title>
            </Head>

            <div className='fixed z-[-1]'>
                <ParticlesBackground />
            </div>

            <TopNav />

            <div className='m-auto mt-10 text-4xl text-center text-white'>About Me</div>
        </>
    )
}

export default AboutMe;