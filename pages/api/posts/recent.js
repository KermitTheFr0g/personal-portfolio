export default function hander(req, res){
    if(req.method === 'GET'){
        res.status(200).json({
            recentPosts: [
                {
                    id: 1,
                    title: 'test post 1',
                    date: '2020-01-01',
                    content: "this is kinda cute xxxx"
                },
                {
                    id: 2,
                    title: 'test Post 2',
                    date: '2020-01-01',
                    content: "this is kinda even more cute xxxx"
                },
                {
                    id: 3,
                    title: 'test Post 3',
                    date: '2020-01-01',
                    content: "this is kinda cute xxxx"
                },
                {
                    id: 4,
                    title: 'test Post 4',
                    date: '2020-01-01',
                    content: "this is kinda even more cute xxxx"
                }
            ]
        })
    } else {
        res.status(400);
    }
}