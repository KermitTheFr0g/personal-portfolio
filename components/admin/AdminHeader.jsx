import WelcomeAdmin from "./WelcomeAdmin";

function AdminHeader({ user }){
    return(
        <>
            <div>
                <div className="m-auto text-center text-4xl mt-7">Admin Dashboard</div>
                <WelcomeAdmin username={user.username}/>
            </div>
        </>
    )
}

export default AdminHeader;