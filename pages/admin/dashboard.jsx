import { useEffect } from 'react';
import Head from 'next/head';

import AdminHeader from '../../components/admin/AdminHeader';
import PostBlog from '../../components/admin/PostBlog';

export async function getServerSideProps({ req, res }){
    
    const user = false;

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
                    username: 'kermit',

                }
            }
        }
    }

}


function Dashboard({ authenticated, user,  }){
    if(!authenticated){
        return(
            <>
                <h1>You are not authenticated</h1>
            </>
        )
    }

    return(
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>

            <AdminHeader user={user}/>

            <PostBlog />
        </>
    )
}

export default Dashboard;