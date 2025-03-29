import React from 'react';
import { Coffee, UtensilsCrossed, ChefHat, Refrigerator, Microwave, Sandwich as Blender, Scale, Timer } from 'lucide-react';
import TechProduct from '../components/TechProduct';

function Cuisine() {
  const coffeeMachines = [
    {
      name: "Sage Oracle Touch SES990",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BVZN8L5N"
    },
    {
      name: "Jura E8 Piano Black",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0C7GK6XKL"
    },
    {
      name: "De'Longhi Dinamica Plus",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP"
    },
    {
      name: "Philips Series 5400 LatteGo",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BVZN8L5N"
    },
    {
      name: "Melitta Barista TS Smart",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0C7GK6XKL"
    }
  ];

  const kitchenware = [
    {
      name: "Set de Couteaux Wüsthof Classic",
      image: "https://images.unsplash.com/photo-1593618998160-c4d5e3c36890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS"
    },
    {
      name: "Batterie Le Creuset Signature",
      image: "https://images.unsplash.com/photo-1584284766247-4401eb9a0c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    },
    {
      name: "Set Global Classic",
      image: "https://images.unsplash.com/photo-1593618998160-c4d5e3c36890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000KGBMOM"
    },
    {
      name: "Casseroles Mauviel M'Cook",
      image: "https://images.unsplash.com/photo-1584284766247-4401eb9a0c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    },
    {
      name: "Poêles De Buyer Mineral B",
      image: "https://images.unsplash.com/photo-1593618998160-c4d5e3c36890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B000KGBMOM"
    }
  ];

  const appliances = [
    {
      name: "Thermomix TM6 Vorwerk",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGX4NQF"
    },
    {
      name: "KitchenAid Artisan",
      image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC"
    },
    {
      name: "Robot Magimix Cook Expert",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B01HGPD6J0"
    },
    {
      name: "Kenwood Cooking Chef XL",
      image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07YPC3BQC"
    },
    {
      name: "Bosch OptiMUM",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B01HGPD6J0"
    }
  ];

  const refrigerators = [
    {
      name: "Samsung Bespoke RF65A967ESR",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    },
    {
      name: "LG InstaView Door-in-Door",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS"
    },
    {
      name: "Liebherr CBNes 6256",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08YRGV8DV"
    },
    {
      name: "Miele KFN 7785 D",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS"
    }
  ];

  const microwaves = [
    {
      name: "Panasonic NN-CS89LBEPG",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    },
    {
      name: "Samsung MC35J8085PT",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP"
    },
    {
      name: "Whirlpool Supreme Chef",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    },
    {
      name: "Bosch Serie 8",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP"
    }
  ];

  const blenders = [
    {
      name: "Vitamix A3500i Ascent",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B01N6BTLMM"
    },
    {
      name: "Magimix Power Blender",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP"
    },
    {
      name: "Blendtec Designer 725",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B01N6BTLMM"
    },
    {
      name: "KitchenAid K400",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07NWBX7HP"
    }
  ];

  const scales = [
    {
      name: "Balance Connectée Tefal BC9200",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    },
    {
      name: "Balance Joseph Joseph TriScale",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B007BCJTA8"
    },
    {
      name: "Terraillon Connected",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    },
    {
      name: "Beurer KS800",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B007BCJTA8"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cuisine & Gastronomie</h1>
        <p className="text-xl text-gray-600">Découvrez les meilleurs équipements pour votre cuisine</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Coffee className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Café</h3>
          
          <p className="text-gray-600">Machines à café</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <UtensilsCrossed className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Ustensiles</h3>
          <p className="text-gray-600">Équipements de cuisine</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <ChefHat className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Robots</h3>
          <p className="text-gray-600">Robots de cuisine</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Refrigerator className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Électroménager</h3>
          <p className="text-gray-600">Gros appareils</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Machines à Café</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coffeeMachines.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Ustensiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kitchenware.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Robots de Cuisine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appliances.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Réfrigérateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {refrigerators.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Micro-ondes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {microwaves.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Blenders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {blenders.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Balances de Cuisine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {scales.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cuisine;