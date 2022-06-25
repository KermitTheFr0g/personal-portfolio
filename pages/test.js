const matter = require('gray-matter');
const fs = require('fs');
const appRoot = require('app-root-path');  

const files = fs.readdirSync(`${appRoot}/posts`);
const posts = files.map((fileName) => {
  const readFiles = fs.readFileSync(`${appRoot}/posts/${fileName}`);
  const { data: blogData } = matter(readFiles);

  return blogData;
})

console.log(posts);