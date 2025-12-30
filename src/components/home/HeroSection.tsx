import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Database, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-white border-b border-gray-200 overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.4]" />
      
      {/* Decorative gradient bleed */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] relative">
        
        {/* Left Content Area */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white/60 backdrop-blur-[2px]">
          
          <div className="inline-flex items-center space-x-2 border border-brand-red/20 bg-red-50 text-brand-red px-3 py-1.5 text-xs font-mono mb-8 w-fit tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span>SYSTEM_STATUS: REVENUE_LEAK_DETECTED</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-brand-dark tracking-tight mb-6 leading-[1.1]">
            Stop the <br />
            <span className="text-brand-red">
              Data Bleed.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
            Most B2B companies lose <span className="font-mono font-bold text-brand-dark bg-gray-100 px-1 border border-gray-200">30-50%</span> of qualified leads. We architect the infrastructure to capture them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/assessment"
              className="group inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 text-sm font-mono hover:bg-brand-red transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(157,34,53,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Start_Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>

            <a
              href="#client-results"
              className="group inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 px-8 py-4 text-sm font-mono hover:border-gray-900 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#client-results')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View_Protocols
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-gray-400 text-sm font-mono">
            <div className="flex items-center space-x-2">
               <Database size={16} /> <span>CDP_READY</span>
            </div>
            <div className="flex items-center space-x-2">
               <Zap size={16} /> <span>AUTO_SCALING</span>
            </div>
          </div>
        </div>

        {/* Right Visual Area - Abstract Dashboard */}
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center border-l border-gray-200 bg-gray-50/50">
           
           {/* Abstract Floating Cards */}
           <div className="relative w-80">
              {/* Back Card */}
              <div className="absolute top-4 -right-8 w-full bg-white border border-gray-200 p-6 shadow-xl opacity-60 scale-95 z-0">
                 <div className="h-2 bg-gray-200 w-1/3 mb-4"/>
                 <div className="space-y-2">
                    <div className="h-2 bg-gray-100 w-full"/>
                    <div className="h-2 bg-gray-100 w-full"/>
                 </div>
              </div>

              {/* Main Card */}
              <div className="relative z-10 bg-white border border-gray-200 p-6 shadow-2xl">
                 <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <span className="font-mono text-xs text-gray-500">MQL_TO_SQL_FLOW</span>
                    <Activity size={16} className="text-brand-red" />
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-xs text-gray-400 font-mono mb-1">CONVERSION_RATE</p>
                          <p className="text-3xl font-bold text-brand-dark">41.2%</p>
                       </div>
                       <span className="text-green-600 text-xs font-mono bg-green-50 px-2 py-1">+29.2%</span>
                    </div>

                    <div className="h-24 flex items-end space-x-2">
                       {[30, 45, 35, 60, 55, 75, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-brand-dark transition-all hover:bg-brand-red" style={{ height: `${h}%`, opacity: 0.1 + (i * 0.15) }} />
                       ))}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                       <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>PIPELINE_ACTIVE</span>
                       </div>
                    </div>
                 </div>
              </div>

               {/* Code snippet decoration */}
              <div className="absolute -bottom-12 -left-12 bg-brand-dark p-4 shadow-xl z-20 max-w-[240px]">
                 <div className="space-y-1 font-mono text-[10px] text-green-400">
                    <p>if (lead.score &gt; 80) &#123;</p>
                    <p className="pl-4">syncToSalesforce(lead);</p>
                    <p className="pl-4">notifySlack("NEW_SQL");</p>
                    <p>&#125;</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
