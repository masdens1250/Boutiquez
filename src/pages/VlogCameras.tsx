import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function VlogCameras() {
  const cameras = [
    {
      name: "Sony ZV-1 II",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Parfait pour le vlog",
        "Autofocus performant",
        "Stabilisation efficace",
        "Qualité d'image excellente"
      ],
      cons: [
        "Prix élevé",
        "Autonomie limitée",
        "Pas de viseur électronique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0C5WQXR6N",
      cdiscountLink: "https://www.cdiscount.com/dp/B0C5WQXR6N",
      reviews: [
        {
          author: "Sarah M.",
          rating: 5,
          comment: "La meilleure caméra pour le vlog. Autofocus bluffant.",
          date: "15/03/2024"
        }
      ]
    },
    {
      name: "Canon PowerShot G7 X Mark III",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Streaming direct YouTube",
        "Écran orientable",
        "Qualité vidéo 4K",
        "Compact"
      ],
      cons: [
        "Stabilisation moyenne",
        "AF moins performant que Sony",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07VNGMP3M",
      cdiscountLink: "https://www.cdiscount.com/dp/B07VNGMP3M",
      reviews: [
        {
          author: "Pierre L.",
          rating: 4,
          comment: "Excellent pour YouTube, mais l'autofocus peut être capricieux.",
          date: "12/03/2024"
        }
      ]
    },
    {
      name: "Panasonic LUMIX G100",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Audio OZO directionnel",
        "Viseur électronique",
        "Stabilisation hybride",
        "Compact et léger"
      ],
      cons: [
        "Crop 4K important",
        "Autonomie moyenne",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08BZJX8CN",
      cdiscountLink: "https://www.cdiscount.com/dp/B08BZJX8CN",
      reviews: [
        {
          author: "Marie C.",
          rating: 4,
          comment: "Le son est excellent, parfait pour les vlogs en extérieur.",
          date: "09/03/2024"
        }
      ]
    },
    {
      name: "GoPro HERO12 Black",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Stabilisation HyperSmooth 6.0",
        "HDR vidéo",
        "Étanche 10m",
        "Streaming direct"
      ],
      cons: [
        "Autonomie limitée",
        "Audio moyen sans micro",
        "Prix élevé"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0CGXQ4NQF",
      cdiscountLink: "https://www.cdiscount.com/dp/B0CGXQ4NQF",
      reviews: [
        {
          author: "Lucas B.",
          rating: 5,
          comment: "Incroyable pour les vlogs d'action et d'aventure.",
          date: "07/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir sa caméra pour le vlog ?",
    introduction: "Le choix d'une caméra pour le vlog est crucial pour la qualité de votre contenu. Voici les critères essentiels à considérer :",
    criteria: [
      {
        title: "La qualité vidéo",
        description: "Recherchez une résolution 4K pour une qualité optimale, avec de bonnes performances en basse lumière et une plage dynamique étendue."
      },
      {
        title: "L'autofocus",
        description: "Un système AF rapide et fiable avec suivi des visages est essentiel pour garder vos vlogs nets et professionnels."
      },
      {
        title: "La stabilisation",
        description: "Une bonne stabilisation d'image (optique ou hybride) est cruciale pour des vidéos fluides, surtout en mouvement."
      },
      {
        title: "L'audio",
        description: "Un bon micro intégré ou la possibilité de connecter un micro externe est important pour une qualité sonore professionnelle."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleures Caméras pour YouTube et Vlog 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des meilleures caméras pour créer du contenu vidéo de qualité.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cameras.map((camera, index) => (
          <ProductCard key={index} {...camera} />
        ))}
      </div>
    </div>
  );
}

export default VlogCameras;