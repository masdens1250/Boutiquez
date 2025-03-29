import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function Refrigerators() {
  const fridges = [
    {
      name: "Samsung RF65A967ESR",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Family Hub connecté",
        "649L de capacité",
        "Triple froid",
        "Distributeur eau/glace"
      ],
      cons: [
        "Prix très élevé",
        "Dimensions imposantes",
        "Consommation importante"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV",
      cdiscountLink: "https://www.cdiscount.com/dp/B08YRGV8DV",
      reviews: [
        {
          author: "Thomas R.",
          rating: 5,
          comment: "Un frigo révolutionnaire, technologie impressionnante.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "LG GBB92STAXP",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Door-in-Door",
        "384L de capacité",
        "Linear Cooling",
        "A+++ économique"
      ],
      cons: [
        "Prix élevé",
        "Pas de distributeur",
        "Bruit léger"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS",
      cdiscountLink: "https://www.cdiscount.com/dp/B09Q5BNVDS",
      reviews: [
        {
          author: "Marie L.",
          rating: 4,
          comment: "Excellent frigo, très économe en énergie.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Bosch KGN39VWEA",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "NoFrost",
        "366L de capacité",
        "VitaFresh",
        "Bon rapport qualité/prix"
      ],
      cons: [
        "Design basique",
        "Pas connecté",
        "Clayettes plastique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08KWL1ZQ",
      cdiscountLink: "https://www.cdiscount.com/dp/B08KWL1ZQ",
      reviews: [
        {
          author: "Julie B.",
          rating: 4,
          comment: "Fiable et efficace, bon choix familial.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son réfrigérateur ?",
    introduction: "Le choix d'un réfrigérateur est un investissement important qui impacte votre quotidien. Voici les critères essentiels à considérer :",
    criteria: [
      {
        title: "La capacité",
        description: "Le volume doit être adapté à la taille du foyer : comptez environ 100L par personne, plus une marge pour les invités et les occasions spéciales."
      },
      {
        title: "La classe énergétique",
        description: "Privilégiez les modèles A++ minimum pour maîtriser votre consommation électrique. L'investissement initial plus élevé est rentabilisé sur la durée."
      },
      {
        title: "Le système de froid",
        description: "Le froid ventilé (No Frost) évite le givrage et maintient une température homogène. Le multi-portes offre une meilleure organisation."
      },
      {
        title: "Les fonctionnalités",
        description: "Distributeur d'eau, fabrique de glaçons, zones à température variable... Choisissez selon vos besoins et habitudes alimentaires."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Réfrigérateurs 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des réfrigérateurs pour conserver vos aliments.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fridges.map((fridge, index) => (
          <ProductCard key={index} {...fridge} />
        ))}
      </div>
    </div>
  );
}

export default Refrigerators;