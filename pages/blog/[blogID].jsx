import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import path from 'path'
import fs from 'fs';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';

import Head from 'next/head';
import TopNav from '../../components/modules/TopNav';
import ParticlesBackground from '../../components/ParticlesBackground';
import Footer from '../../components/modules/Footer';

export async function getStaticPaths() {
    // get slugs
    const files = fs.readdirSync("posts");
    const paths = files.map((filename) => ({
      params: {
        blogID: filename.replace(".md", ""),
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params: { blogID }}){
    const mdFile = fs.readFileSync(path.join(process.cwd(), 'posts', `${blogID}.md`));
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

            {
                frontMatter.youtubeVideo ? <div className='text-white'>THIS HAS A YOUTUBVE VIDEO ASSOCIATED</div> : <div></div>
            }

            <div className='hidden m-auto mt-10 text-center text-white md:block md:text-3xl lg:text-6xl'>
                {frontMatter.title}
            </div>

            <div className='p-5 m-auto md:mt-10 lg:w-2/3 lg:bg-profile-bg rounded-xl lg:bg-opacity-80'>
                <ReactMarkdown className='m-auto prose prose-invert md:prose-lg lg:prose-xl'>
                    {content}
                </ReactMarkdown>
            </div>

            <Footer />
        </div>

    )
}

export default Blog;