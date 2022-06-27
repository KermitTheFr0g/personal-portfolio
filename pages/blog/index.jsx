import Head from 'next/head'

import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import ParticlesBackground from '../../components/ParticlesBackground';
import TopNav from '../../components/modules/TopNav';
import AllBlogs from '../../components/modules/AllBlogs';

export async function getStaticProps(){   
  const files = fs.readdirSync(`posts`);
  const posts = files.map((fileName) => {
    const readFiles = fs.readFileSync(`posts/${fileName}`);
    const { data: blogData } = matter(readFiles);
  
    return blogData
  })

  return {
    props: {
      posts,
    }
  }
}

function Blog({ posts }) {

  return (
    <div className='overflow-hidden text-white'>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='fixed z-[-1]'>
        <ParticlesBackground />
      </div>

      <TopNav />


      <div className='flex flex-row'>
        <div>Search Bar</div>
        <button>Search</button>
      </div>


      <AllBlogs blogPosts={posts}/>

    </div>

  )
}

export default Blog;