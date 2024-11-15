import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className='flex flex-col gap-2 z-10 p-4 rounded-xl card'>
      <img 
        src={image} 
        alt={title} 
        className='h-72 object-cover rounded-2xl' 
      />
      <h1 className='text-2xl font-bold text-white'>{title}</h1>
      <p className='text-gray-400'>{description}</p>
    </div>
  );
};

export default Card;
