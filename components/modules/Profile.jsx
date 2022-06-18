import { useEffect } from 'react';
import Image from 'next/image';

import AOS from "aos";
import "aos/dist/aos.css";

import logoImage from '../../public/images/kermit.jpg';

function Profile(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <>
            <div className='flex flex-col justify-center w-10/12 pt-10 m-auto md:flex-row md:w-1/2'>
                <div className='flex flex-col md:w-1/2' data-aos="fade-right">
                    <div className='text-3xl text-center md:text-5xl'>Oli Gray</div>
                    <div className='p-4 text-center text-l md:text-xl'>Software Developer also a certified savage and loves drake too</div>
                </div>
                <div data-aos="fade-left">
                    <Image className='rounded-full' src={logoImage} width={300} height={300} alt={'Logo for Oli'}/>
                </div>
            </div>
        </>
    )
}

export default Profile;