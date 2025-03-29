import React from 'react';
import { Laptop, Cpu, Gamepad, Smartphone, Tv, Speaker, Microwave, Coffee, Table as TableIcon, Monitor, Printer, Camera, Headphones, Watch, Router } from 'lucide-react';
import TechProduct from '../components/TechProduct';

function Tech() {
  const laptops = [
    {
      name: "MacBook Air M2",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0B3BQ23VP"
    },
    {
      name: "Dell XPS 13 Plus",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0B5TRHM64"
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09Q5BNVDS"
    }
  ];

  const desktops = [
    {
      name: "Apple Mac Studio M2 Ultra",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0C7GK6XKL"
    },
    {
      name: "HP Pavilion Gaming TG01",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BDHWDR12"
    }
  ];

  const smartphones = [
    {
      name: "iPhone 15 Pro",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CHX3QBCH"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BWWH6R7Y"
    },
    {
      name: "Google Pixel 8 Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CGXQ4NQF"
    }
  ];

  const monitors = [
    {
      name: "LG UltraGear 27GP950",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08MQ3HMS9"
    },
    {
      name: "Samsung Odyssey G7",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B088HJ4VQK"
    }
  ];

  const printers = [
    {
      name: "Brother DCP-L3550CDW",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07FNSWJGQ"
    },
    {
      name: "Epson EcoTank ET-2850",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09CGHG3GL"
    }
  ];

  const tvs = [
    {
      name: "LG OLED C3 65\"",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BVZN8L5N"
    },
    {
      name: "Samsung QN95C Neo QLED",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BW4CKVPP"
    }
  ];

  const soundbars = [
    {
      name: "Sonos Arc",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B087C84Q54"
    },
    {
      name: "Samsung HW-Q990C",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BW8CKVPP"
    }
  ];

  const cameras = [
    {
      name: "Sony Alpha 7 IV",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09JZS5NDH"
    },
    {
      name: "Canon EOS R6 Mark II",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0BHRW9WS4"
    }
  ];

  const smartwatches = [
    {
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0CHX5F9KC"
    },
    {
      name: "Samsung Galaxy Watch 6 Pro",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B0C7PCGP3N"
    }
  ];

  const microwaves = [
    {
      name: "Samsung MC28H5015AS",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B00IE7TZHU"
    },
    {
      name: "Panasonic NN-CS89LBEPG",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07Q3FQPKJ"
    }
  ];

  const furniture = [
    {
      name: "Table Basse Smart avec Chargeur Qi",
      image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09NMFJ7LP"
    },
    {
      name: "Bureau Gaming RGB",
      image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B08KWL1ZQ"
    }
  ];

  const networking = [
    {
      name: "ASUS ROG Rapture GT-AX11000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B07KBFNWHH"
    },
    {
      name: "Netgear Orbi WiFi 6E",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      amazonLink: "https://www.amazon.fr/dp/B09H6MQTY9"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech & Innovation</h1>
        <p className="text-xl text-gray-600">Découvrez les dernières innovations technologiques</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Laptop className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Ordinateurs</h3>
          <p className="text-gray-600">PC portables et fixes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Smartphones</h3>
          <p className="text-gray-600">Derniers modèles</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Tv className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">TV & Audio</h3>
          <p className="text-gray-600">Home cinéma</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Camera className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Photo & Vidéo</h3>
          <p className="text-gray-600">Appareils photo et caméras</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Ordinateurs Portables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {laptops.map((laptop, index) => (
              <TechProduct key={index} {...laptop} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">PC de Bureau</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {desktops.map((desktop, index) => (
              <TechProduct key={index} {...desktop} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Écrans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {monitors.map((monitor, index) => (
              <TechProduct key={index} {...monitor} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Imprimantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {printers.map((printer, index) => (
              <TechProduct key={index} {...printer} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Smartphones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {smartphones.map((phone, index) => (
              <TechProduct key={index} {...phone} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">TV & Home Cinéma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tvs.map((tv, index) => (
              <TechProduct key={index} {...tv} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Barres de Son</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {soundbars.map((soundbar, index) => (
              <TechProduct key={index} {...soundbar} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Photo & Vidéo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cameras.map((camera, index) => (
              <TechProduct key={index} {...camera} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Montres Connectées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {smartwatches.map((watch, index) => (
              <TechProduct key={index} {...watch} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Micro-ondes Connectés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {microwaves.map((microwave, index) => (
              <TechProduct key={index} {...microwave} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Mobilier High-Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {furniture.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Réseau & Connectivité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {networking.map((item, index) => (
              <TechProduct key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tech;