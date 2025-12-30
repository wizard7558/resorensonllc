import React from 'react';

const ROICounter = () => {
  return (
    <section className="bg-white border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg text-gray-500 font-mono mb-2">TOTAL_REVENUE_IMPACT_GENERATED</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Cumulative value of pipeline recovered and efficiency gained across all client engagements.
            </p>
          </div>
          
          <div className="flex items-baseline space-x-4">
             <span className="text-6xl md:text-8xl font-bold font-mono tracking-tighter text-brand-dark">
                $100M<span className="text-brand-red">+</span>
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICounter;
