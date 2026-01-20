import React from 'react';

interface CardProps {
  name:string;
  title:string; 
  imageUrl:string;
}

const Card: React.FC<CardProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex flex-col items-center text-center w-64">
      <img
        src={imageUrl || 'https://via.placeholder.com/100'}
        alt="Person"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default Card;
