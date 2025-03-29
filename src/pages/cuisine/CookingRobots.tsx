import React from 'react';
import ProductCard from '../../components/ProductCard';
import BuyingGuide from '../../components/BuyingGuide';

function CookingRobots() {
  const robots = [
    {
      name: "Thermomix TM6",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      pros: [
        "24 fonctions",
        "Écran tactile",
        "Recettes guidées",
        "Qualité premium"
      ],
      cons: [
        "Prix très élevé",
        "Abonnement recettes payant",
        "SAV complexe"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YPC3BQC",
      reviews: [
        {
          author: "Sophie M.",
          rating: 5,
          comment: "Révolutionnaire en cuisine, facilite vraiment la vie.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Magimix Cook Expert",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.7,
      pros: [
        "Fabrication française",
        "Grande capacité",
        "Programmes auto",
        "Robuste"
      ],
      cons: [
        "Prix élevé",
        "Interface basique",
        "Encombrant"
      ],
      amazonLink: "https://www.amazon.fr/dp/B000NWTX6W",
      cdiscountLink: "https://www.cdiscount.com/dp/B000NWTX6W",
      reviews: [
        {
          author: "Pierre L.",
          rating: 4,
          comment: "Excellent robot, très polyvalent et fiable.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Moulinex ClickChef",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Prix abordable",
        "12 vitesses",
        "5 programmes auto",
        "Simple d'utilisation"
      ],
      cons: [
        "Fonctions limitées",
        "Pas d'écran",
        "Capacité moyenne"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP",
      cdiscountLink: "https://www.cdiscount.com/dp/B07NWBX7HP",
      reviews: [
        {
          author: "Marie B.",
          rating: 4,
          comment: "Parfait pour débuter en robotique culinaire.",
          date: "10/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son robot cuiseur ?",
    introduction: "Le choix d'un robot cuiseur multifonction est un investissement important qui peut transformer votre façon de cuisiner. Voici les points essentiels à considérer :",
    criteria: [
      {
        title: "Les fonctionnalités",
        description: "Évaluez les fonctions disponibles : cuisson, mixage, pétrissage, vapeur, etc. Plus le robot est polyvalent, plus il pourra remplacer d'autres appareils."
      },
      {
        title: "La capacité et la puissance",
        description: "La capacité du bol (2L à 4.5L) doit correspondre à vos besoins. La puissance de chauffe et de mixage influence la rapidité et l'efficacité."
      },
      {
        title: "L'interface utilisateur",
        description: "Un écran tactile, des programmes automatiques et des recettes guidées facilitent l'utilisation. Certains modèles proposent une connexion WiFi pour plus de fonctionnalités."
      },
      {
        title: "Les accessoires inclus",
        description: "Vérifiez les accessoires fournis : panier vapeur, fouet, spatule, balance intégrée... Ils déterminent la polyvalence de votre robot."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Robots Cuiseurs 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des robots cuiseurs multifonctions pour votre cuisine.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robots.map((robot, index) => (
          <ProductCard key={index} {...robot} />
        ))}
      </div>
    </div>
  );
}

export default CookingRobots;