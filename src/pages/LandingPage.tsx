import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle, TrendingUp, Target, Shield, Activity, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const LandingPage = () => {
  const benefits = [
    'Gain full-funnel visibility',
    'Understand actual ROI',
    'Improve marketing/sales alignment'
  ];

  const socialProof = [
    { metric: '$100M+', label: 'REVENUE_IMPACT' },
    { metric: '2.6x', label: 'ROAS_LIFT' },
    { metric: '85+', label: 'SYSTEMS_OPTIMIZED' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Free MarTech Assessment - Transform Your Marketing Stack | Lattara"
        description="Get a free assessment of your marketing technology stack and discover exactly how to measure your marketing success%. Trusted by 85+ companies with $100M+ in revenue impact."
        keywords="free martech assessment, marketing technology audit, increase qualified leads, martech optimization, hubspot consultant"
        canonicalUrl="/landing"
        noIndex={true}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Content Column */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6 hidden lg:block">
                <div className="inline-block border border-brand-red text-brand-red px-3 py-1 text-xs font-mono mb-4 bg-red-50">
                   ALERT: REVENUE_LEAK_DETECTED
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
                  Stop Losing Qualified Leads in Your{' '}
                  <span className="text-brand-red bg-red-50 px-2">MarTech Chaos</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Get a free audit of your marketing technology stack. Identify bottlenecks. Fix attribution. Scale revenue.
                </p>
              </div>

              {/* Benefits List - Technical Check */}
              <div className="border-t border-b border-gray-200 py-6 space-y-4">
                <h3 className="font-mono text-xs font-bold text-gray-500 uppercase">System_Capabilities_Unlocked</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-red" />
                    <span className="text-lg text-brand-dark font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Metrics - Grid */}
              <div className="grid grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                {socialProof.map((item, index) => (
                  <div key={index} className="bg-white p-4 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-brand-dark font-mono">
                      {item.metric}
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="order-1 lg:order-2 bg-white p-1 rounded-none shadow-2xl shadow-gray-200/50 border border-gray-200" id="assessment-form">
               <div className="border border-gray-100 p-8">
                  {/* Mobile Headline */}
                  <div className="text-center mb-8 lg:hidden">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4 leading-tight">
                      Stop Losing Leads.
                    </h2>
                    <p className="text-gray-600">
                      Get a free assessment of your marketing technology stack.
                    </p>
                  </div>
                  
                  <div className="text-center mb-8 border-b border-gray-100 pb-6">
                    <div className="flex justify-center mb-4">
                       <Shield className="text-brand-red" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2 font-mono uppercase">
                      Initialize_Assessment
                    </h3>
                    <p className="text-sm text-gray-500">
                      Secure connection. 30-min diagnostic call.
                    </p>
                  </div>

                  {/* HubSpot Form Replacement */}
                  <LeadForm 
                    portalId="45832447" 
                    formId="4474bab3-e337-4e40-ae85-a41d4c3ceed6" 
                  />

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 text-xs font-mono text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>ENGINEER_AVAILABLE_NOW</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 font-mono">
              // DIAGNOSTIC_OUTPUT_PREVIEW
            </h2>
            <p className="text-gray-500">What you receive from the assessment protocol.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 hover:border-brand-red transition-colors group">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <Target className="h-6 w-6 text-brand-dark group-hover:text-brand-red" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">
                Live Stack Review
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Real-time analysis of your current toolset and integration points to identify immediate inefficiencies.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-brand-red transition-colors group">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <TrendingUp className="h-6 w-6 text-brand-dark group-hover:text-brand-red" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">
                ROI Projections
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Calculated revenue impact estimates based on your current metrics and goals.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-brand-red transition-colors group">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <Activity className="h-6 w-6 text-brand-dark group-hover:text-brand-red" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">
                Actionable Roadmap
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A prioritized list of architectural changes required to fix data leaks and enable automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">
            READY_TO_OPTIMIZE?
          </h2>
          <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
             Stop guessing. Start engineering your revenue growth.
          </p>
          
          <a
            href="#assessment-form"
            className="inline-flex items-center space-x-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-mono text-sm transition-colors shadow-lg shadow-red-900/20"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#assessment-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>SCHEDULE_ASSESSMENT</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;