import { useEffect } from 'react';

function WelcomeAdmin({ username }){
    let morning;
    
    useEffect(() => {
        let hr = new Date().getHours();
        if(hr < 12){
            morning = true;
        }
    }, [])
    
    return (
        <>
            {
                morning ? 
                <div className='text-center'>Good Morning {username}, Welcome admin dashboard</div> 
                : 
                <div className='text-center'>Good evening {username}, Welcome admin dashboard</div>
            }
        </>
    )
}

export default WelcomeAdmin;