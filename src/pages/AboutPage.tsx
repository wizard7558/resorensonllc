import React from 'react';
import SEO from '../components/SEO';
import { Terminal, Award, Code, Database } from 'lucide-react';
import Reveal from '../components/Reveal';

const AboutPage = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.3]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />

      <SEO 
        title="About Riley Sorenson | MarTech Architect" 
        description="Riley Sorenson is a MarTech expert and Revenue Operations architect specializing in data infrastructure and analytics."
        canonicalUrl="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Image/Profile */}
          <div className="lg:col-span-4">
             <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-red/20 z-0"></div>
                {/* Replace with actual image path if available, utilizing placeholder logic for now */}
                <div className="relative z-10 bg-gray-100 aspect-[4/5] border border-gray-200 flex items-center justify-center overflow-hidden">
                   <img src="/RS Headshot.jpeg" alt="Riley Sorenson" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
             </div>
             
             <div className="mt-8 space-y-4">
                <Reveal delay={0.2}>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 border border-gray-200">
                     <Code className="text-brand-red" size={20} />
                     <div>
                        <p className="text-xs font-mono text-gray-500">CORE_COMPETENCY</p>
                        <p className="font-bold text-sm text-brand-dark">Full-Stack Data Architect</p>
                     </div>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                   <div className="flex items-center space-x-3 p-4 bg-gray-50 border border-gray-200">
                      <Database className="text-brand-red" size={20} />
                      <div>
                         <p className="text-xs font-mono text-gray-500">YEARS_ACTIVE</p>
                         <p className="font-bold text-sm text-brand-dark">10+ Years Exp.</p>
                      </div>
                   </div>
                </Reveal>
             </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 text-brand-red font-mono text-sm mb-6">
               <Terminal size={16} />
               <span>OPERATOR_PROFILE: RILEY_SORENSON</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8">
              I don't just advise.<br/>
              I build the infrastructure.
            </h1>

            <div className="prose prose-lg text-gray-600 font-light space-y-6 max-w-none">
              <p>
                In a world of "marketing gurus" who talk about brand feelings, I focus on the physics of your revenue engine. 
                My background isn't just in running campaigns—it's in engineering the systems that track them.
              </p>
              <p>
                I founded Lattara to solve a specific, expensive problem I saw at nearly every enterprise company: 
                <strong className="text-brand-dark font-medium"> The gap between Marketing's data and Sales' reality.</strong>
              </p>
              <p>
                Whether it was DoorDash's attribution modeling or Edwards Lifesciences' compliance data, the challenge is rarely 
                "we need better creative." It's almost always "we can't see what's working."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.4}>
                <h3 className="col-span-full font-mono text-sm font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">CERTIFIED_PROTOCOLS</h3>
                <ul className="space-y-2 font-mono text-sm text-gray-600">
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>HubSpot Architecture</li>
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>Salesforce Integration</li>
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>Segment CDP Implementation</li>
                </ul>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="md:mt-10">
                  <ul className="space-y-2 font-mono text-sm text-gray-600">
                     <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>Google Analytics 4 (Expert)</li>
                     <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>SQL / Data Warehousing</li>
                     <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-red mr-2"></span>Mixpanel / Amplitude</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
