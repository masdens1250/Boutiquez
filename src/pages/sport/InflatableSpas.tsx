import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function InflatableSpas() {
  const spas = [
    {
      name: "Intex PureSpa Plus",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "6 personnes",
        "170 buses",
        "Chauffage rapide",
        "Système anti-calcaire"
      ],
      cons: [
        "Consommation électrique",
        "Installation complexe",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07B8VK1HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07B8VK1HP",
      reviews: [
        {
          author: "Sophie M.",
          rating: 5,
          comment: "Excellent spa, très confortable et facile à entretenir.",
          date: "14/03/2024"
        }
      ]
    },
    {
      name: "Bestway Lay-Z-Spa Milan",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.6,
      pros: [
        "4-6 personnes",
        "140 buses",
        "WiFi intégré",
        "Installation rapide"
      ],
      cons: [
        "Chauffe lentement",
        "Bruit modéré",
        "Couverture basique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08KWLM1ZQ",
      cdiscountLink: "https://www.cdiscount.com/dp/B08KWLM1ZQ",
      reviews: [
        {
          author: "Pierre L.",
          rating: 4,
          comment: "Bon rapport qualité/prix, parfait pour l'été.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "MSpa Alpine D-AL04",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "4 personnes",
        "Design compact",
        "Chauffage efficace",
        "Transport facile"
      ],
      cons: [
        "Taille limitée",
        "Peu de fonctionnalités",
        "Structure fine"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ",
      cdiscountLink: "https://www.cdiscount.com/dp/B07Q3FQPKJ",
      reviews: [
        {
          author: "Marie B.",
          rating: 4,
          comment: "Parfait pour les petits espaces, bonne qualité.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son spa gonflable ?",
    introduction: "Le choix d'un spa gonflable nécessite de prendre en compte plusieurs critères essentiels pour garantir une expérience optimale :",
    criteria: [
      {
        title: "La capacité",
        description: "Le nombre de places doit correspondre à votre utilisation. Un spa 4-6 places offre un bon compromis entre confort et encombrement."
      },
      {
        title: "La puissance de chauffage",
        description: "La puissance du système de chauffage détermine le temps de mise en température et la capacité à maintenir une température stable."
      },
      {
        title: "Le système de filtration",
        description: "Un bon système de filtration est essentiel pour maintenir une eau propre. Vérifiez la capacité de filtration et la facilité d'entretien."
      },
      {
        title: "La qualité de construction",
        description: "La durabilité du matériau, la qualité des soudures et la robustesse de la structure sont cruciales pour la longévité du spa."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Spas Gonflables 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des spas gonflables pour votre détente à domicile.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spas.map((spa, index) => (
          <ProductCard key={index} {...spa} />
        ))}
      </div>
    </div>
  );
}

export default InflatableSpas;