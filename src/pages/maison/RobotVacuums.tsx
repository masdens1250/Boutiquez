import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function RobotVacuums() {
  const robots = [
    {
      name: "Roborock S8 Pro Ultra",
      image: "https://images.unsplash.com/photo-1589006008224-46c3c4547d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      pros: [
        "Station tout-en-un",
        "Navigation LiDAR",
        "Aspiration 6000Pa",
        "Lavage vibrant"
      ],
      cons: [
        "Prix très élevé",
        "Station volumineuse",
        "Entretien régulier"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0BVZN8L5N",
      cdiscountLink: "https://www.cdiscount.com/dp/B0BVZN8L5N",
      reviews: [
        {
          author: "Pierre L.",
          rating: 5,
          comment: "Robot impressionnant, autonomie totale.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "iRobot Roomba Combo j9+",
      image: "https://images.unsplash.com/photo-1589006008224-46c3c4547d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "IA avancée",
        "Auto-vidange",
        "Évitement obstacles",
        "App intuitive"
      ],
      cons: [
        "Prix élevé",
        "Bruit vidange",
        "Cartographie lente"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0C7GK6XKL",
      cdiscountLink: "https://www.cdiscount.com/dp/B0C7GK6XKL",
      reviews: [
        {
          author: "Sophie M.",
          rating: 4,
          comment: "Excellent robot, très intelligent.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Dreame L10s Ultra",
      image: "https://images.unsplash.com/photo-1589006008224-46c3c4547d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Station complète",
        "Prix compétitif",
        "Bonne aspiration",
        "Lavage efficace"
      ],
      cons: [
        "App perfectible",
        "Consommables chers",
        "Bruit modéré"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0B5TXNXV8",
      cdiscountLink: "https://www.cdiscount.com/dp/B0B5TXNXV8",
      reviews: [
        {
          author: "Marc B.",
          rating: 4,
          comment: "Très bon rapport qualité/prix.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son aspirateur robot ?",
    introduction: "Le choix d'un aspirateur robot nécessite de prendre en compte plusieurs critères pour assurer un nettoyage efficace et autonome :",
    criteria: [
      {
        title: "La navigation",
        description: "Un système de navigation avancé (LiDAR, caméras) est essentiel pour une couverture complète et efficace de votre intérieur."
      },
      {
        title: "L'autonomie",
        description: "La capacité de la batterie doit permettre de couvrir votre surface. La recharge et reprise automatique est un plus indispensable."
      },
      {
        title: "Les fonctionnalités",
        description: "Station d'auto-vidange, lavage, reconnaissance d'obstacles... Choisissez selon vos besoins et votre budget."
      },
      {
        title: "La connectivité",
        description: "Une application intuitive et des fonctionnalités connectées (zones interdites, programmation) améliorent l'expérience d'utilisation."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Aspirateurs Robots 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des robots aspirateurs pour un nettoyage automatisé.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robots.map((robot, index) => (
          <ProductCard key={index} {...robot} />
        ))}
      </div>
    </div>
  );
}

export default RobotVacuums;