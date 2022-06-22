import { useState } from 'react';

import NavButton from '../NavButton';

function TopNav({ selected }){
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
        <div className='text-white'>
            <div className="justify-end hidden p-5 md:pr-8 lg:pr-16 md:flex md:flex-wrap bg-profile-bg bg-opacity-80">
                {
                    Navigation.map(item => (
                        <NavButton key={item.id} name={item.name} link={item.link}/>
                    )) 
                }
            </div>

            <div className="flex flex-col md:hidden">
                <div className="p-4 space-y-2 rounded shadow bg-top-nav-bg" onClick={toggleMobileNav}>
                    <span className="block w-8 h-1 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-1 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-1 bg-gray-100 animate-pulse"></span>
                    
                    <div className={mobileNavIsOpened ? 'flex' : 'hidden'}>
                        <ul className='flex flex-col p-3'>
                            {
                                Navigation.map(item => (
                                    <NavButton key={item.id} name={item.name} link={item.link}/>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TopNav;