import React from 'react';

function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Shopping experience"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Faites des choix éclairés
        </h1>
        <p className="mt-4 text-lg text-white max-w-3xl">
          Boutiquez.app vous guide vers les meilleurs produits grâce à nos comparatifs détaillés
          et nos tests indépendants. Transformez votre expérience d'achat en ligne avec des analyses
          objectives et totalement impartiales.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Découvrir nos comparatifs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;