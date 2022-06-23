import { useEffect } from 'react';

import SocialButton from '../SocialButton';

import GithubImg from '/public/images/socials/github.png';
import TwitterImg from '/public/images/socials/twitter.png';
import LinkedInImg from '/public/images/socials/linkedin.png';
import InstagramImg from '/public/images/socials/instagram.jpg';
import YoutubeImg from '/public/images/socials/youtube.png';

import AOS from "aos";
import "aos/dist/aos.css";

function Socials(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const socials = [
        {
            id: 1,
            name: 'Github',
            link: 'https://github.com/KermitTheFr0g',
            image: GithubImg
        },
        {
            id: 2,
            name: 'Twitter',
            link: 'https://twitter.com/OGKermit_',
            image: TwitterImg
        },
        {
            id: 3,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/oli-gray-b22872214/',
            image: LinkedInImg
        },
        {
            id: 4,
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCcAUm8tYx-kd1IWtdbW7RYA',
            image: YoutubeImg
        },
        {
            id: 5,
            name: 'Instagram',
            link: 'https://www.instagram.com/oligray_fitness/',
            image: InstagramImg
        }
      ]

    return (
        <div data-aos="fade-up" className='flex flex-row justify-center w-11/12 pt-5 pb-5 m-auto md:w-1/3 md:pt-0 md:pb-0'>
            {
                socials.map(item => (
                    <SocialButton key={item.id} name={item.name} link={item.link} image={item.image} />
                ))
            }
        </div>
    )
}

export default Socials;