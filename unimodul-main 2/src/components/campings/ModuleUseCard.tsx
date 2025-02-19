import React from 'react';

interface ModuleUseCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ModuleUseCard = ({ title, description, image, index }: ModuleUseCardProps) => {
  return (
    <div 
      className="animate-on-scroll bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ModuleUseCard;