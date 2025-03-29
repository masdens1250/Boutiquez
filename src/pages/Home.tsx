import React from 'react';
import { Search, Sparkles, ShoppingBag, Star, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="-m-6 mb-8">
        <div className="relative bg-blue-600">
          <div className="absolute inset-0">
            <img
              className="w-full h-[400px] object-cover"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Shopping experience"
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Faites des choix éclairés
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Boutiquez.app vous guide vers les meilleurs produits grâce à nos comparatifs détaillés
              et nos tests indépendants. Transformez votre expérience d'achat en ligne avec des analyses
              objectives et totalement impartiales.
            </p>
          </div>
        </div>
      </div>

      {/* Section Comparatifs */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nos comparatifs : produits testés et comparés pour vous !</h2>
          <p className="mt-4 text-lg text-gray-600">
            Des analyses détaillées et objectives pour vous aider à faire le meilleur choix
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-start space-x-4">
              <Star className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Notes sur 20</h3>
                <p className="text-gray-600">Chaque produit est évalué rigoureusement selon des critères précis</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Top 5 par catégorie</h3>
                <p className="text-gray-600">Les meilleures références sélectionnées pour chaque type de produit</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Mise à jour régulière</h3>
                <p className="text-gray-600">Nos comparatifs sont actualisés pour suivre les dernières tendances</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Chaque page de notre comparatif propose une approche méthodique et détaillée. Nous commençons par une présentation 
              du type de produit et les critères essentiels à considérer pour votre achat. Par exemple, découvrez notre 
              <Link to="/sport/dumbbellsets" className="text-blue-600 hover:text-blue-800 mx-1">comparatif de rameurs fitness</Link> 
              ou celui des
              <Link to="/sport/smartwatches" className="text-blue-600 hover:text-blue-800 mx-1">meilleures montres connectées</Link>.
            </p>

            <p className="text-gray-700 mb-6">
              Pour faciliter votre choix, nous présentons systématiquement un tableau des cinq meilleures références disponibles, 
              avec pour chaque modèle :
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Une note détaillée sur 20 basée sur nos tests approfondis</li>
              <li>Une image haute qualité du produit</li>
              <li>Les avantages et inconvénients principaux</li>
              <li>Un lien vers la meilleure offre disponible</li>
            </ul>

            <p className="text-gray-700">
              Nous proposons régulièrement des sélections spéciales pour vous aider dans vos achats, comme notre
              <Link to="/tech" className="text-blue-600 hover:text-blue-800 mx-1">guide des meilleurs produits tech</Link>
              qui résume les nouveautés et tendances de l'année.
            </p>
          </div>
        </div>
      </div>

      {/* Section Notre Mission */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Notre mission : vous guider vers des choix d'achat éclairés</h2>
          <p className="text-lg text-gray-600">
            Depuis notre création, Boutiquez.app s'est imposé comme une référence incontournable dans l'univers des comparateurs de prix et des tests de produits. Notre vision est simple mais ambitieuse : transformer l'expérience d'achat en ligne en offrant des analyses objectives, détaillées et totalement indépendantes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            CONTACTEZ-NOUS
          </Link>
        </div>
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Notre équipe au travail"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section Comment choisir en ligne */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Comment choisir en ligne...</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Choisir un produit de qualité sur Internet n'est pas une tâche facile. Cela est d'autant plus vrai lorsque le produit recherché doit répondre à des critères et à des besoins bien précis. Bien souvent, les conseils que l'on retrouve sur des blogs et même en magasin ne sont pas à la hauteur de nos attentes et ne permettent pas forcément un choix très éclairé.
            </p>
            <p className="text-lg text-gray-600">
              La plupart des comparatifs de produits et autres comparateurs de prix disponibles en ligne ne proposent que des listes de produits peu (ou pas) triées, ce qui rend le choix du produit idéal d'autant plus délicat. Ce manque de critères objectifs, pourtant déterminant au moment de choisir et d'acheter le produit dont on a besoin, est encore trop souvent une barrière à l'achat sur Internet.
            </p>
            <p className="text-lg text-gray-600">
              Le site <span className="text-blue-600 font-semibold">Boutiquez.app</span> s'est donc fixé comme objectif de proposer une sélection des meilleures références, classées par catégories et par type de produits, en tenant compte de nombreux critères liés à l'utilisation, au prix, à la qualité, à l'esthétique mais aussi à la robustesse du produit testé et comparé !
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Processus de choix en ligne"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Search className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Comparatifs Détaillés</h3>
          <p className="text-gray-600">Des analyses approfondies pour vous aider à faire le meilleur choix.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tests Indépendants</h3>
          <p className="text-gray-600">Des évaluations objectives et impartiales de tous les produits.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Guides d'Achat</h3>
          <p className="text-gray-600">Des recommandations expertes pour des achats éclairés.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;