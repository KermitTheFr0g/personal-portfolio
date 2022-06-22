
function BlogContent({ title, content, date, loading }){
    if(loading){
        return(
            <div className="m-auto text-center text-3xl">
                Loading...
            </div>
        )
    }

    if(!content){
        return(
            <div>
                Blog content not found...
            </div>
        )
    }


    return(
        <div className="m-auto text-white md:w-11/12 md:bg-profile-bg md:mt-10 rounded-xl">
            <div className="text-3xl text-center p-10">{title}</div>
            <div className="text-l p-5">{content}</div>
            <div>{date}</div>
        </div>
    )
}

export default BlogContent;