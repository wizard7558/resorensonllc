import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Free 30-minute MarTech stack assessment',
    'Personalized optimization roadmap',
    'ROI projections based on your data',
    'No obligations or sales pressure'
  ];

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #9D2235, #374151)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your MarTech Stack?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Get a free assessment of your current technology stack and discover 
            opportunities for immediate improvement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                to="/assessment"
                className="w-full bg-white hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
                style={{ color: '#9D2235' }}
              >
                <span>Start Free Assessment</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-center block"
              >
                Schedule a Consultation
              </Link>
              
              <p className="text-red-100 text-sm">
                Typically responds within 4 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;