import React from 'react'
import Image from 'next/image';

interface CardProps {
    mainText?: string;
    secondaryText?: string;
    sideText?: string;
}

// Card.tsx
const Card: React.FC<CardProps> = ({ mainText, secondaryText, sideText = "" }) => {
    return (
      <div className="bg-zinc-900/50 p-6 rounded-lg flex flex-col justify-center items-center shadow-lg border border-white/25 w-full max-w-md mx-auto">
        <h1 className="font-bold text-2xl mb-4 text-center">{mainText}</h1>
        <Image
          className="rounded-md shadow-xl"
          alt="example"
          src={"https://picsum.photos/350"}
          width={350}
          height={350}
        />
        <p className="text-secondary mt-4 text-center">{secondaryText}</p>
      </div>
    );
  };
  

export default Card