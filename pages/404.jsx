import Head from 'next/head';
import Link from 'next/link';

import TopNav from "../components/modules/TopNav";
import ParticlesBackground from '../components/ParticlesBackground';

function NotFound(){
    return(
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>

            <div className='fixed z-[-1]'>
                <ParticlesBackground />
            </div>

            <TopNav />

            <div className='p-5 m-auto mt-5 text-center text-white md:mt-48 md:w-1/3 md:bg-profile-bg rounded-xl md:bg-opacity-80'>
                <div className='p-5'>
                    404 Page Not Found
                </div>
                
                <div className='p-5'>
                    {"The page you are trying to access doesn't exist"}
                </div>
                <div className='p-5'>
                    <Link href={'/'}>
                        <a className='p-3 bg-button-bg rounded-2xl hover:bg-button-hover' > Go Home</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;