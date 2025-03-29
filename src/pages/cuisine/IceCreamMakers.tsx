import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function IceCreamMakers() {
  const makers = [
    {
      name: "Magimix Gelato Expert",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Système pro de refroidissement",
        "3 programmes automatiques",
        "Grande capacité 2L",
        "Cuve amovible"
      ],
      cons: [
        "Prix très élevé",
        "Volumineuse",
        "Bruyante"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YPC3BQC",
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Qualité professionnelle, résultats exceptionnels.",
          date: "14/03/2024"
        }
      ]
    },
    {
      name: "Cuisinart ICE30BCE",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Cuve réfrigérante double paroi",
        "Capacité 2L",
        "Simple d'utilisation",
        "Robuste"
      ],
      cons: [
        "Pré-congélation nécessaire",
        "Un seul programme",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Pierre M.",
          rating: 4,
          comment: "Excellent rapport qualité/prix, facile à utiliser.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Severin EZ 7406",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.3,
      pros: [
        "Compacte",
        "Prix abordable",
        "Facile à nettoyer",
        "Silencieuse"
      ],
      cons: [
        "Petite capacité",
        "Cuve à pré-congeler",
        "Basique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09NMFJ7LP",
      cdiscountLink: "https://www.cdiscount.com/dp/B09NMFJ7LP",
      reviews: [
        {
          author: "Julie M.",
          rating: 4,
          comment: "Parfaite pour débuter, prix raisonnable.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa sorbetière ?",
    introduction: "Le choix d'une sorbetière dépend de plusieurs facteurs essentiels qui influenceront directement la qualité de vos glaces et sorbets :",
    criteria: [
      {
        title: "Le système de refroidissement",
        description: "Il existe deux types principaux : les modèles avec système de refroidissement intégré (plus chers mais plus pratiques) et ceux nécessitant une pré-congélation de la cuve (plus abordables)."
      },
      {
        title: "La capacité",
        description: "La capacité détermine la quantité de glace que vous pourrez préparer en une fois. Une capacité de 1,5L à 2L est idéale pour une famille."
      },
      {
        title: "La puissance",
        description: "Une puissance suffisante garantit un bon brassage et une congélation homogène. Recherchez au moins 150W pour des résultats optimaux."
      },
      {
        title: "Les fonctionnalités",
        description: "Les programmes automatiques, le timer, et la possibilité d'ajouter des ingrédients en cours de préparation sont des options pratiques à considérer."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Sorbetières 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des sorbetières pour préparer vos glaces maison.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {makers.map((maker, index) => (
          <ProductCard key={index} {...maker} />
        ))}
      </div>
    </div>
  );
}

export default IceCreamMakers;