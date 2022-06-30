import { useEffect } from 'react';

import Head from 'next/head';

import AOS from "aos";
import "aos/dist/aos.css";

import ParticlesBackground from '../components/ParticlesBackground';
import TopNav from '../components/modules/TopNav';
import Footer from '../components/modules/Footer'
import ReactMarkdown from 'react-markdown';

import SetupImg from '../public/images/setup.png'

import Image from 'next/image';

function Uses(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div>
            <Head>
                <title>Uses</title>
            </Head>

            <div className='fixed z-[-1]'>
              <ParticlesBackground />
            </div>

            <TopNav />  
            
            <div className='m-auto mt-10 text-4xl text-center text-white'>
                Uses
            </div>

            <div data-aos='fade-up' className='p-5 m-auto text-white md:mt-10 lg:w-5/12 lg:bg-profile-bg rounded-xl lg:bg-opacity-80'>
                <p>                
                    Here is a list of tools and hardware that I use. I will try and keep this as updated
                    as possible and update this page when any tools or hardware change in my day to day work.   
                </p>
                
                <div className='pt-5'>
                    <Image  
                        className='rounded-xl'
                        src={SetupImg} 
                        height={756} 
                        width={1008}
                        alt={`image for setup`}    
                    />
                </div>

                <div className='p-1 text-xl'>
                    My Desk Setup
                </div>

                <ul className='p-1'>
                    <li> - Custom Built PC</li>
                    <li> - {'LG 27GL850-B 27" 2560x1440 144Hz'}</li>
                    <li> - {'Samsung UJ590 32" 4k'}</li>
                    <li> - {'Philips 243V7QJABF 24" IPS'}</li>
                    <li> - Blue Yeti Microphone</li>
                    <li> - Astro A50s</li>
                    <li> - Corsair K70 keyboard</li>
                    <li> - Logitech G502 Mouse</li>
                </ul>

                <div className='p-1 text-xl'>
                    Editor & Terminal
                </div>
                
                <ul className='p-1'>
                    <li> - Editor - Visual Studio Code</li>
                    <li> - Colour Theme - <a className='text-purple-300 underline' href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark">Atom One Dark Theme</a></li>
                    <li> - Terminal (When on mac) - I use both ITerm and Hyper</li>
                </ul>
                
                <div className='p-1 text-xl'>
                    Desktop Apps
                </div>
                
                <ul className='p-1'>
                    <li> - Notion - I use this for my diary and tracking all my tasks</li>
                    <li> - PowerToys - Helps to arange my windows and applications on Windows</li>
                    <li> - Discord - A lot of my Web3 work is done through this platform</li>
                </ul>

            </div>

            <Footer />

        </div>
    )
}

export default Uses;
