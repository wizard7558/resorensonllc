import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Reddit', logo: '/reddit.png' },
    { name: 'DoorDash', logo: '/doordash.png' },
    { name: 'Edwards', logo: '/edwards.png' },
    { name: 'Rippling', logo: '/rippling.png' },
  ];

  return (
    <div className="py-8 border-t border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12 flex-wrap grayscale opacity-60">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center h-12">
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
