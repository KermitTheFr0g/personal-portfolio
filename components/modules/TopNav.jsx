import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import logoImage from '../../public/images/kermit.jpg'

function TopNav(){
    const [mobileNavIsOpened, setMobileNavIsOpened] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavIsOpened(!mobileNavIsOpened);
    }

    const Navigation = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About Me',
            link: '/about-me'
        },
        {
            id: 3,
            name: 'Projects',
            link: '/projects'
        },
        {
            id: 4,
            name: 'Blog',
            link: '/blog'
        },
        {
            id: 5,
            name: 'Uses',
            link: '/uses'
        },
        {
            id: 6,
            name: 'Contact',
            link: '/contact'
        }
    ]


    return (
        <>
            <div className="justify-end m-5 justify-space-between md:pr-8 lg:pr-16 md:flex md:flex-wrap">
                <div className='justify-self-start'>
                    <Image src={logoImage} width={80} height={80} alt={'logo picture'}/>
                </div>
                {
                    Navigation.map(item => (
                        <div className='m-3' key={item.id}>
                            <Link href={item.link}>
                                <a className=' md:text-2xl lg:text-3xl'>{item.name}</a>
                            </Link>
                        </div>
                    )) 
                }
            </div>

            <div className="flex flex-col md:hidden">
                Mobile Top Nav
            </div>
            
        </>
    )
}

export default TopNav;