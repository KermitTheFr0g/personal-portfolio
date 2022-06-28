import { useState, useEffect } from 'react'; 

import Head from 'next/head'

import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import ParticlesBackground from '../../components/ParticlesBackground';
import TopNav from '../../components/modules/TopNav';
import AllBlogs from '../../components/modules/AllBlogs';
import Footer from '../../components/modules/Footer';

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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='overflow-hidden text-white'>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='fixed z-[-1]'>
        <ParticlesBackground />
      </div>

      <TopNav />


      <div className='flex flex-col justify-center'>
        <input 
          className="w-2/3 p-3 m-auto mt-10 lg:w-1/3 rounded-xl focus:outline-none bg-profile-bg"  
          type="text" 
          placeholder='Search'
          value={searchQuery}
          onChange={e => {setSearchQuery(e.target.value)}}
        />
        <button className='w-4/12 p-3 m-auto mt-3 lg:w-1/12 rounded-xl focus:outline-none bg-profile-bg'>Search</button>
      </div>


      <AllBlogs blogPosts={posts}/>

      <Footer />
    </div>

  )
}

export default Blog;