import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import fs from 'fs';
import appRoot from 'app-root-path'
import matter from 'gray-matter'
import md from 'markdown-it'

import Head from 'next/head';
import TopNav from '../../components/modules/TopNav';
import ParticlesBackground from '../../components/ParticlesBackground';
import BlogContent from '../../components/modules/BlogContent'


export async function getServerSideProps({ params: { blogID }}){
    const mdFile = fs.readFileSync(`${appRoot}/posts/${blogID}.md`);
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
        <>
            <Head>
                <title>{`${frontMatter.title}`}</title>
            </Head>

            <div className='fixed z-[-1]'>
                <ParticlesBackground />
            </div>
            
            <TopNav />
            
            <div className='w-1/2 m-auto bg-profile-bg'>
                <div className='mx-auto prose text-white' dangerouslySetInnerHTML={{ __html: md().render(content)}}></div>
            </div>
        </>

    )
}

export default Blog;