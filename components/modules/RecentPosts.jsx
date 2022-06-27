import { useState,useEffect } from 'react';

import RecentPost from '../RecentPost';


function RecentPosts() {
    // when page loads get request for recent posts
    const [recentPosts, setRecentPosts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/posts/recent')
            .then(response => response.json())
            .then(data => {
                setRecentPosts(data['recentPosts']);
                setLoading(false);
            })
    }, [])

    if(loading || !recentPosts){
        return(
            <>
            <div className='flex flex-col w-10/12 m-auto md:mt-20 md:w-1/2 md:text-3xl md:pt-20'>Recent Blog Posts</div>
            <div className="flex flex-col w-10/12 m-auto text-3xl text-center md:w-1/2">
                Loading Posts...
            </div>
        </>
        )
    }

    return (
        <>
            <div className='flex flex-col w-10/12 m-auto md:mt-20 md:w-1/2 md:text-3xl md:pt-20'>Recent Blog Posts</div>
            <div className="flex flex-col w-10/12 m-auto md:w-1/2">
                {
                    recentPosts.map(post => (
                        <RecentPost key={post.id} title={post.title} date={post.date} description={post.description} postLink={`/blog/${post.slug}`}/>
                    ))
                }
            </div>
        </>
      
    )
}

export default RecentPosts;