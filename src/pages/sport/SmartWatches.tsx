import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function SmartWatches() {
  const watches = [
    {
      name: "Garmin Venu 3",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      pros: [
        "Autonomie exceptionnelle",
        "GPS précis",
        "Suivi santé complet",
        "Écran AMOLED lumineux"
      ],
      cons: [
        "Prix élevé",
        "Interface complexe",
        "Peu d'apps tierces"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0CGHY8VG6",
      cdiscountLink: "https://www.cdiscount.com/dp/B0CGHY8VG6",
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Excellente montre pour le sport, autonomie impressionnante.",
          date: "14/03/2024"
        }
      ]
    },
    {
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Écosystème Apple parfait",
        "Finitions premium",
        "Suivi santé précis",
        "Double tap"
      ],
      cons: [
        "Prix élevé",
        "Autonomie limitée",
        "iOS uniquement"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0CHX5F9KC",
      cdiscountLink: "https://www.cdiscount.com/dp/B0CHX5F9KC",
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "La meilleure smartwatch pour iPhone.",
          date: "13/03/2024"
        }
      ]
    },
    {
      name: "Samsung Galaxy Watch 6",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "Design élégant",
        "Wear OS fluide",
        "Bon suivi fitness",
        "ECG et pression"
      ],
      cons: [
        "Autonomie moyenne",
        "Certaines fonctions Samsung only",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0C7PCGP3N",
      cdiscountLink: "https://www.cdiscount.com/dp/B0C7PCGP3N",
      reviews: [
        {
          author: "Thomas B.",
          rating: 4,
          comment: "Excellente montre Android, interface fluide.",
          date: "11/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa montre connectée ?",
    introduction: "Une montre connectée est un investissement important qui peut grandement améliorer votre quotidien. Voici les points essentiels à considérer :",
    criteria: [
      {
        title: "La compatibilité",
        description: "Vérifiez la compatibilité avec votre smartphone. Certaines montres comme l'Apple Watch ne fonctionnent qu'avec iOS, tandis que d'autres sont plus universelles."
      },
      {
        title: "L'autonomie",
        description: "L'autonomie varie grandement selon les modèles, de 18 heures à plusieurs semaines. Considérez votre utilisation quotidienne et votre tolérance à la recharge fréquente."
      },
      {
        title: "Les fonctionnalités santé",
        description: "Évaluez les capteurs disponibles (cardio, SpO2, ECG, etc.) et leur précision. Certaines montres offrent des fonctionnalités avancées comme le suivi du sommeil ou du stress."
      },
      {
        title: "Le design et le confort",
        description: "La montre doit être confortable pour une utilisation quotidienne. Considérez la taille de l'écran, le poids et les options de personnalisation disponibles."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Montres Connectées 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des montres connectées pour suivre votre activité et votre santé.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {watches.map((watch, index) => (
          <ProductCard key={index} {...watch} />
        ))}
      </div>
    </div>
  );
}

export default SmartWatches;