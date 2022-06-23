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
        </>
    )
}

export default AboutMe;