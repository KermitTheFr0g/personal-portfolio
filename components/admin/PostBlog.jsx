import { useState, useEffect } from 'react';

import BlogInput from '../BlogInput';

function PostBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitBlog = async () => {
        const response = await fetch('/api/posts/newBlog', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content,
                date: '12/12/22'
            }),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        
        const data = await response.json();
        console.log(data);
    }


    return(
        <div className='m-auto text-center bg-profile-bg w-1/3 rounded-xl p-5 text-white'>
            <div>
                New Blog
            </div>
           <div>
               <BlogInput
                    inputName={'Title'}
                    stateValue={title}
                    changeState={setTitle}
               />
                <BlogInput
                    inputName={'Content'}
                    stateValue={content}
                    changeState={setContent}
               />
                <div>
                    <button onClick={submitBlog}>Submit Blog Post</button>
                </div>
           </div>
        </div>
    )
}

export default PostBlog;