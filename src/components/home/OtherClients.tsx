import React from 'react';

const OtherClients = () => {
  const logos = [
    { name: 'Rippling', src: '/rippling.png' },
    { name: 'Uber', src: '/uber.png' },
    { name: 'Ramp', src: '/ramp.png' },
    { name: 'Thumbtack', src: '/thumbtack.png' },
    { name: 'SharkNinja', src: '/SharkNinja_Logo.jpg' },
    { name: 'Consensys', src: '/consensys logo.png' },
    { name: 'Headway', src: '/Headway_Logo_RGB_4.png' },
    { name: 'Sundae', src: '/Sundaelogo11_13_23.jpg' },
    { name: 'Splitero', src: '/Splitero-Logo.webp' },
    { name: 'Zenefits', src: '/zenefits.png' },
    { name: 'Excelligence', src: '/Excelligence-Logo.jpg' },
    { name: 'Zeck', src: '/zeck logo.webp' }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
           <div>
              <div className="font-mono text-xs text-brand-red mb-2">NETWORK_VALIDATION</div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
                Additional Engagements
              </h3>
           </div>
           <div className="hidden md:block font-mono text-xs text-gray-400">
              TOTAL_NODES: {logos.length}
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 border-r border-b border-gray-200 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:bg-gray-50"
            >
              <img 
                src={logo.src}
                alt={logo.name}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherClients;