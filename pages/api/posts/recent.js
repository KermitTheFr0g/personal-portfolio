export default function hander(req, res){
    if(req.method === 'GET'){
        res.status(200).json({
            recentPosts: [
                {
                    id: 1,
                    title: 'test post 1',
                    date: '2020-01-01',
                    content: "test blog 1 content"
                },
                {
                    id: 2,
                    title: 'test Post 2',
                    date: '2020-01-01',
                    content: "test blog 2 content"
                },
                {
                    id: 3,
                    title: 'test Post 3',
                    date: '2020-01-01',
                    content: "test blog 3 content"
                },
                {
                    id: 4,
                    title: 'test Post 4',
                    date: '2020-01-01',
                    content: "test blog 4 content"
                }
            ]
        })
    } else {
        res.status(400);
    }
}