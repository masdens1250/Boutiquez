import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function GamingMice() {
  const mice = [
    {
      name: "Logitech G Pro X Superlight",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Ultra légère (63g)",
        "Capteur HERO 25K précis",
        "Autonomie de 70h",
        "Sans fil avec latence imperceptible"
      ],
      cons: [
        "Prix élevé",
        "Pas de RGB",
        "Uniquement pour droitiers"
      ],
      amazonLink: "https://www.amazon.fr/dp/B087LXCTFJ",
      cdiscountLink: "https://www.cdiscount.com/dp/B087LXCTFJ",
      reviews: [
        {
          author: "Thomas M.",
          rating: 5,
          comment: "La meilleure souris que j'ai jamais utilisée. Ultra légère et précise.",
          date: "15/03/2024"
        },
        {
          author: "Julie R.",
          rating: 4,
          comment: "Excellente pour le gaming, mais le prix est un peu élevé.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Razer Viper Ultimate",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Design ambidextre",
        "Excellente autonomie",
        "Capteur Focus+ précis",
        "Station de charge incluse"
      ],
      cons: [
        "Prix premium",
        "Boutons un peu fermes",
        "Software complexe"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YPC3BQC",
      reviews: [
        {
          author: "Marc L.",
          rating: 5,
          comment: "Parfaite pour les gauchers comme moi !",
          date: "12/03/2024"
        },
        {
          author: "Sophie D.",
          rating: 4,
          comment: "Très bonne souris mais le logiciel pourrait être plus simple.",
          date: "05/03/2024"
        }
      ]
    },
    {
      name: "Glorious Model O",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4,
      pros: [
        "Très légère",
        "Prix abordable",
        "Excellent câble flexible",
        "Design avec perforations"
      ],
      cons: [
        "Qualité de construction moyenne",
        "Pas de version sans fil",
        "RGB peut être distrayant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07MGDRBBF",
      cdiscountLink: "https://www.cdiscount.com/dp/B07MGDRBBF",
      reviews: [
        {
          author: "Pierre F.",
          rating: 4,
          comment: "Excellent rapport qualité-prix. Légère et réactive.",
          date: "08/03/2024"
        }
      ]
    },
    {
      name: "Razer DeathAdder V3 Pro",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Design ergonomique parfait",
        "Ultra légère (64g)",
        "Capteur Focus Pro 30K",
        "Autonomie exceptionnelle"
      ],
      cons: [
        "Prix très élevé",
        "Pas de RGB",
        "Uniquement pour droitiers"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0B7BMVZ5C",
      cdiscountLink: "https://www.cdiscount.com/dp/B0B7BMVZ5C",
      reviews: [
        {
          author: "Alexandre B.",
          rating: 5,
          comment: "La perfection pour les FPS. Confort et précision au top.",
          date: "14/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa souris gaming ?",
    introduction: "Le choix d'une souris gaming dépend de plusieurs facteurs essentiels qui influenceront directement vos performances en jeu :",
    criteria: [
      {
        title: "Le capteur",
        description: "La précision et la réactivité de votre souris dépendent directement de la qualité de son capteur. Un bon capteur optique offre un suivi précis sans accélération ni lissage."
      },
      {
        title: "Le poids",
        description: "Une souris légère permet des mouvements plus rapides, tandis qu'une souris plus lourde offre plus de contrôle. Le choix dépend de votre style de jeu et de vos préférences."
      },
      {
        title: "La forme",
        description: "L'ergonomie doit correspondre à votre type de prise en main (palm, claw, fingertip). Une bonne prise en main est essentielle pour le confort et la précision."
      },
      {
        title: "La connectivité",
        description: "Filaire pour une latence minimale, ou sans fil pour plus de liberté. Les technologies sans fil modernes offrent des performances comparables au filaire."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Souris Gaming 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Découvrez notre sélection des meilleures souris gaming testées et approuvées par nos experts.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mice.map((mouse, index) => (
          <ProductCard key={index} {...mouse} />
        ))}
      </div>
    </div>
  );
}

export default GamingMice;