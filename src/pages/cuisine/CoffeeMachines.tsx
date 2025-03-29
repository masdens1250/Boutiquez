import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function CoffeeMachines() {
  const machines = [
    {
      name: "Sage Barista Express",
      image: "https://images.unsplash.com/photo-1587734361993-0275d25a9eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Broyeur intégré",
        "Contrôle précis",
        "Buse vapeur pro",
        "Qualité construction"
      ],
      cons: [
        "Prix élevé",
        "Apprentissage nécessaire",
        "Entretien régulier"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YPC3BQC",
      reviews: [
        {
          author: "Thomas L.",
          rating: 5,
          comment: "Café de qualité barista à la maison. Excellent investissement.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Delonghi Magnifica S",
      image: "https://images.unsplash.com/photo-1587734361993-0275d25a9eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Automatique",
        "Facile à utiliser",
        "Compact",
        "Bon rapport qualité/prix"
      ],
      cons: [
        "Bruit important",
        "Capacité moyenne",
        "Plastique dominant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Marie R.",
          rating: 4,
          comment: "Très pratique au quotidien, bon café.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Philips 3200 LatteGo",
      image: "https://images.unsplash.com/photo-1587734361993-0275d25a9eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Système lait innovant",
        "Interface intuitive",
        "Entretien facile",
        "Silencieux"
      ],
      cons: [
        "Prix élevé",
        "Temps de chauffe",
        "Réservoir moyen"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWBX7HP",
      reviews: [
        {
          author: "Sophie B.",
          rating: 5,
          comment: "Excellent pour les boissons lactées, facile à nettoyer.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa machine à café ?",
    introduction: "Le choix d'une machine à café est crucial pour obtenir le meilleur café possible. Voici les critères essentiels à prendre en compte :",
    criteria: [
      {
        title: "Le type de machine",
        description: "Choisissez entre automatique (avec broyeur intégré), manuelle (expresso), ou à capsules selon vos besoins en termes de praticité et de personnalisation."
      },
      {
        title: "La pression",
        description: "Une pression de 15 bars minimum est recommandée pour un expresso de qualité. Plus la pression est élevée, meilleure sera l'extraction."
      },
      {
        title: "Les fonctionnalités",
        description: "Buse vapeur pour le lait, réglage de la mouture, programmation des recettes... Identifiez les fonctions essentielles pour votre usage."
      },
      {
        title: "L'entretien",
        description: "Privilégiez une machine facile à nettoyer avec des programmes de détartrage automatiques et des pièces amovibles accessibles."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Machines à Café 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des machines à café pour votre pause café parfaite.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {machines.map((machine, index) => (
          <ProductCard key={index} {...machine} />
        ))}
      </div>
    </div>
  );
}

export default CoffeeMachines;