import React from 'react'
import Image from 'next/image';

interface CardProps {
    mainText?: string;
    secondaryText?: string;
    sideText?: string;
}

const Card: React.FC<CardProps> = ({ mainText, secondaryText, sideText = "" }) => {
    return (
        <div className='bg-zinc-900/50 px-12 py-4 rounded-md flex flex-col min-h-fit min-w-fit shadow-lg gap-4 border-1 border-white/25'>
            <h1 className='font-bold text-2xl'>{mainText}</h1>
            <img className='rounded-md shadow-2xl drop-shadow-2xl' alt='example' src={"https://picsum.photos/350"} width={350} height={350} />
            <div className='h-fit w-fit flex flex-row'>
                <p className='text-secondary'>{secondaryText}</p>
            </div>
        </div>
    )
}

export default Card