import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Reddit', logo: '/reddit.png' },
    { name: 'DoorDash', logo: '/doordash.png' },
    { name: 'Edwards', logo: '/edwards.png' },
    { name: 'Rippling', logo: '/rippling.png' },
    { name: 'Zenefits', logo: '/zenefits.png' },
    { name: 'Uber', logo: '/uber.png' },
    { name: 'Thumbtack', logo: '/thumbtack.png' },
    { name: 'Headway', logo: '/Headway_Logo_RGB_4.png' },
    { name: 'Velocity Global', logo: '/velocity-global-logo-png_seeklogo-464875.png' },
    { name: 'Consensys', logo: '/consensys@logotyp.us.png' },
    { name: 'Ramp', logo: '/ramp@logotyp.us.png' },
    { name: 'Zeck', logo: '/zeck logo.webp' },
    { name: 'Pebl', logo: '/pebl logo.webp' },
    { name: 'Splitero', logo: '/Splitero-Logo.webp' },
    { name: 'Hex', logo: '/hex.png' }
  ];

  const doubledClients = [...clients, ...clients];

  return (
    <div className="py-8 border-t border-b border-gray-200 bg-white overflow-hidden">
      <div className="relative">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <div className="flex items-center gap-16 animate-scroll">
          {doubledClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center h-12 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
