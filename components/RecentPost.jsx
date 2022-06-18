import { useEffect } from 'react';

import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

function RecentPost({ title, date, content, id}){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div data-aos="flip-up" className="p-3 m-5 border">
            <div className='font-bold'>{title}</div>
            <div>{content}</div>
            <div className='text-sm font-light'>{date}</div>
        </div>
    )
}

export default RecentPost;