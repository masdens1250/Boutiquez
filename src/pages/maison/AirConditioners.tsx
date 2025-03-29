import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function AirConditioners() {
  const conditioners = [
    {
      name: "De'Longhi PAC EL98",
      image: "https://images.unsplash.com/photo-1585089858717-f4378c2031d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "10000 BTU",
        "Silencieux",
        "Programmable",
        "Design moderne"
      ],
      cons: [
        "Prix élevé",
        "Encombrant",
        "Consommation importante"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07CZKXRDT",
      cdiscountLink: "https://www.cdiscount.com/dp/B07CZKXRDT",
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Très efficace, parfait pour l'été.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "AEG ChillFlex Pro",
      image: "https://images.unsplash.com/photo-1585089858717-f4378c2031d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "12000 BTU",
        "Mode déshumidification",
        "Télécommande",
        "Roulettes"
      ],
      cons: [
        "Bruit modéré",
        "Installation complexe",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWB7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWB7HP",
      reviews: [
        {
          author: "Sophie L.",
          rating: 4,
          comment: "Bon climatiseur, rafraîchit bien.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Trotec PAC 3550 Pro",
      image: "https://images.unsplash.com/photo-1585089858717-f4378c2031d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "14000 BTU",
        "3 vitesses",
        "Timer 24h",
        "Écran LED"
      ],
      cons: [
        "Volume sonore",
        "Lourd",
        "Consommation"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ",
      cdiscountLink: "https://www.cdiscount.com/dp/B07Q3FQPKJ",
      reviews: [
        {
          author: "Marc B.",
          rating: 4,
          comment: "Puissant mais un peu bruyant.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son climatiseur mobile ?",
    introduction: "Le choix d'un climatiseur mobile dépend de plusieurs facteurs essentiels pour assurer un rafraîchissement efficace :",
    criteria: [
      {
        title: "La puissance",
        description: "La puissance en BTU doit être adaptée à la surface à rafraîchir. Comptez environ 100 BTU par m² pour une efficacité optimale."
      },
      {
        title: "Le niveau sonore",
        description: "Le niveau sonore est crucial pour le confort, surtout la nuit. Privilégiez les modèles sous les 60 dB en fonctionnement normal."
      },
      {
        title: "L'efficacité énergétique",
        description: "La classe énergétique et le coefficient EER indiquent la consommation. Un bon ratio performance/consommation est important."
      },
      {
        title: "Les fonctionnalités",
        description: "Timer, télécommande, modes de fonctionnement variés... Ces options améliorent le confort d'utilisation quotidien."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Climatiseurs Mobiles 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des climatiseurs pour rafraîchir votre intérieur.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conditioners.map((conditioner, index) => (
          <ProductCard key={index} {...conditioner} />
        ))}
      </div>
    </div>
  );
}

export default AirConditioners;