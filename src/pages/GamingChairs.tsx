import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function GamingChairs() {
  const chairs = [
    {
      name: "Secretlab TITAN Evo 2022",
      image: "https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Qualité de fabrication exceptionnelle",
        "Confort optimal",
        "Nombreuses options de personnalisation",
        "Support lombaire 4D intégré"
      ],
      cons: [
        "Prix élevé",
        "Période de rodage nécessaire",
        "Assemblage peut être complexe"
      ],
      amazonLink: "https://www.amazon.fr/dp/B09QG4BT5T",
      cdiscountLink: "https://www.cdiscount.com/dp/B09QG4BT5T",
      reviews: [
        {
          author: "Marc D.",
          rating: 5,
          comment: "La meilleure chaise gaming que j'ai jamais eue. Le confort est incomparable.",
          date: "15/03/2024"
        },
        {
          author: "Sophie L.",
          rating: 4,
          comment: "Excellente qualité mais le prix est conséquent.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Razer Iskur X",
      image: "https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Design gaming agressif",
        "Support lombaire intégré",
        "Construction robuste",
        "Prix compétitif"
      ],
      cons: [
        "Accoudoirs non 4D",
        "Moins personnalisable",
        "Rembourrage ferme"
      ],
      amazonLink: "https://www.amazon.fr/dp/B093LK3Q1F",
      cdiscountLink: "https://www.cdiscount.com/dp/B093LK3Q1F",
      reviews: [
        {
          author: "Pierre M.",
          rating: 4,
          comment: "Très bonne chaise pour son prix. Le support lombaire est efficace.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "noblechairs HERO",
      image: "https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Design professionnel",
        "Excellente qualité des matériaux",
        "Support lombaire ajustable",
        "Grande capacité de charge"
      ],
      cons: [
        "Prix élevé",
        "Assise ferme au début",
        "Assemblage complexe"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ",
      cdiscountLink: "https://www.cdiscount.com/dp/B07Q3FQPKJ",
      reviews: [
        {
          author: "Thomas R.",
          rating: 5,
          comment: "Parfaite pour les longues sessions de travail ou de jeu.",
          date: "08/03/2024"
        }
      ]
    },
    {
      name: "ASUS ROG Chariot",
      image: "https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4,
      pros: [
        "RGB personnalisable",
        "Design unique",
        "Bonne qualité de construction",
        "Confortable"
      ],
      cons: [
        "Prix très élevé",
        "RGB nécessite une alimentation",
        "Encombrant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08CGVZ4YG",
      cdiscountLink: "https://www.cdiscount.com/dp/B08CGVZ4YG",
      reviews: [
        {
          author: "Julie B.",
          rating: 4,
          comment: "Le RGB est superbe, mais le prix est un peu excessif.",
          date: "05/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa chaise gaming ?",
    introduction: "Une bonne chaise gaming est essentielle pour votre confort et votre santé pendant les longues sessions. Voici les points clés à considérer :",
    criteria: [
      {
        title: "L'ergonomie",
        description: "Recherchez des réglages multiples (hauteur, inclinaison, accoudoirs) et un bon support lombaire. L'ergonomie est cruciale pour prévenir les douleurs."
      },
      {
        title: "Les matériaux",
        description: "La qualité des matériaux détermine la durabilité et le confort. Le cuir PU est facile d'entretien, le tissu plus respirant, et le cuir véritable plus premium."
      },
      {
        title: "La taille",
        description: "Vérifiez les dimensions et le poids supporté. La chaise doit correspondre à votre morphologie pour un confort optimal."
      },
      {
        title: "Les fonctionnalités",
        description: "Évaluez les options comme les accoudoirs 4D, l'inclinaison maximale, le support lombaire ajustable et les accessoires inclus."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Chaises Gaming 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Découvrez notre sélection des chaises gaming les plus confortables pour vos sessions de jeu.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {chairs.map((chair, index) => (
          <ProductCard key={index} {...chair} />
        ))}
      </div>
    </div>
  );
}

export default GamingChairs;