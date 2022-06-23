import Image from 'next/image';
import Stats from '../modules/MyStats';

function AboutMeProfile(){
    return(
        <>
            <Stats></Stats>
            <div className='flex flex-col p-5 m-auto text-white lg:w-2/3 lg:bg-profile-bg rounded-xl'>
                <div className='p-1 text-xl'>Welcome!</div>
                <p className='p-1'>
                    My name is Oli Gray I am currently studying cyber security and I am also a web developer. 
                    Along with my studies I am a lecturer in college teaching Programming and Ditigal IT.
                    On top of being a lecturer I am also working in the web3 space primarily with NFTs, building
                    contracts and developing sites to allow people to mint NFTs on.
                </p>

                <div className='pt-3 text-xl'>
                    What Am I currently working on?
                </div>
                <p className='p-1'>
                    
                </p>

                <div className='pt-3 text-xl'>
                    What am I looking to achieve in the next few years?
                </div>
                <p className='p-1'>
                    
                </p>

                <div className='pt-3 text-xl'>
                    How am I working to achieve this goals?
                </div>
                <p className='p-1'>
                    
                </p>

            </div>  
        </>
    )
}

export default AboutMeProfile;