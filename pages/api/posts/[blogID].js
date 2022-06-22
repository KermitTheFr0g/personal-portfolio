export default function handler(req, res){
    if(req.method === 'GET'){
        const { blogID } = req.query;
        res.status(200).json({
            blogID: blogID,
            title: 'Dungeon Looters #0',
            content: 'This is the first blog post for dungeon looters and in this series are are going to discuss the development and my learning process along the way'
        })
    } else {
        res.status(400);
    }

    
}