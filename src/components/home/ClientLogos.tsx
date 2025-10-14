import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Reddit', logo: '/client-logos/reddit.png' },
    { name: 'DoorDash', logo: '/client-logos/doordash.png' },
    { name: 'Edwards', logo: '/client-logos/edwards.png' },
    { name: 'Rippling', logo: '/client-logos/rippling.png' },
    { name: 'Zenefits', logo: '/client-logos/zenefits.png' },
    { name: 'Uber', logo: '/client-logos/uber.png' },
    { name: 'Thumbtack', logo: '/client-logos/thumbtack.png' },
    { name: 'Headway', logo: '/client-logos/Headway_Logo_RGB_4.png' },
    { name: 'Velocity Global', logo: '/client-logos/velocity-global-logo-png_seeklogo-464875.png' },
    { name: 'Consensys', logo: '/client-logos/consensys@logotyp.us.png' },
    { name: 'Ramp', logo: '/client-logos/ramp@logotyp.us.png' },
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
