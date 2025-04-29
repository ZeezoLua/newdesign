import React from 'react'

interface CardProps {
    mainText?: string;
    secondaryText?: string;
}

const Card: React.FC<CardProps> = ({ mainText, secondaryText = "" }) => {
    return (
        <div className='bg-zinc-900 px-12 py-4 rounded-md'>
            <h1 className='font-bold text-2xl'>{mainText}</h1>
            <p className='text-[#929292]'>{secondaryText}</p>
        </div>
    )
}

export default Card