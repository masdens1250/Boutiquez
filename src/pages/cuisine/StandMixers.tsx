import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function StandMixers() {
  const mixers = [
    {
      name: "KitchenAid Artisan",
      image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      pros: [
        "Qualité professionnelle",
        "10 vitesses",
        "Nombreux accessoires",
        "Design iconique"
      ],
      cons: [
        "Prix très élevé",
        "Lourd",
        "Encombrant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YPC3BQC",
      reviews: [
        {
          author: "Marie L.",
          rating: 5,
          comment: "Le meilleur robot pâtissier, qualité exceptionnelle.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Kenwood Chef XL",
      image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Grande capacité 6.7L",
        "Puissant 1200W",
        "Accessoires variés",
        "Robuste"
      ],
      cons: [
        "Prix élevé",
        "Très lourd",
        "Bruyant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Thomas R.",
          rating: 4,
          comment: "Excellent robot, parfait pour les grandes quantités.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Bosch MUM5",
      image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Bon rapport qualité/prix",
        "Compact",
        "7 vitesses",
        "Facile à nettoyer"
      ],
      cons: [
        "Capacité moyenne",
        "Accessoires basiques",
        "Plastique dominant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWBX7HP",
      reviews: [
        {
          author: "Julie M.",
          rating: 4,
          comment: "Parfait pour une utilisation familiale régulière.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son robot pâtissier ?",
    introduction: "Le choix d'un robot pâtissier est un investissement important pour votre cuisine. Voici les critères essentiels à prendre en compte :",
    criteria: [
      {
        title: "La puissance et la capacité",
        description: "La puissance (entre 800W et 1500W) détermine l'efficacité sur les pâtes lourdes. La capacité du bol doit correspondre à vos besoins (4L à 7L pour un usage familial)."
      },
      {
        title: "Les accessoires inclus",
        description: "Vérifiez les accessoires fournis : fouet, batteur plat, crochet pétrisseur sont essentiels. Des accessoires optionnels peuvent étendre les possibilités (hachoir, râpe...)."
      },
      {
        title: "La qualité de fabrication",
        description: "Privilégiez les matériaux robustes (métal plutôt que plastique) pour le corps et les accessoires. Un bon robot doit durer plusieurs années."
      },
      {
        title: "Les fonctionnalités",
        description: "Le nombre de vitesses, la présence d'un minuteur, le mouvement planétaire du batteur et la protection contre les éclaboussures sont des points importants."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Robots Pâtissiers 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des robots pâtissiers pour vos préparations.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mixers.map((mixer, index) => (
          <ProductCard key={index} {...mixer} />
        ))}
      </div>
    </div>
  );
}

export default StandMixers;