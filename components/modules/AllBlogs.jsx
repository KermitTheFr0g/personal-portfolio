
function AllBlogs({ blogPosts }){
    return (
        <div className="flex justify-center m-auto">
            {
                blogPosts?.map((blog, i) => {
                    return (
                        <a className="p-2" key={i} href={`/blog/`}>
                            <div>{blog.title}</div>
                            <div>{blog.description}</div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default AllBlogs;