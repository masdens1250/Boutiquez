import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function AudioHeadphones() {
  const headphones = [
    {
      name: "Sony WH-1000XM5",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Qualité audio exceptionnelle",
        "Réduction de bruit leader",
        "Confort optimal",
        "30h d'autonomie"
      ],
      cons: [
        "Prix élevé",
        "Non pliable comme le XM4",
        "Pas d'appairage multipoint"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09Y2MBWCT",
      cdiscountLink: "https://www.cdiscount.com/dp/B09Y2MBWCT",
      reviews: [
        {
          author: "Laurent M.",
          rating: 5,
          comment: "La réduction de bruit est bluffante. Parfait pour les voyages.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Bose QuietComfort 45",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Confort légendaire",
        "Excellente réduction de bruit",
        "Design pliable",
        "24h d'autonomie"
      ],
      cons: [
        "Pas d'égaliseur par défaut",
        "Prix élevé",
        "Moins de fonctionnalités que Sony"
      ],
      amazonLink: "https://www.amazon.fr/dp/B098FKXT8L",
      cdiscountLink: "https://www.cdiscount.com/dp/B098FKXT8L",
      reviews: [
        {
          author: "Marie P.",
          rating: 4,
          comment: "Le confort est incomparable, parfait pour de longues sessions.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Apple AirPods Max",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Son spatial impressionnant",
        "Qualité de fabrication premium",
        "Intégration parfaite iOS",
        "ANC performant"
      ],
      cons: [
        "Prix très élevé",
        "Étui de protection discutable",
        "Autonomie moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08PZHYWJS",
      cdiscountLink: "https://www.cdiscount.com/dp/B08PZHYWJS",
      reviews: [
        {
          author: "Thomas B.",
          rating: 4,
          comment: "Son exceptionnel mais le prix est difficile à justifier.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Sennheiser Momentum 4",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Son naturel et détaillé",
        "60h d'autonomie",
        "Excellent confort",
        "ANC efficace"
      ],
      cons: [
        "Design moins premium",
        "Application perfectible",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0B7X54VXH",
      cdiscountLink: "https://www.cdiscount.com/dp/B0B7X54VXH",
      reviews: [
        {
          author: "Julie R.",
          rating: 5,
          comment: "L'autonomie est incroyable et le son est magnifique.",
          date: "08/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son casque audio ?",
    introduction: "Le choix d'un casque audio est une décision importante qui influencera grandement votre expérience d'écoute. Voici les critères essentiels à considérer :",
    criteria: [
      {
        title: "La qualité sonore",
        description: "Recherchez un casque offrant une signature sonore qui correspond à vos préférences : des basses profondes pour les amateurs de musique électronique, un son neutre pour les puristes, ou des médiums mis en avant pour les voix."
      },
      {
        title: "La réduction de bruit",
        description: "L'ANC (Active Noise Cancellation) est crucial pour l'isolation dans les environnements bruyants. Évaluez l'efficacité de la réduction de bruit et la présence d'un mode transparent."
      },
      {
        title: "L'autonomie",
        description: "Pour un casque sans fil, une bonne autonomie (20h minimum) est essentielle. Considérez aussi la vitesse de charge et la possibilité d'utilisation en filaire."
      },
      {
        title: "Le confort",
        description: "Les coussinets doivent être confortables et respirants pour les longues sessions d'écoute. Le poids et la pression du serre-tête sont également importants."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Casques Audio 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des casques audio haut de gamme pour une expérience sonore exceptionnelle.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {headphones.map((headphone, index) => (
          <ProductCard key={index} {...headphone} />
        ))}
      </div>
    </div>
  );
}

export default AudioHeadphones;