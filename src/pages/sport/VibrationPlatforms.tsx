import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function VibrationPlatforms() {
  const platforms = [
    {
      name: "Sportstech VP400",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "99 niveaux de vitesse",
        "5 programmes automatiques",
        "Surface XL antidérapante",
        "Télécommande incluse"
      ],
      cons: [
        "Prix élevé",
        "Assez volumineuse",
        "Bruit à haute intensité"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07SQFVD3Q",
      cdiscountLink: "https://www.cdiscount.com/dp/B07SQFVD3Q",
      reviews: [
        {
          author: "Marie L.",
          rating: 5,
          comment: "Excellente plateforme, très efficace pour la récupération musculaire.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Bluefin Fitness Pro",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "180 niveaux d'intensité",
        "Bluetooth et haut-parleurs",
        "Design compact",
        "Application fitness gratuite"
      ],
      cons: [
        "Instructions limitées",
        "Application basique",
        "Stabilité moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07JKWPX4N",
      cdiscountLink: "https://www.cdiscount.com/dp/B07JKWPX4N",
      reviews: [
        {
          author: "Thomas R.",
          rating: 4,
          comment: "Bon rapport qualité/prix, parfait pour débuter.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Fitfiu PV200",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.3,
      pros: [
        "Compact et silencieux",
        "10 programmes préréglés",
        "Facile à utiliser",
        "Prix abordable"
      ],
      cons: [
        "Puissance limitée",
        "Pas de connectivité",
        "Options basiques"
      ],
      amazonLink: "https://www.amazon.fr/dp/B082VWXH6Q",
      cdiscountLink: "https://www.cdiscount.com/dp/B082VWXH6Q",
      reviews: [
        {
          author: "Julie M.",
          rating: 4,
          comment: "Parfait pour un usage occasionnel à la maison.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa plateforme vibrante ?",
    introduction: "Une plateforme vibrante peut être un excellent outil de fitness et de récupération. Voici les critères essentiels pour faire le bon choix :",
    criteria: [
      {
        title: "La puissance et les niveaux de vibration",
        description: "Recherchez une machine offrant différents niveaux d'intensité pour adapter l'entraînement à vos besoins et votre progression."
      },
      {
        title: "La surface et la stabilité",
        description: "Une surface antidérapante et une base stable sont essentielles pour la sécurité. La taille de la plateforme doit correspondre à votre utilisation."
      },
      {
        title: "Les programmes préréglés",
        description: "Des programmes automatiques variés permettent de diversifier les séances et de cibler différents objectifs (tonification, massage, récupération)."
      },
      {
        title: "Le niveau sonore",
        description: "Privilégiez les modèles silencieux, surtout si vous comptez l'utiliser dans un appartement ou à des heures sensibles."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Plateformes Vibrantes 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des plateformes vibrantes pour votre remise en forme.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform, index) => (
          <ProductCard key={index} {...platform} />
        ))}
      </div>
    </div>
  );
}

export default VibrationPlatforms;