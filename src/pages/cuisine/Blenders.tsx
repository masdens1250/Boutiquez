import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function Blenders() {
  const blenders = [
    {
      name: "Vitamix A2500i Ascent",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      pros: [
        "Puissance 2.2 chevaux",
        "10 vitesses variables",
        "Programmes automatiques",
        "Garantie 10 ans"
      ],
      cons: [
        "Prix très élevé",
        "Bruyant",
        "Encombrant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B01N6BTLMM",
      cdiscountLink: "https://www.cdiscount.com/dp/B01N6BTLMM",
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "La Rolls des blenders. Qualité exceptionnelle.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Ninja Foodi HB150EU",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Technologie Auto-iQ",
        "Lames pro extracteur",
        "Multifonction",
        "Facile à nettoyer"
      ],
      cons: [
        "Prix élevé",
        "Volume sonore",
        "Gobelet plastique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08HLMQ6Z7",
      cdiscountLink: "https://www.cdiscount.com/dp/B08HLMQ6Z7",
      reviews: [
        {
          author: "Sophie L.",
          rating: 4,
          comment: "Excellent rapport qualité/prix, très polyvalent.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Magimix Power Blender",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "1300W puissant",
        "Bol en verre 1.8L",
        "4 programmes auto",
        "Fabrication française"
      ],
      cons: [
        "Peu d'accessoires",
        "Nettoyage délicat",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWBX7HP",
      reviews: [
        {
          author: "Marie B.",
          rating: 4,
          comment: "Solide et efficace, parfait pour les smoothies.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son blender ?",
    introduction: "Le choix d'un blender dépend de votre utilisation et de vos besoins spécifiques. Voici les points essentiels à considérer :",
    criteria: [
      {
        title: "La puissance",
        description: "Une puissance élevée (minimum 800W) est nécessaire pour mixer efficacement les ingrédients durs et obtenir une texture lisse."
      },
      {
        title: "La capacité",
        description: "Le volume du bol doit correspondre à vos besoins : 1.5L minimum pour une famille, plus petit pour une utilisation individuelle."
      },
      {
        title: "Les matériaux",
        description: "Privilégiez un bol en verre ou en Tritan pour la durabilité. Les lames en acier inoxydable sont indispensables pour une longue durée de vie."
      },
      {
        title: "Les fonctionnalités",
        description: "Programmes automatiques, variateur de vitesse, fonction pulse... Choisissez selon vos besoins en matière de contrôle et de facilité d'utilisation."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Blenders 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des blenders pour vos préparations culinaires.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blenders.map((blender, index) => (
          <ProductCard key={index} {...blender} />
        ))}
      </div>
    </div>
  );
}

export default Blenders;