import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function NoiseCancel() {
  const headphones = [
    {
      name: "Bose QuietComfort Earbuds II",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Meilleure réduction de bruit",
        "Son personnalisable",
        "Confort excellent",
        "Compact"
      ],
      cons: [
        "Prix premium",
        "Pas de charge sans fil",
        "Autonomie moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0B8SFFK44",
      cdiscountLink: "https://www.cdiscount.com/dp/B0B8SFFK44",
      reviews: [
        {
          author: "Pierre L.",
          rating: 5,
          comment: "La réduction de bruit est incroyable. Parfait pour les transports.",
          date: "14/03/2024"
        }
      ]
    },
    {
      name: "Sony WF-1000XM5",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Son exceptionnel",
        "ANC très performant",
        "Fonctionnalités avancées",
        "Design compact"
      ],
      cons: [
        "Prix élevé",
        "Pas de multipoint au lancement",
        "Taille peut être grande pour certains"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0C5WQXR6N",
      cdiscountLink: "https://www.cdiscount.com/dp/B0C5WQXR6N",
      reviews: [
        {
          author: "Sophie M.",
          rating: 5,
          comment: "La qualité sonore est exceptionnelle. ANC très efficace.",
          date: "11/03/2024"
        }
      ]
    },
    {
      name: "Apple AirPods Pro 2",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Intégration iOS parfaite",
        "ANC très efficace",
        "Son spatial",
        "Confort optimal"
      ],
      cons: [
        "Prix élevé",
        "Limité hors écosystème Apple",
        "Autonomie moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0BDHWDR12",
      cdiscountLink: "https://www.cdiscount.com/dp/B0BDHWDR12",
      reviews: [
        {
          author: "Marc D.",
          rating: 4,
          comment: "Parfait avec iPhone mais un peu cher.",
          date: "09/03/2024"
        }
      ]
    },
    {
      name: "Samsung Galaxy Buds2 Pro",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Design compact",
        "Bon ANC",
        "Son équilibré",
        "IPX7"
      ],
      cons: [
        "Autonomie moyenne",
        "Certaines fonctions Samsung only",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0B7BHXLTC",
      cdiscountLink: "https://www.cdiscount.com/dp/B0B7BHXLTC",
      reviews: [
        {
          author: "Lucie F.",
          rating: 4,
          comment: "Très confortable et bon son. Parfait avec Samsung.",
          date: "07/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir ses écouteurs anti-bruit ?",
    introduction: "Le choix d'écouteurs à réduction de bruit active (ANC) dépend de plusieurs facteurs essentiels qui influenceront directement votre expérience d'écoute :",
    criteria: [
      {
        title: "La qualité de l'ANC",
        description: "La performance de la réduction de bruit active est primordiale. Recherchez des écouteurs capables de filtrer efficacement les bruits de fond, notamment les sons graves et constants."
      },
      {
        title: "Le confort",
        description: "Les écouteurs doivent être confortables pour une utilisation prolongée. Vérifiez la présence d'embouts de différentes tailles et leur maintien dans l'oreille."
      },
      {
        title: "L'autonomie",
        description: "Une bonne autonomie est essentielle, notamment pour les longs trajets. Considérez aussi la capacité de recharge du boîtier et la charge rapide."
      },
      {
        title: "La connectivité",
        description: "Vérifiez la compatibilité avec vos appareils et la présence de fonctionnalités comme le multipoint pour connecter plusieurs appareils simultanément."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Écouteurs Anti-bruit 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Découvrez notre sélection des écouteurs avec la meilleure réduction de bruit active.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {headphones.map((headphone, index) => (
          <ProductCard key={index} {...headphone} />
        ))}
      </div>
    </div>
  );
}

export default NoiseCancel;