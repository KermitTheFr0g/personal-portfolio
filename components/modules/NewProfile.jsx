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
        <div>
            <div>
                <div>
                    Oli Gray
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Profile;