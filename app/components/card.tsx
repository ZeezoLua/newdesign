import React from 'react'
import Image from 'next/image';

interface CardProps {
    mainText?: string;
    secondaryText?: string;
    sideText?: string;
}

const Card: React.FC<CardProps> = ({ mainText, secondaryText, sideText = "" }) => {
    return (
        <div className='bg-zinc-900/50 px-12 py-4 rounded-md flex flex-col justify-center items-center min-h-fit w-lg shadow-lg gap-4 border-1 border-white/25 flex-wrap'>
            <h1 className='font-bold text-2xl'>{mainText}</h1>
            <Image className='rounded-md shadow-2xl drop-shadow-2xl' alt='example' src={"https://picsum.photos/350"} width={350} height={350} />
            <div className='h-fit w-fit flex flex-row'>
                <p className='text-secondary text-wrap'>{secondaryText}</p>
            </div>
        </div>
    )
}

export default Card