import Image from 'next/image';
import Stats from '../modules/MyStats';

function AboutMeProfile(){
    return(
        <>
            <Stats></Stats>
            <div className='flex flex-col p-5 m-auto text-white lg:w-2/3 lg:bg-profile-bg rounded-xl'>
                <div className='p-1 text-xl'>Welcome!</div>
                <p className='p-1'>
                    My name is Oli Gray and I am currently studying cyber security, I am also a web developer. 
                    Alongside my studies I am a lecturer at a college where I teach Programming and Digital IT. 
                    On top of all this I am also working in web3 space. This primarily consists of NFTs , building 
                    contracts and developing sites to allow people to mint NFTs on.
                </p>

                <div className='pt-3 text-xl'>
                    What Am I currently working on?
                </div>
                <p className='p-1'>
                    Currently I am finishing my Cyber Security degree and I am working on various other projects on the side.
                    I have now began this blog and my YouTube channel too which are the two platforms I am creating content for.
                    Along with doing my own tutorials and programming projects, the major project I am working on is Dungeon Looters
                    which is an MMO text adventure game which is interacted with using API requests. The idea behind Dungeon Looters
                    is to be a platform for new programmers and experienced programmers to create solutions for the API or learn how to
                    interact with an API. Apart from my own projects I am working with a small team creating NFT projects, this means I
                    am creating sites and writing contracts in solidity. I will go into more detail on the projects I am working on in a 
                    a blog soon.
                </p>

                <div className='pt-3 text-xl'>
                    Technologies
                </div>
                <p className='p-1'>
                    I am fluent in the classic languages, like Javascript and Python. I am still looking to expand my knowledge 
                    by learning some more languages. Along with these languages I have used ExpressJS, ReactJS, NextJS, and MySQL. All of
                    these different technologies have different benefits and like I said I am looking to expand my knowledge more and
                    this will all be documented here on my blog.
                </p>

                <div className='pt-3 text-xl'>
                    When I am not coding...
                </div>
                <p className='p-1'>
                    With all this work you must be wondering how I get any time to myself or if I have any hobbies of my own. Well yes I do, 
                    when I am not busy coding or trying to break things I enjoy training at the gym and or reading various books. 
                    You can follow my fitness journey <a className='pl-1 text-purple-300 underline' href="https://www.instagram.com/oligray_fitness/">here</a>. 
                    If you would like any tips or advice on fitness and how to better yourself then just contact me (remember I am not a PT). Also if you have any 
                    books to recommend for me or want recommendations also feel free to contact me.
                </p>

            </div>  
        </>
    )
}

export default AboutMeProfile;