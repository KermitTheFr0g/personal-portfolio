import { useState, useEffect } from 'react';

function WelcomeAdmin({ username }){
    // finding the time of day to return back to the user
    const [tod, setTod] = useState();
    
    useEffect(() => {
        let hr = new Date().getHours();
        if(hr < 12){
            setTod('morning')
        } else if(hr > 17){
            setTod('evening')
        } else {
            setTod('afternoon')
        }
    }, [])
    
    switch(tod){
        case 'morning':
            return (
                <div className='text-center'>Good Morning {username}</div> 
            )
        
        case 'afternoon':
            return(
                <div className='text-center'>Good Afternoon {username}</div> 
            )

        case 'evening':
            return(
                <div className='text-center'>Good Evening {username}</div> 
            )
    }
}

export default WelcomeAdmin;