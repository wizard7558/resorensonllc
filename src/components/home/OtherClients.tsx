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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Also Trusted By
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={logo.src}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherClients;