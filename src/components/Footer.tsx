import React from 'react';
import { Link } from 'react-router-dom';
import { File, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lattara-logo-black.svg"
                alt="Lattara Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Turning marketing chaos into revenue-driving systems through strategic
              MarTech optimization, data infrastructure, and analytics implementation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rsorensondata/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:riley@lattara.com" className="text-gray-600 hover:text-red-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+19496327363" className="text-gray-600 hover:text-red-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/services" className="hover:text-red-600 transition-colors">MarTech Stack Optimization</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Data Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Web Analytics & Reporting</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Revenue Operations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:text-red-600 transition-colors">About Riley</Link></li>
              <li><Link to="/case-studies" className="hover:text-red-600 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-red-600 transition-colors">Blog</Link></li>
              <li><Link to="/assessment" className="hover:text-red-600 transition-colors">Tech Stack Assessment</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Lattara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;