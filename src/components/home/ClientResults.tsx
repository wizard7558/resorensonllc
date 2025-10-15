import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ClientResults = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      name: 'Edwards Lifesciences',
      logo: '/edwards.png',
      description: 'Implemented Tealium CDP to consolidate customer data across multiple marketing platforms. Established unified customer profiles and real-time data governance framework for healthcare compliance requirements.'
    },
    {
      name: 'Penn Interactive',
      logo: '/pngaming logo.png',
      description: 'Built Mixpanel analytics architecture for the Penn Play app. Created custom event taxonomy and tracking implementation to measure user behavior, feature adoption, and monetization funnels.'
    },
    {
      name: 'LMN',
      logo: '/LMN-Logo_Full-Color.webp',
      description: 'Designed and deployed Segment CDP infrastructure to unify customer data from fragmented marketing and product systems. Enabled real-time event tracking and cross-platform attribution.'
    },
    {
      name: 'Pebl',
      logo: '/pebl logo.webp',
      description: 'Engineered HubSpot/Salesforce integration with automated lead scoring and routing. Reduced lead leakage from 35% to under 5% and cut sales team response time to under 2 minutes.'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % clients.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, clients.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Client Results
          </h2>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <div className="relative px-12 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
              {getVisibleClients().map((client, index) => (
                <div 
                  key={`${client.name}-${currentIndex}-${index}`}
                  className="bg-white rounded-lg border-2 shadow-lg p-6 md:p-8 min-h-[340px] flex flex-col items-center justify-center transition-all duration-500"
                  style={{ borderColor: '#9D2235' }}
                >
                  <div className="flex items-center justify-center mb-6 h-16">
                    <img 
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[200px] object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200 z-20"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200 z-20"
            aria-label="Next client"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8' 
                    : 'w-2'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? '#9D2235' : '#D1D5DB'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;