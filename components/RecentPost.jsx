import { useEffect } from 'react';

import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

function RecentPost({ title, date, description, postLink}){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <>
            <Link href={postLink}>
                <a data-aos="flip-up" className="p-5 m-5 bg-profile-bg bg-opacity-80 rounded-2xl">
                    <div className='font-bold'>{title}</div>
                    <div>{description}</div>
                    <div className='text-sm font-light'>{date}</div>
                </a>
            </Link>
        </> 
    )
}

export default RecentPost;