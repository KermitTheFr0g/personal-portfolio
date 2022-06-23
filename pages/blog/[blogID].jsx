import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import TopNav from '../../components/modules/TopNav';
import ParticlesBackground from '../../components/ParticlesBackground';
import BlogContent from '../../components/modules/BlogContent'

function Blog(){
    // getting the query from request
    const router = useRouter();
    const { blogID } = router.query;

    // setting states
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState({})

    useEffect(() => {
        setLoading(true);
        fetch(`/api/posts/${blogID}`)
            .then(response => response.json())
            .then(data => {
                setBlogData(data);
                setLoading(false);
            })
    }, [blogID])


    return (
        <>
            <Head>
                <title>{`Oli's Blog ${blogID}`}</title>
            </Head>

            <div className='fixed z-[-1]'>
                <ParticlesBackground />
            </div>
            
            <TopNav />

            <BlogContent title={blogData.title} content={blogData.content} date={blogData.date} loading={loading}/>
        </>

    )
}

export default Blog;