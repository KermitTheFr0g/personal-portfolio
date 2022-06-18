import Link from 'next/link';

function NavButton({ name, link}) {
    return (
        <div className='m-3 hover:animate-shake'>
            <Link href={link}>
                <a className=' md:text-2xl lg:text-3xl'>{name}</a>
            </Link>
        </div>
    )
}

export default NavButton;