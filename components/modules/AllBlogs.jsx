
function AllBlogs({ blogPosts }){
    return (
        <div className="flex flex-col justify-center m-auto">
            {
                blogPosts?.map((blog, i) => {
                    return (
                        <a className="w-9/12 p-2 m-auto" key={i} href={`/blog/${blog.slug}`}>
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