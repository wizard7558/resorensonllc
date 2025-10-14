import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const HeroSection = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    conversion: 0,
    revenue: 0,
    leads: 0,
    efficiency: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        conversion: Math.min(prev.conversion + 1, 150),
        revenue: Math.min(prev.revenue + 50000, 2500000),
        leads: Math.min(prev.leads + 10, 850),
        efficiency: Math.min(prev.efficiency + 1, 65)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Turning Marketing{' '}
                <span style={{ color: '#9D2235' }}>
                  Chaos
                </span>{' '}
                into Revenue-Driving{' '}
                <span className="text-gray-600">
                  Systems
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                Strategic MarTech optimization, data infrastructure design, and analytics 
                implementation that delivers measurable business outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Link
                to="/assessment"
                className="inline-block text-center text-white px-8 py-3 rounded-lg font-medium transition-colors hover:opacity-90 no-underline"
                style={{ backgroundColor: '#9D2235' }}
              >
                Free Tech Stack Assessment →
              </Link>

              <Link
                to="/contact"
                className="inline-block text-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors no-underline"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5" style={{ color: '#9D2235' }} />
                <span className="text-sm text-gray-600">Conversion Rate Improvement</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                +{animatedMetrics.conversion}%
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Average Revenue Impact</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ${(animatedMetrics.revenue / 1000000).toFixed(1)}M
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Qualified Leads</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                +{animatedMetrics.leads}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Efficiency Gain</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                +{animatedMetrics.efficiency}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
