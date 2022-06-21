import { useEffect } from 'react';
import Head from 'next/head';

import AdminHeader from '../../components/admin/AdminHeader';

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
            <Head>
                <title>Admin Dashboard</title>
            </Head>

            <AdminHeader user={user}/>

        </>
    )
}

export default Dashboard;