import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function StickVacuums() {
  const vacuums = [
    {
      name: "Dyson V15 Detect Absolute",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Détection laser poussière",
        "Autonomie 60 minutes",
        "Puissance exceptionnelle",
        "Filtration HEPA"
      ],
      cons: [
        "Prix très élevé",
        "Bac petit",
        "Batterie non amovible"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV",
      cdiscountLink: "https://www.cdiscount.com/dp/B08YRGV8DV",
      reviews: [
        {
          author: "Thomas R.",
          rating: 5,
          comment: "Le meilleur aspirateur balai, technologie impressionnante.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Samsung Bespoke Jet AI",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Station auto-vidange",
        "IA adaptative",
        "Double batterie",
        "Écran LCD"
      ],
      cons: [
        "Prix élevé",
        "Station volumineuse",
        "Poids important"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS",
      cdiscountLink: "https://www.cdiscount.com/dp/B09Q5BNVDS",
      reviews: [
        {
          author: "Marie L.",
          rating: 4,
          comment: "Excellent aspirateur, la station est très pratique.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Rowenta X-Force Flex 14.60",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Flexibilité 180°",
        "Autonomie 45 min",
        "Éclairage LED",
        "Bon rapport qualité/prix"
      ],
      cons: [
        "Bruit important",
        "Batterie longue à charger",
        "Bac moyen"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08KWL1ZQ",
      cdiscountLink: "https://www.cdiscount.com/dp/B08KWL1ZQ",
      reviews: [
        {
          author: "Julie B.",
          rating: 4,
          comment: "Très pratique et maniable, bonne puissance.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son aspirateur balai ?",
    introduction: "Le choix d'un aspirateur balai est crucial pour un nettoyage efficace et pratique. Voici les critères essentiels à considérer :",
    criteria: [
      {
        title: "L'autonomie",
        description: "Une bonne autonomie (minimum 30 minutes) est essentielle pour nettoyer efficacement sans interruption. Certains modèles proposent des batteries amovibles."
      },
      {
        title: "La puissance d'aspiration",
        description: "La puissance doit être suffisante pour tous types de sols. Les technologies cycloniques offrent généralement les meilleures performances."
      },
      {
        title: "La filtration",
        description: "Un système de filtration HEPA est recommandé pour retenir les allergènes. La qualité de la filtration est cruciale pour la qualité de l'air."
      },
      {
        title: "L'ergonomie",
        description: "Le poids, la maniabilité et la facilité de vidange du bac sont des critères importants pour un usage quotidien confortable."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Aspirateurs Balais 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des aspirateurs balais sans fil pour un nettoyage efficace.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vacuums.map((vacuum, index) => (
          <ProductCard key={index} {...vacuum} />
        ))}
      </div>
    </div>
  );
}

export default StickVacuums;