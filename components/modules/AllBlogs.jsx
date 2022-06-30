import { useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import AOS from "aos";
import "aos/dist/aos.css";

function AllBlogs({ blogPosts }){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="flex flex-wrap justify-center p-10 m-auto">
            {
                blogPosts?.map((blog, i) => {
                    return (
                        <a data-aos='flip-up' className="w-10/12 p-5 m-3 text-center lg:w-3/12 rounded-xl bg-profile-bg" key={i} href={`/blog/${blog.slug}`}>
                            <div  className='text-xl'>{blog.title}</div>
                            <div className='p-5'>
                                <Image  
                                    src={blog.image_url} 
                                    height={216} 
                                    width={384}
                                    alt={`Image for ${blog.title}`}    
                                />
                            </div>
                            <div>{blog.description}</div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default AllBlogs;