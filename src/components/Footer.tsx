import React from 'react';
import { Link } from 'react-router-dom';
import { File, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/RES Icon Transparent.png" 
                alt="RESorenson LLC Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-white">RESorenson LLC</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Turning marketing chaos into revenue-driving systems through strategic 
              MarTech optimization, data infrastructure, and analytics implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:riley@resorensonllc.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+19496327363" className="text-gray-400 hover:text-red-400 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-red-400 transition-colors">MarTech Stack Optimization</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Data Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Web Analytics & Reporting</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Revenue Operations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/case-studies" className="hover:text-red-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link to="/assessment" className="hover:text-red-400 transition-colors">Tech Stack Assessment</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RESorenson LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;