import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function hander(req, res){
    if(req.method === 'GET'){
        const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
        
        // need to order these files into date released
        const recentFiles = files.slice(0, 4);
        const posts = recentFiles.map((fileName) => {
            const readFile = fs.readFileSync(path.join(process.cwd(), 'posts', `${fileName}`));
            const { data: frontMatter } = matter(readFile);

            return frontMatter
        })

        console.log(posts);

        res.status(200).json({
            recentPosts: posts
        })
    } else {
        res.status(400);
    }
}