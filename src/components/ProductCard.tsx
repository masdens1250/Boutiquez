import React, { useState } from 'react';
import { Star, Check, X, MessageCircle, Shield, ThumbsUp, Users, Trophy } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  pros: string[];
  cons: string[];
  amazonLink: string;
  reviews: Review[];
}

function ProductCard({ 
  name, 
  image, 
  rating,
  pros, 
  cons, 
  amazonLink,
  reviews 
}: ProductCardProps) {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {rating >= 4.5 && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            Choix Expert
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800">
          {name}
        </h3>

        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
          <button 
            onClick={() => setShowReviews(!showReviews)}
            className="ml-auto flex items-center text-blue-600 hover:text-blue-700"
          >
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{reviews.length} avis clients</span>
          </button>
        </div>

        {showReviews && (
          <div className="mb-6 space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Avis des utilisateurs
            </h4>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{review.author}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-green-600 mb-2 text-sm flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Points Forts
            </h4>
            <ul className="space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-1" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-red-600 mb-2 text-sm flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Points à Considérer
            </h4>
            <ul className="space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="flex items-center text-sm">
                  <X className="w-4 h-4 text-red-500 mr-1" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center">
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
    </div>
  );
}

export default ProductCard;