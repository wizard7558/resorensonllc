import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-dark text-white p-1.5 transition-colors group-hover:bg-brand-red"
            >
               <Terminal size={20} />
            </motion.div>
            <img
              src="/logo_v2.svg"
              alt="Lattara"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav - Monospace & Technical */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-200 border border-transparent ${
                    location.pathname === item.path
                      ? 'text-brand-red border-b-brand-red bg-red-50/50'
                      : 'text-gray-600 hover:text-brand-dark hover:border-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Sharp & High Contrast */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ x: 2, y: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/assessment"
                className="bg-brand-dark text-white px-6 py-2.5 text-sm font-mono hover:bg-brand-red transition-colors border border-transparent hover:border-red-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              >
                Start_Assessment
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-3 text-base font-mono text-gray-900 border-l-2 border-transparent hover:border-brand-red hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/assessment"
              className="block w-full text-center mt-4 bg-brand-dark text-white px-6 py-3 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Start_Assessment
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
