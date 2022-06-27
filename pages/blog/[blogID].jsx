import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import fs from 'fs';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';

import Head from 'next/head';
import TopNav from '../../components/modules/TopNav';
import ParticlesBackground from '../../components/ParticlesBackground';
import Footer from '../../components/modules/Footer';

export async function getServerSideProps({ params: { blogID }}){
    const files = fs.readdirSync('posts');
    console.log(files)
    const mdFile = fs.readFileSync(`posts/${blogID}.md`);
    const { data: frontMatter, content } = matter(mdFile);
    
    return {
        props: {
            frontMatter,
            content,
        }
    }
}

function Blog({ frontMatter, content }){
    return (
        <div className='dark'>
            <Head>
                <title>{`${frontMatter.title}`}</title>
            </Head>

            <div className='fixed z-[-1]'>
                <ParticlesBackground />
            </div>
            
            <TopNav />
            
            <div className='p-5 m-auto mt-10 lg:w-2/3 lg:bg-profile-bg rounded-xl lg:bg-opacity-80'>
                <ReactMarkdown className='m-auto prose prose-invert md:prose-lg lg:prose-xl'>
                    {content}
                </ReactMarkdown>
            </div>

            <Footer />
        </div>

    )
}

export default Blog;