import Head from 'next/head'

import matter from 'gray-matter';

import ParticlesBackground from '../components/ParticlesBackground';
import TopNav from '../components/modules/TopNav';
import AllBlogs from '../components/modules/AllBlogs';

export async function GetStaticProps(){ 
  const fs = require('fs');
  const appRoot = require('app-root-path');  
  
  const files = fs.readdirSync(`${appRoot}/posts`);
  const posts = files.map((fileName) => {
    const readFiles = fs.readFileSync(`${appRoot}/posts/${fileName}`);
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
  console.log(posts);

  return (
    <div className='overflow-hidden text-white'>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='fixed z-[-1]'>
        <ParticlesBackground />
      </div>

      <TopNav />

      <AllBlogs blogPosts={posts}/>

    </div>

  )
}

export default Blog;