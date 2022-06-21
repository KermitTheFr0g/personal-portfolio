import { useEffect } from 'react';

import WelcomeAdmin from '../../components/admin/WelcomeAdmin';

export async function getServerSideProps(){
    const user = true;

    if(!user){
        return{
            redirect: {
                destination: '/',
            }
        }
    } else {
        return{
            props: {
                authenticated: true,
                user: {
                    username: 'Kermit'
                }
            }
        }
    }

}


function Dashboard({ authenticated, user }){
    if(!authenticated){
        return(
            <>
                <h1>You are not authenticated</h1>
            </>
        )
    }

    return(
        <>
            <div className='m-auto'>
                <WelcomeAdmin username={user.username}/>
            </div>
        </>
    )
}

export default Dashboard;