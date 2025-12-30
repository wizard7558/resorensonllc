import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCode } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white border border-gray-200 shadow-sm mb-8 rounded-full">
           <FileCode size={20} className="text-brand-red mr-2" />
           <span className="text-gray-600 text-sm font-mono">READY_FOR_DEPLOYMENT</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
          Your data infrastructure is <br/>
          <span className="text-gray-400">waiting for an upgrade.</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
          Stop guessing where your leads are going. Let's architect a system that captures every dollar.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/assessment"
            className="inline-flex items-center justify-center bg-brand-red text-white px-8 py-4 text-sm font-mono hover:bg-red-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            INITIALIZE_AUDIT
            <ArrowRight className="ml-2" size={16} />
          </Link>
          <a
            href="https://meetings.hubspot.com/lattara/meet-with-riley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-8 py-4 text-sm font-mono hover:border-brand-dark hover:text-brand-dark transition-colors"
          >
            CONTACT_ENGINEER
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
