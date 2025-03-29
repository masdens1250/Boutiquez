import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comparatif from './pages/Comparatif';
import Tech from './pages/Tech';
import BeauteEtForme from './pages/BeauteEtForme';
import Cuisine from './pages/Cuisine';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comparatif" element={<Comparatif />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/beaute-forme" element={<BeauteEtForme />} />
                <Route path="/cuisine" element={<Cuisine />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
        <footer className="bg-custom-blue text-white py-8 mt-8">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">À propos</h3>
                <p className="text-blue-100">
                  Boutiquez.app vous aide à faire les meilleurs choix pour vos achats en ligne avec des comparatifs détaillés et des tests approfondis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                  <li><a href="/comparatif" className="text-blue-100 hover:text-white">Comparatifs</a></li>
                  <li><a href="/tech" className="text-blue-100 hover:text-white">Tech</a></li>
                  <li><a href="/beaute-forme" className="text-blue-100 hover:text-white">Beauté & Forme</a></li>
                  <li><a href="/cuisine" className="text-blue-100 hover:text-white">Cuisine</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-blue-100">Email: contact@boutiquez.app</li>
                  <li className="text-blue-100">Suivez-nous sur les réseaux sociaux</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-opacity-20 border-white mt-8 pt-8 text-center text-blue-100">
              <p>&copy; 2024 Boutiquez.app. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;