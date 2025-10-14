import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, File } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lattara-logo-black.svg"
              alt="Lattara Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-red-400 ${
                  location.pathname === item.path
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
                style={location.pathname === item.path ? { color: '#9D2235' } : {}}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/assessment"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ backgroundColor: '#9D2235' }}
            >
              Free Assessment
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={location.pathname === item.path ? { color: '#9D2235' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/assessment"
              className="block px-3 py-2 text-base font-medium text-white rounded-lg mt-2"
              style={{ backgroundColor: '#9D2235' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;