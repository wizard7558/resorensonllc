import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Marketing Stack Is{' '}
              <span style={{ color: '#9D2235' }}>
                Leaking Revenue
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most B2B companies lose 30-50% of qualified leads between marketing and sales. 
              I find where you're bleeding leads and fix it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/assessment"
              className="inline-block text-center text-white px-8 py-4 rounded-lg font-semibold transition-colors hover:opacity-90 no-underline text-lg"
              style={{ backgroundColor: '#9D2235' }}
            >
              Get Your Free Assessment
            </Link>

            <a
              href="#client-results"
              className="inline-block text-center border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors no-underline text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#client-results')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Client Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;