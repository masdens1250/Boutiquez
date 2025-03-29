import React from 'react';
import ProductCard from '../components/ProductCard';
import BuyingGuide from '../components/BuyingGuide';

function UsbMics() {
  const mics = [
    {
      name: "Blue Yeti X",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5,
      pros: [
        "Qualité audio professionnelle",
        "4 modes de captation",
        "Indicateurs LED",
        "Logiciel Blue VO!CE"
      ],
      cons: [
        "Prix élevé",
        "Encombrant",
        "Sensible aux vibrations"
      ],
      amazonLink: "https://www.amazon.fr/dp/B07YD1WZ36",
      cdiscountLink: "https://www.cdiscount.com/dp/B07YD1WZ36",
      reviews: [
        {
          author: "Michel P.",
          rating: 5,
          comment: "Excellent pour le streaming et les podcasts.",
          date: "14/03/2024"
        }
      ]
    },
    {
      name: "Rode NT-USB+",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Son studio",
        "Monitoring sans latence",
        "Construction robuste",
        "Filtre anti-pop intégré"
      ],
      cons: [
        "Un seul pattern cardioïde",
        "Prix élevé",
        "Pas de contrôle du gain sur le micro"
      ],
      amazonLink: "https://www.amazon.fr/dp/B0BW4CKVPP",
      cdiscountLink: "https://www.cdiscount.com/dp/B0BW4CKVPP",
      reviews: [
        {
          author: "Laura M.",
          rating: 4,
          comment: "Parfait pour l'enregistrement vocal et le streaming.",
          date: "10/03/2024"
        }
      ]
    },
    {
      name: "Elgato Wave:3",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "Technologie Clipguard",
        "Logiciel Wave Link",
        "Design compact",
        "Qualité de construction"
      ],
      cons: [
        "Un seul pattern",
        "Prix élevé",
        "Support basique"
      ],
      amazonLink: "https://www.amazon.fr/dp/B088HHWC47",
      cdiscountLink: "https://www.cdiscount.com/dp/B088HHWC47",
      reviews: [
        {
          author: "Thomas B.",
          rating: 5,
          comment: "Le meilleur micro pour le streaming sur Twitch.",
          date: "08/03/2024"
        }
      ]
    },
    {
      name: "HyperX QuadCast S",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.5,
      pros: [
        "RGB personnalisable",
        "4 patterns de captation",
        "Support anti-vibrations",
        "Tap-to-mute tactile"
      ],
      cons: [
        "RGB peut être distrayant",
        "Prix élevé",
        "Logiciel perfectible"
      ],
      amazonLink: "https://www.amazon.fr/dp/B08G8WH435",
      cdiscountLink: "https://www.cdiscount.com/dp/B08G8WH435",
      reviews: [
        {
          author: "Julie R.",
          rating: 4,
          comment: "Super micro, l'éclairage RGB est magnifique.",
          date: "05/03/2024"
        }
      ]
    }
  ];

  const buyingGuideData = {
    title: "Comment choisir son microphone USB ?",
    introduction: "Le choix d'un microphone USB est crucial pour la qualité de vos enregistrements, streams ou podcasts. Voici les points essentiels à considérer :",
    criteria: [
      {
        title: "La directivité",
        description: "Les différents patterns de captation (cardioïde, bidirectionnel, omnidirectionnel, stéréo) déterminent comment le micro capte le son. Le cardioïde est idéal pour une voix seule, l'omnidirectionnel pour plusieurs personnes."
      },
      {
        title: "La qualité d'enregistrement",
        description: "Recherchez une résolution minimum de 24-bit/48kHz pour une qualité professionnelle. La présence d'un filtre anti-pop et d'une protection contre la saturation est un plus."
      },
      {
        title: "Les contrôles",
        description: "Des contrôles physiques pour le gain, le volume du casque et le mute sont pratiques. Un monitoring sans latence est essentiel pour le streaming."
      },
      {
        title: "La connectivité",
        description: "Vérifiez la compatibilité avec votre système et les logiciels. Certains micros offrent des fonctionnalités avancées via leur propre logiciel."
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meilleurs Microphones USB 2024</h2>
      <p className="text-gray-600 text-sm mb-4">Notre sélection des microphones USB pour le streaming, les podcasts et l'enregistrement vocal.</p>
      
      <BuyingGuide {...buyingGuideData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mics.map((mic, index) => (
          <ProductCard key={index} {...mic} />
        ))}
      </div>
    </div>
  );
}

export default UsbMics;