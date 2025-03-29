import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Laptop, Sparkles, UtensilsCrossed, Phone, Home, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/comparatif', icon: Search, label: 'Comparatif' },
    { path: '/tech', icon: Laptop, label: 'Tech' },
    { path: '/beaute-forme', icon: Sparkles, label: 'Forme & Beauté' },
    { path: '/cuisine', icon: UtensilsCrossed, label: 'Cuisine' },
    { path: '/contact', icon: Phone, label: 'Contact' }
  ];

  return (
    <nav className="bg-custom-blue">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Boutiquez.app</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-1" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center py-2 ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-blue-100 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;