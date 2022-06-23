import Image from 'next/image';

function MyStats(){
    return(
        <div className="flex flex-row justify-center p-5 m-auto">
            <a href="https://wakatime.com/@0810df92-47c7-4e75-8fa7-dc9bf23b12b5"><img src="https://wakatime.com/badge/user/0810df92-47c7-4e75-8fa7-dc9bf23b12b5.svg" alt="Total time coded since Nov 8 2020" /></a>
        </div>
    )
}

export default MyStats;