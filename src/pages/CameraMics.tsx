import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function CameraMics() {
  const mics = [
    {
      name: "Rode VideoMic Pro+",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Qualité audio professionnelle",
        "Filtres intégrés",
        "Batterie rechargeable",
        "Construction robuste"
      ],
      cons: [
        "Prix élevé",
        "Taille imposante",
        "Nécessite une alimentation"
      ],
      amazonLink: "https://www.amazon.fr/dp/B072MBGJ8K",
      cdiscountLink: "https://www.cdiscount.com/dp/B072MBGJ8K",
      reviews: [
        {
          author: "Thomas V.",
          rating: 5,
          comment: "La référence pour la vidéo. Son exceptionnel.",
          date: "13/03/2024"
        }
      ]
    },
    {
      name: "Rode VideoMicro",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Compact et léger",
        "Bon rapport qualité/prix",
        "Pas de batterie nécessaire",
        "Bonnette incluse"
      ],
      cons: [
        "Moins performant que le Pro+",
        "Pas de filtres",
        "Sensible au vent"
      ],
      amazonLink: "https://www.amazon.fr/dp/B015R0IQGW",
      cdiscountLink: "https://www.cdiscount.com/dp/B015R0IQGW",
      reviews: [
        {
          author: "Julie M.",
          rating: 4,
          comment: "Parfait pour débuter. Qualité surprenante pour la taille.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Shure VP83F",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Enregistrement intégré",
        "Écran LCD",
        "Qualité Shure",
        "Batterie longue durée"
      ],
      cons: [
        "Prix très élevé",
        "Complexe à utiliser",
        "Lourd"
      ],
      amazonLink: "https://www.amazon.fr/dp/B00DY1F2CS",
      cdiscountLink: "https://www.cdiscount.com/dp/B00DY1F2CS",
      reviews: [
        {
          author: "Marc B.",
          rating: 5,
          comment: "Un micro professionnel avec des fonctionnalités avancées.",
          date: "08/03/2024"
        }
      ]
    },
    {
      name: "Sennheiser MKE 400",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Design compact",
        "Qualité audio Sennheiser",
        "Monitoring intégré",
        "Contrôles pratiques"
      ],
      cons: [
        "Prix élevé",
        "Nécessite des piles",
        "Pas de bonnette incluse"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08XYDR3G5",
      cdiscountLink: "https://www.cdiscount.com/dp/B08XYDR3G5",
      reviews: [
        {
          author: "Sophie R.",
          rating: 4,
          comment: "Excellent micro, parfait pour le vlog.",
          date: "05/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son micro pour caméra ?",
    introduction: "Le choix d'un microphone pour caméra est crucial pour la qualité audio de vos vidéos. Voici les critères essentiels à considérer :",
    criteria: [
      {
        title: "La directivité",
        description: "Le type de captation (cardioïde, supercardioïde) détermine la zone de captation du son. Un micro directionnel est idéal pour isoler le sujet des bruits environnants."
      },
      {
        title: "L'alimentation",
        description: "Certains micros nécessitent des piles, d'autres fonctionnent avec l'alimentation de la caméra. Évaluez l'autonomie et la praticité selon votre usage."
      },
      {
        title: "La protection contre le vent",
        description: "Une bonnette anti-vent efficace est essentielle pour les prises de son en extérieur. Vérifiez si elle est incluse ou à acheter séparément."
      },
      {
        title: "La connectivité",
        description: "Vérifiez la compatibilité avec votre caméra (type de connecteur, alimentation phantom) et la présence de fonctionnalités comme le monitoring."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Micros pour Caméra 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des microphones pour améliorer la qualité audio de vos vidéos.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mics.map((mic, index) => (
          <ProductCard key={index} {...mic} />
        ))}
      </div>
    </div>
  );
}

export default CameraMics;