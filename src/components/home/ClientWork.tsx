import React from 'react';

const ClientWork = () => {
  const clients = [
    {
      name: 'DoorDash',
      logo: '/doordash.png',
      description: 'Rebuilt marketing attribution model across 12 acquisition channels. Result: 40% improvement in CAC efficiency.'
    },
    {
      name: 'Reddit',
      logo: '/reddit.png',
      description: 'Built paid marketing attribution and reporting infrastructure in Looker. Unified performance data across multiple acquisition channels working alongside their data engineering team.'
    },
    {
      name: 'LMN',
      logo: '/LMN-Logo_Full-Color.webp',
      description: 'Designed and deployed Segment CDP infrastructure to unify customer data from fragmented marketing and product systems. Enabled real-time event tracking and cross-platform attribution.'
    },
    {
      name: 'Penn Interactive',
      logo: '/pngaming logo.png',
      description: 'Built Mixpanel analytics architecture for the Penn Play app. Created custom event taxonomy and tracking implementation to measure user behavior, feature adoption, and monetization funnels.'
    },
    {
      name: 'Velocity Global (now Pebl)',
      logo: '/pebl logo.webp',
      description: 'Engineered HubSpot/Salesforce integration with automated lead scoring and routing. Reduced lead leakage from 35% to under 5% and cut sales team response time to under 2 minutes.'
    },
    {
      name: 'Edwards Lifesciences',
      logo: '/edwards.png',
      description: 'Implemented Tealium CDP to consolidate customer data across multiple marketing platforms. Established unified customer profiles and real-time data governance framework for healthcare compliance requirements.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-center mb-6 h-16">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-[200px] object-contain"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;