import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function GamingHeadsets() {
  const headsets = [
    {
      name: "SteelSeries Arctis Pro",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Qualité audio Hi-Res",
        "Micro ClearCast excellent",
        "Construction premium",
        "DAC GameDAC inclus"
      ],
      cons: [
        "Prix très élevé",
        "Câble non détachable",
        "Serre-tête peut être inconfortable"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07GFCRRQY",
      cdiscountLink: "https://www.cdiscount.com/dp/B07GFCRRQY",
      reviews: [
        {
          author: "David M.",
          rating: 5,
          comment: "La qualité audio est exceptionnelle. Le meilleur casque que j'ai eu.",
          date: "12/03/2024"
        },
        {
          author: "Sarah L.",
          rating: 4,
          comment: "Son incroyable mais le confort pourrait être amélioré sur les longues sessions.",
          date: "08/03/2024"
        }
      ]
    },
    {
      name: "HyperX Cloud Alpha",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Excellent rapport qualité-prix",
        "Son immersif",
        "Confortable",
        "Construction durable"
      ],
      cons: [
        "Pas de son surround",
        "Personnalisation limitée",
        "Câble non détachable"
      ],
      amazonLink: "https://www.amazon.fr/dp/B076GT6XJ9",
      cdiscountLink: "https://www.cdiscount.com/dp/B076GT6XJ9",
      reviews: [
        {
          author: "Paul R.",
          rating: 5,
          comment: "Rapport qualité/prix imbattable. Très confortable.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Logitech G Pro X",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Micro Blue Voice",
        "Son DTS Headphone:X 2.0",
        "Design professionnel",
        "Confortable"
      ],
      cons: [
        "Software complexe",
        "Bass un peu faibles",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07TGNQQCM",
      cdiscountLink: "https://www.cdiscount.com/dp/B07TGNQQCM",
      reviews: [
        {
          author: "Claire D.",
          rating: 4,
          comment: "Excellent micro, parfait pour le streaming.",
          date: "05/03/2024"
        }
      ]
    },
    {
      name: "Razer BlackShark V2 Pro",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Son THX Spatial Audio",
        "Micro super-cardioïde",
        "Ultra léger",
        "Excellente autonomie"
      ],
      cons: [
        "Prix élevé",
        "Qualité micro moyenne en sans fil",
        "Plastique peut sembler fragile"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08FH7YG9D",
      cdiscountLink: "https://www.cdiscount.com/dp/B08FH7YG9D",
      reviews: [
        {
          author: "Antoine B.",
          rating: 5,
          comment: "Le son spatial est bluffant pour les FPS.",
          date: "02/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son casque gaming ?",
    introduction: "Le choix d'un casque gaming est crucial pour une expérience de jeu immersive. Voici les critères essentiels à prendre en compte :",
    criteria: [
      {
        title: "La qualité audio",
        description: "Recherchez un casque offrant un son clair et équilibré, avec une bonne séparation des fréquences. Le son surround virtuel peut améliorer l'immersion et la perception spatiale."
      },
      {
        title: "Le confort",
        description: "Pour les longues sessions de jeu, privilégiez un casque léger avec des coussinets respirants et un serre-tête ajustable. Le confort est aussi important que la qualité sonore."
      },
      {
        title: "Le microphone",
        description: "Un bon micro est essentiel pour la communication en équipe. Cherchez un micro avec réduction de bruit et une qualité vocale claire."
      },
      {
        title: "La connectivité",
        description: "Choisissez entre filaire (latence minimale) ou sans fil (liberté de mouvement). Les versions sans fil modernes offrent une excellente autonomie et une faible latence."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Casques Gaming 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des casques gaming les plus performants pour une immersion totale dans vos jeux.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {headsets.map((headset, index) => (
          <ProductCard key={index} {...headset} />
        ))}
      </div>
    </div>
  );
}

export default GamingHeadsets;