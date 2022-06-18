import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

function Socials(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div data-aos="fade-up" className='flex flex-row justify-center w-11/12 m-auto md:w-1/3'>
            Github
            Twitter
            Linkedin
            Youtube
        </div>
    )
}

export default Socials;