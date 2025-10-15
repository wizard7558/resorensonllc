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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Main carousel container */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8 md:p-12 min-h-[320px] flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8 h-20">
              <img 
                src={clients[currentIndex].logo}
                alt={clients[currentIndex].name}
                className="max-h-full max-w-[280px] object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl">
              {clients[currentIndex].description}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next client"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
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