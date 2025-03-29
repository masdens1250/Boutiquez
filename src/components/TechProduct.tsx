import React from 'react';

interface TechProductProps {
  name: string;
  image: string;
  amazonLink: string;
}

function TechProduct({ name, image, amazonLink }: TechProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4 text-gray-800">
          {name}
        </h3>
        <a
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#232F3E] text-white py-2 px-4 rounded-md hover:bg-[#232F3E]/90 transition-colors w-full"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon" 
            className="h-5 brightness-0 invert mr-2"
          />
          Afficher le prix
        </a>
      </div>
    </div>
  );
}

export default TechProduct;