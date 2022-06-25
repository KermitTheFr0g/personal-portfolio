

function AllBlogs({ blogPosts }){
    return (
        <>
            {
                blogPosts?.map((blog, i) => {
                    return (
                        <div key={i}>
                            {blog.frontMatter.title}
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllBlogs;