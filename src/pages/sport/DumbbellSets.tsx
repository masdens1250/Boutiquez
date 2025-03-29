import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function DumbbellSets() {
  const dumbbells = [
    {
      name: "Bowflex SelectTech 552i",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Réglage rapide",
        "2.5 à 24kg par haltère",
        "Compact",
        "Qualité premium"
      ],
      cons: [
        "Prix très élevé",
        "Longueur importante",
        "Fragilité du mécanisme"
      ],
      amazonLink: "https://www.amazon.fr/dp/B001ARYU58",
      cdiscountLink: "https://www.cdiscount.com/dp/B001ARYU58",
      reviews: [
        {
          author: "Marc D.",
          rating: 5,
          comment: "Investissement qui vaut le coup, gain de place incroyable.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "PowerBlock Sport 2.4",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Compact et robuste",
        "1 à 11kg par haltère",
        "Changement rapide",
        "Design ergonomique"
      ],
      cons: [
        "Prix élevé",
        "Amplitude limitée",
        "Grip particulier"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Julie R.",
          rating: 4,
          comment: "Parfait pour l'entraînement à domicile.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Decathlon Kit 20kg",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Excellent rapport qualité/prix",
        "Disques caoutchoutés",
        "Facile à utiliser",
        "Robuste"
      ],
      cons: [
        "Changement manuel",
        "Encombrant",
        "Finitions basiques"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08KWLM1ZQ",
      cdiscountLink: "https://www.cdiscount.com/dp/B08KWLM1ZQ",
      reviews: [
        {
          author: "Thomas L.",
          rating: 4,
          comment: "Parfait pour débuter, qualité correcte.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son set d'haltères ?",
    introduction: "Le choix d'un set d'haltères est crucial pour un entraînement efficace à domicile. Voici les points essentiels à considérer :",
    criteria: [
      {
        title: "La plage de poids",
        description: "Choisissez une plage de poids adaptée à votre niveau actuel mais permettant aussi une progression. Les sets ajustables offrent plus de flexibilité."
      },
      {
        title: "Le système de réglage",
        description: "Pour les haltères ajustables, privilégiez un système de changement de poids rapide et sécurisé. La facilité d'utilisation est importante pour maintenir le rythme de l'entraînement."
      },
      {
        title: "La qualité de construction",
        description: "Les matériaux doivent être robustes et durables. Le revêtement des poids, la qualité des mécanismes et la finition générale sont des indicateurs importants."
      },
      {
        title: "L'ergonomie",
        description: "La prise en main doit être confortable avec une bonne adhérence. Considérez aussi l'encombrement du set et l'espace de rangement disponible."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Sets d'Haltères 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des sets d'haltères pour votre entraînement à domicile.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dumbbells.map((dumbbell, index) => (
          <ProductCard key={index} {...dumbbell} />
        ))}
      </div>
    </div>
  );
}

export default DumbbellSets;