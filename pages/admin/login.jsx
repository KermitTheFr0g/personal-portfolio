
export async function getServerSideProps(){
    const user = true;

    if(user){
        return{
            redirect: {
                destination: '/admin/dashboard',
            }
        }
    } else {
        return {
            props: {

            }
        }
    }
}

function Login(){

    
    return (
        <>
            <div className="m-auto text-center">Admin Login Page</div>
        </>
    )
}

export default Login;