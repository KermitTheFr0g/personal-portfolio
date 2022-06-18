import RecentPost from '../RecentPost';


function RecentPosts() {
    // here we need to pull the recent posts
    const recentPosts = [
        {
            id: 1,
            title: 'Recent Post 1',
            date: '2020-01-01',
            content: "this is kinda cute xxxx"
        },
        {
            id: 2,
            title: 'Recent Post 2',
            date: '2020-01-01',
            content: "this is kinda even more cute xxxx"
        }
    ]


    return (
        <>
            <div className='flex flex-col w-10/12 m-auto md:w-1/2 md:text-3xl md:pt-20'>Recent Blog Posts</div>
            <div className="flex flex-col w-10/12 m-auto md:w-1/2">
                {
                    recentPosts.map(post => (
                        <RecentPost key={post.id} title={post.title} date={post.date} content={post.content} />
                    ))
                }
            </div>
        </>
      
    )
}

export default RecentPosts;