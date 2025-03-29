import React from 'react';
import { Dumbbell, Heart, Sparkles, Watch, MessageCircle as Massage, Cog as Yoga, Bath, Scissors } from 'lucide-react';
import TechProduct from '../components/TechProduct';

function BeauteEtForme() {
  const fitnessEquipment = [
    {
      name: "Tapis de Course NordicTrack X32i",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09NMFJ7LP"
    },
    {
      name: "Vélo d'appartement Bowflex VeloCore",
      image: "https://images.unsplash.com/photo-1591741544554-ee3ce4dd4e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08KWL1ZQ"
    },
    {
      name: "Rameur Concept2 RowERG",
      image: "https://images.unsplash.com/photo-1591741544554-ee3ce4dd4e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B00NH9WEUA"
    },
    {
      name: "Elliptique Precor EFX 447",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09NMFJ7LP"
    },
    {
      name: "Station Musculation Technogym Unica",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08KWL1ZQ"
    }
  ];

  const wellnessProducts = [
    {
      name: "Lampe de Luminothérapie Beurer TL100",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    },
    {
      name: "Diffuseur Nébuliseur Raindrop 2.0",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    },
    {
      name: "Tapis d'Acupression Mysa",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07H9YV1GT"
    },
    {
      name: "Couverture Lestée Gravity",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07H9YV1GT"
    },
    {
      name: "Purificateur d'Air Dyson Pure Cool",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    }
  ];

  const beautyDevices = [
    {
      name: "Dyson Airwrap™ Complete Long",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BW4CKVPP"
    },
    {
      name: "FOREO LUNA 4 Plus",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGXQ4NQF"
    },
    {
      name: "Braun IPL Silk Expert Pro 5",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07GVCDKZ1"
    },
    {
      name: "NuFACE Trinity Facial Toning Device",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGXQ4NQF"
    },
    {
      name: "Oral-B iO Series 9",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BW4CKVPP"
    }
  ];

  const smartWatches = [
    {
      name: "Garmin Venu 3",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGHY8VG6"
    },
    {
      name: "Fitbit Sense 2",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0B4MWCKS4"
    },
    {
      name: "Apple Watch Ultra 2",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGHY8VG6"
    },
    {
      name: "Samsung Galaxy Watch 6 Pro",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0B4MWCKS4"
    }
  ];

  const massageDevices = [
    {
      name: "Theragun Pro",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B087MG6K8W"
    },
    {
      name: "Hyperice Hypervolt 2 Pro",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09FXXKD1P"
    },
    {
      name: "Compex SP 8.0",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B087MG6K8W"
    },
    {
      name: "Beurer MG 320",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09FXXKD1P"
    }
  ];

  const yogaEquipment = [
    {
      name: "Tapis de Yoga Manduka PRO",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000ECSDTO"
    },
    {
      name: "Bloc de Yoga Manduka Cork",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000VUAGAS"
    },
    {
      name: "Bolster de Méditation Lotuscrafts",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000ECSDTO"
    },
    {
      name: "Sangle de Yoga Yogistar",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000VUAGAS"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Beauté & Forme</h1>
        <p className="text-xl text-gray-600">Découvrez les meilleurs équipements pour votre bien-être</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Fitness</h3>
          <p className="text-gray-600">Équipements sportifs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Heart className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Bien-être</h3>
          <p className="text-gray-600">Pour votre santé</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Beauté</h3>
          <p className="text-gray-600">Soins et appareil</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Watch className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Tracking</h3>
          <p className="text-gray-600">Suivi d'activité</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Équipements Fitness</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fitnessEquipment.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Bien-être</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wellnessProducts.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Appareils de Beauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beautyDevices.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Montres Connectées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {smartWatches.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Massage & Récupération</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {massageDevices.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Yoga & Méditation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {yogaEquipment.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BeauteEtForme;