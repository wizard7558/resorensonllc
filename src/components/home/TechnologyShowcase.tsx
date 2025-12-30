import React from 'react';
import { Database, Share2, Layers, Box, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal';

const TechnologyShowcase = () => {
  const categories = [
    {
      id: 'CRM_AUTO',
      icon: Layers,
      name: 'CRM & Automation',
      stack: ['HubSpot', 'Salesforce', 'Zoho']
    },
    {
      id: 'ANALYTICS',
      icon: Box,
      name: 'Analytics Engine',
      stack: ['GA4', 'Mixpanel', 'Amplitude']
    },
    {
      id: 'CDP_CORE',
      icon: Database,
      name: 'Customer Data Platforms',
      stack: ['Segment', 'Tealium', 'Customer.io']
    },
    {
      id: 'DATA_WH',
      icon: Cpu,
      name: 'Data Warehousing',
      stack: ['Snowflake', 'BigQuery', 'Redshift']
    },
    {
      id: 'BI_VIZ',
      icon: Share2,
      name: 'Business Intelligence',
      stack: ['Tableau', 'Looker', 'Hex']
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center md:text-left">
            <div className="inline-block px-2 py-1 bg-gray-100 border border-gray-200 text-xs font-mono text-gray-500 mb-4">
              :: SYSTEM_INTEGRATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Certified Tech Stack Support
            </h2>
            <p className="text-gray-600 max-w-2xl font-light">
              We possess deep architectural knowledge of the following platforms. 
              We don't just "use" them; we engineer them to talk to each other.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {categories.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.1}>
              <motion.div 
                whileHover={{ backgroundColor: '#F8FAFC' }}
                className="bg-white p-8 transition-colors group h-full"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 bg-gray-100 text-gray-600 group-hover:bg-brand-red group-hover:text-white transition-colors"
                  >
                    <cat.icon size={20} />
                  </motion.div>
                  <span className="font-mono text-xs text-gray-400 group-hover:text-brand-red">
                    {cat.id}
                  </span>
                </div>
                
                <h3 className="font-bold text-brand-dark mb-4">{cat.name}</h3>
                
                <ul className="space-y-2">
                  {cat.stack.map((tool) => (
                    <li key={tool} className="flex items-center space-x-2 text-sm text-gray-600 font-mono">
                      <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-brand-red" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
          
          <Reveal delay={categories.length * 0.1}>
            <div className="bg-gray-50 p-8 flex items-center justify-center h-full">
               <div className="text-center">
                  <p className="font-mono text-xs text-gray-400 mb-2">NEED_CUSTOM_INTEGRATION?</p>
                  <a href="/contact" className="text-brand-red font-mono text-sm hover:underline border-b border-brand-red pb-0.5">
                     REQUEST_SPEC &gt;
                  </a>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
