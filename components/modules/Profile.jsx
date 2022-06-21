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
        <div className='md:w-11/12 lg:w-8/12 md:p-5 lg:p-10 md:m-auto md:bg-profile-bg md:bg-opacity-80 md:rounded-2xl md:mt-10'>
            <div className='flex flex-col justify-center w-10/12 pt-10 m-auto lg:flex-row lg:w-1/2'>
                <div className='flex flex-col lg:w-1/2' data-aos="fade-right">
                    <div className='text-3xl text-center md:text-5xl'>Oli Gray</div>
                    <div className='p-4 text-center text-l md:text-xl md:pt-11'>Software Developer, currently working in the web3 space and also a keen teacher and content creator</div>
                </div>
                <div data-aos="fade-left">
                    <Image className='rounded-full' src={logoImage} width={300} height={300} alt={'Logo for Oli'}/>
                </div>
            </div>
            <Socials />
        </div>
    )
}

export default Profile;