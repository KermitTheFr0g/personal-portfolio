import Image from 'next/image';

function SocialButton({ name, image, link}){
    return (
        <a href={link} className='p-1' target='_blank' rel='noreferrer'>
            <Image  src={image} alt={name} width={50} height={50}/>
        </a>
    )
}

export default SocialButton;