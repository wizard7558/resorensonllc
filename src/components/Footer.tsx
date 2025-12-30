import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <img
                src="/lattara-logo-black.svg"
                alt="Lattara"
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Architecting revenue systems for high-growth B2B enterprises. 
              Preventing data leaks. Optimizing throughput.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rsorensondata/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:riley@lattara.com" className="text-gray-400 hover:text-brand-red transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+19496327363" className="text-gray-400 hover:text-brand-red transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-start-3">
            <h3 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">Protocols</h3>
            <ul className="space-y-3 text-sm font-mono text-gray-500">
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Stack_Optimization</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Data_Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Analytics_Reporting</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Revenue_Ops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider mb-6">System</h3>
            <ul className="space-y-3 text-sm font-mono text-gray-500">
              <li><Link to="/about" className="hover:text-brand-red transition-colors">Operator_Profile</Link></li>
              <li><Link to="/blog" className="hover:text-brand-red transition-colors">Dev_Log</Link></li>
              <li><Link to="/assessment" className="hover:text-brand-red transition-colors">System_Audit</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono">
          <p>&copy; 2025 LATTARA. SYSTEM_ONLINE.</p>
          <p>LOC: ORANGE_COUNTY_CA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
