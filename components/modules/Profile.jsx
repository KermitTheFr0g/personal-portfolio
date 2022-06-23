import { useEffect } from 'react';
import Image from 'next/image';

import Socials from '../modules/Socials';

import AOS from "aos";
import "aos/dist/aos.css";

import logoImage from '../../public/images/kermit.png';

function Profile(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div className='p-10 rounded-xl lg:mt-20 lg:w-5/12 lg:m-auto lg:bg-profile-bg'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col lg:w-1/2' data-aos="fade-right">
                    <div className='text-3xl text-center md:text-5xl'>Oli Gray</div>
                    <div className='p-4 text-center text-l md:text-xl md:pt-11'>Software Developer, currently working in the web3 space and also a keen teacher and content creator</div>
                </div>
                <div className='mx-auto' data-aos='fade-left'>
                    <Image className='rounded-full' src={logoImage} width={300} height={300} layout={'fixed'} alt={'Logo for Oli'}/>
                </div>      
            </div>
            <Socials />
        </div>
       
    )
}

export default Profile;