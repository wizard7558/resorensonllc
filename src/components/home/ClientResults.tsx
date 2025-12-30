import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const ClientResults = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      name: 'DoorDash',
      metric: '+40% EFFICIENCY',
      detail: 'Rebuilt attribution across 12 channels. CAC efficiency improved by 40%.',
      tags: ['Attribution', 'Modeling']
    },
    {
      name: 'Reddit',
      metric: 'DATA_UNIFIED',
      detail: 'Unified performance data across acquisition channels with Data Engineering.',
      tags: ['Looker', 'Infrastructure']
    },
    {
      name: 'Edwards',
      metric: 'REAL_TIME_GOV',
      detail: 'Implemented Tealium CDP for unified profiles and healthcare compliance.',
      tags: ['CDP', 'Compliance']
    },
    {
      name: 'Penn Play',
      metric: 'EVENT_TAXONOMY',
      detail: 'Built Mixpanel architecture to measure behavior and monetization funnels.',
      tags: ['Mixpanel', 'Mobile']
    },
    {
      name: 'LMN',
      metric: 'CROSS_PLATFORM',
      detail: 'Deployed Segment CDP to unify fragmented marketing and product systems.',
      tags: ['Segment', 'Integration']
    },
    {
      name: 'Pebl',
      metric: '< 5% LEAKAGE',
      detail: 'Reduced lead leakage from 35% to <5% via automated routing protocols.',
      tags: ['Automation', 'Routing']
    }
  ];

  return (
    <section id="client-results" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Operational Logs</h2>
            <p className="text-gray-400 font-mono text-sm">Reviewing recent deployment outcomes.</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-brand-red font-mono text-xs">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span>SYSTEMS_OPTIMIZED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* List View */}
          <div className="lg:col-span-5 space-y-px bg-gray-800 border border-gray-800">
            {clients.map((client, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 flex items-center justify-between group transition-all duration-200 ${
                  activeIndex === index 
                    ? 'bg-brand-red text-white' 
                    : 'bg-brand-dark hover:bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span className="font-mono text-sm font-bold">{client.name}</span>
                <span className={`text-xs font-mono px-2 py-1 border ${
                    activeIndex === index ? 'border-white/30 bg-white/10' : 'border-gray-700'
                }`}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Detail View (Terminal Style) */}
          <div className="lg:col-span-7 bg-black border border-gray-800 p-8 font-mono relative min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>

            <div className="space-y-6 mt-8">
              <div className="text-gray-500 text-xs">
                > ACCESSING_LOG: {clients[activeIndex].name.toUpperCase()}
              </div>

              <div>
                <p className="text-brand-red text-xs mb-2">TARGET_OUTCOME</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {clients[activeIndex].metric}
                </h3>
              </div>

              <div className="border-l-2 border-brand-red/30 pl-6 py-2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{clients[activeIndex].detail}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800 flex gap-3">
                {clients[activeIndex].tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-900 px-3 py-1 border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 text-gray-700 text-xs animate-pulse">
               _CURSOR_ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
