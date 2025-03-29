import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function HandBlenders() {
  const blenders = [
    {
      name: "Braun MultiQuick 9",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Technologie ActiveBlade",
        "1000W puissant",
        "Accessoires nombreux",
        "Qualité allemande"
      ],
      cons: [
        "Prix élevé",
        "Encombrant à ranger",
        "Bruyant à haute puissance"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ",
      cdiscountLink: "https://www.cdiscount.com/dp/B07Q3FQPKJ",
      reviews: [
        {
          author: "Marie L.",
          rating: 5,
          comment: "Excellent mixeur, très polyvalent et puissant.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Philips ProMix HR2653",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Technologie SpeedTouch",
        "800W efficace",
        "Compact",
        "Facile à nettoyer"
      ],
      cons: [
        "Accessoires limités",
        "Plastique fragile",
        "Batterie moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWBX7HP",
      reviews: [
        {
          author: "Thomas R.",
          rating: 4,
          comment: "Bon rapport qualité/prix, parfait pour un usage quotidien.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Bamix M200",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      pros: [
        "Fabrication Suisse",
        "Moteur garanti 10 ans",
        "Ultra robuste",
        "Polyvalent"
      ],
      cons: [
        "Prix très élevé",
        "Pas de variateur",
        "Design basique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Julie M.",
          rating: 5,
          comment: "Un investissement qui vaut le coup, qualité exceptionnelle.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son mixeur plongeant ?",
    introduction: "Le choix d'un mixeur plongeant dépend de plusieurs critères essentiels qui détermineront son efficacité et sa durabilité :",
    criteria: [
      {
        title: "La puissance",
        description: "Une puissance entre 600W et 1000W est idéale pour la plupart des usages. Plus la puissance est élevée, plus le mixeur sera efficace sur les aliments durs."
      },
      {
        title: "Les accessoires",
        description: "Vérifiez les accessoires inclus (fouet, hachoir, bol) qui augmentent la polyvalence. Certains modèles proposent des accessoires spéciaux pour des tâches spécifiques."
      },
      {
        title: "La qualité de fabrication",
        description: "Privilégiez les matériaux durables comme l'inox pour le pied et les lames. Un bon mixeur doit résister aux utilisations intensives et aux chocs."
      },
      {
        title: "L'ergonomie",
        description: "La prise en main doit être confortable avec des boutons facilement accessibles. Le poids et la longueur du pied sont également à considérer."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Mixeurs Plongeants 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des mixeurs plongeants pour votre cuisine.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blenders.map((blender, index) => (
          <ProductCard key={index} {...blender} />
        ))}
      </div>
    </div>
  );
}

export default HandBlenders;