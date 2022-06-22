export default function handler(req, res){
    if(req.method === 'GET'){
        const { blogID } = req.query;
        res.status(200).json({
            blogID: blogID,
            title: 'Hot blog',
            content: 'The blog content'
        })
    } else {
        res.status(400);
    }

    
}