import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function WindowCleaningRobots() {
  const robots = [
    {
      name: "WINBOT X",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Navigation intelligente",
        "Batterie rechargeable",
        "Sécurité maximale",
        "Nettoyage profond"
      ],
      cons: [
        "Prix élevé",
        "Autonomie limitée",
        "Bruyant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YGXGX7N",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YGXGX7N",
      reviews: [
        {
          author: "Thomas L.",
          rating: 4,
          comment: "Efficace sur grandes surfaces vitrées.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Hobot 2S",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "AI Technology 4.0",
        "Ultra fin",
        "Télécommande",
        "Détection cadres"
      ],
      cons: [
        "Câble nécessaire",
        "Installation complexe",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B082VX6Q9N",
      cdiscountLink: "https://www.cdiscount.com/dp/B082VX6Q9N",
      reviews: [
        {
          author: "Marie R.",
          rating: 4,
          comment: "Bon robot, mais demande de la pratique.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Liectroux WS1080",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.3,
      pros: [
        "Prix abordable",
        "Double sécurité",
        "Facile à utiliser",
        "Compact"
      ],
      cons: [
        "Performances moyennes",
        "Batterie faible",
        "Bruit important"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09NMFJ7LP",
      cdiscountLink: "https://www.cdiscount.com/dp/B09NMFJ7LP",
      reviews: [
        {
          author: "Julie M.",
          rating: 4,
          comment: "Correct pour débuter, prix raisonnable.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son robot lave-vitres ?",
    introduction: "Le choix d'un robot lave-vitres dépend de plusieurs facteurs essentiels pour assurer un nettoyage efficace et sécurisé :",
    criteria: [
      {
        title: "La sécurité",
        description: "Un système de sécurité fiable (câble, ventouses, batterie de secours) est crucial pour éviter les accidents, surtout en hauteur."
      },
      {
        title: "La compatibilité",
        description: "Vérifiez l'épaisseur de verre compatible et les types de surfaces que le robot peut nettoyer (verre, miroir, carrelage...)."
      },
      {
        title: "L'autonomie",
        description: "La durée de fonctionnement doit être suffisante pour nettoyer vos surfaces. Un système filaire offre une utilisation continue."
      },
      {
        title: "La technologie de nettoyage",
        description: "Les différents modes de nettoyage, la puissance d'aspiration et le type de tampons influencent directement l'efficacité."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Robots Lave-vitres 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des robots pour nettoyer vos vitres automatiquement.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robots.map((robot, index) => (
          <ProductCard key={index} {...robot} />
        ))}
      </div>
    </div>
  );
}

export default WindowCleaningRobots;