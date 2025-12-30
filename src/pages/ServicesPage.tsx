import React from 'react';
import SEO from '../components/SEO';
import { generateFAQSchema } from '../data/structuredData';
import { Settings, Database, BarChart3, GitBranch, ArrowRight, Terminal, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const ServicesPage = () => {
  const faqs = [
    {
      question: "TIMELINE_ESTIMATION",
      answer: "Standard optimization cycles run 3-6 months. Complexity of current infrastructure determines final velocity."
    },
    {
      question: "EXPECTED_ROI_CALCULATION",
      answer: "Clients typically verify 200-400% ROI within 6 months. Key metrics: 150-340% increase in lead conversion, 30-50% sales cycle reduction."
    },
    {
      question: "PLATFORM_COMPATIBILITY",
      answer: "Certified architecture for HubSpot, Salesforce, GA4, Segment, and Snowflake. We integrate with your existing stack; we don't force a rebuild."
    },
    {
      question: "DATA_MIGRATION_PROTOCOLS",
      answer: "Full-service migration including historical data preservation, field mapping, and validation. Zero data loss guarantee."
    }
  ];

  const services = [
    {
      id: "MOD_01",
      icon: Settings,
      title: 'MarTech Stack Optimization',
      description: 'Refactoring disconnected tools into a unified revenue engine. We identify bottlenecks and deploy automated routing logic.',
      features: [
        'Lead Scoring Algorithms',
        'Attribution Modeling v2',
        'Workflow Automation',
        'CRM Integration'
      ],
      caseStudy: {
        client: 'B2B_SAAS_CORP',
        metric: '+340% CONVERSION',
        detail: 'Resolved 30% lead leakage via custom Salesforce integration.'
      }
    },
    {
      id: "MOD_02",
      icon: Database,
      title: 'Data Infrastructure',
      description: 'Building the backbone of your revenue operation. Scalable architecture that unifies customer data for real-time activation.',
      features: [
        'CDP Implementation',
        'Warehouse Architecture',
        'Real-time Pipelines',
        'Identity Resolution'
      ],
      caseStudy: {
        client: 'ECOMMERCE_PLATFORM',
        metric: '95% ATTRIBUTION',
        detail: 'Consolidated 12 systems into Snowflake + Segment architecture.'
      }
    },
    {
      id: "MOD_03",
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Eliminating "gut feel" decision making. We implement comprehensive tracking to visualize the entire customer journey.',
      features: [
        'GA4 Migration & Setup',
        'Executive Dashboards',
        'Conversion Tracking',
        'Automated Reporting'
      ],
      caseStudy: {
        client: 'PRO_SERVICES_FIRM',
        metric: '+60% EFFICIENCY',
        detail: 'Deployed custom Looker dashboards for real-time ROI monitoring.'
      }
    },
    {
      id: "MOD_04",
      icon: GitBranch,
      title: 'Revenue Operations',
      description: 'Aligning Sales and Marketing through code and process. We optimize the handoff to ensure no lead is left behind.',
      features: [
        'Sales Process Logic',
        'Lifecycle Management',
        'Revenue Forecasting',
        'Territory Planning'
      ],
      caseStudy: {
        client: 'TECH_STARTUP',
        metric: '-35% SALES_CYCLE',
        detail: 'Unified lead scoring reduced time-to-close significantly.'
      }
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Services | MarTech Architecture & Engineering"
        description="Technical consulting for MarTech stacks. Data infrastructure, analytics implementation, and revenue operations optimization."
        keywords="martech services, hubspot integration, salesforce consulting, data infrastructure, web analytics, revenue operations"
        canonicalUrl="/services"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))}
      />

      {/* Header */}
      <div className="relative bg-gray-50 border-b border-gray-200 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.5]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-red/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-brand-red font-mono text-sm mb-6">
               <Terminal size={16} />
               <span>SYSTEM_CAPABILITIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
              Engineering Your <br/>
              Revenue Engine.
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
              We don't sell "marketing magic." We build the technical infrastructure that makes marketing work.
            </p>
          </div>
        </div>
      </div>

      {/* Service Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-100 pb-16 last:border-0">
                
                {/* Left: Icon & Meta */}
                <div className="lg:col-span-3">
                   <div className="w-16 h-16 bg-gray-50 flex items-center justify-center border border-gray-200 mb-6 group-hover:border-brand-red transition-colors">
                      <service.icon size={32} className="text-gray-700 group-hover:text-brand-red transition-colors" />
                   </div>
                   <div className="font-mono text-xs text-gray-400 mb-2">ID: {service.id}</div>
                   <h2 className="text-2xl font-bold text-brand-dark">{service.title}</h2>
                </div>

                {/* Middle: Description & Features */}
                <div className="lg:col-span-5">
                   <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {service.description}
                   </p>
                   
                   <h3 className="font-mono text-xs font-bold text-gray-900 uppercase mb-4">Deployed_Protocols</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 font-mono">
                            <span className="w-1 h-1 bg-brand-red"></span>
                            <span>{feature}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Right: Case Study / "Terminal" Output */}
                <div className="lg:col-span-4">
                   <div className="bg-gray-900 p-6 text-gray-300 font-mono text-sm h-full flex flex-col justify-between border-l-4 border-brand-red">
                      <div>
                         <div className="text-gray-500 text-xs mb-4">
                            // RECENT_DEPLOYMENT_LOG
                         </div>
                         <div className="mb-2">
                            <span className="text-brand-red">TARGET:</span> {service.caseStudy.client}
                         </div>
                         <div className="mb-4">
                            <span className="text-green-400">RESULT:</span> {service.caseStudy.metric}
                         </div>
                         <p className="text-gray-400 text-xs leading-relaxed border-t border-gray-800 pt-4">
                            "{service.caseStudy.detail}"
                         </p>
                      </div>
                   </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* FAQ Section - Technical Specs Style */}
      <div className="bg-gray-50 border-t border-gray-200 py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-dark mb-12 flex items-center">
                 <Cpu className="mr-3 text-brand-red" />
                 Technical_FAQ
              </h2>
            </Reveal>

            <div className="space-y-6">
               {faqs.map((faq, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className="bg-white border border-gray-200 p-6 hover:border-brand-dark transition-colors">
                       <h3 className="font-mono text-sm font-bold text-brand-red mb-3">
                          {`Q_${index + 1}: ${faq.question}`}
                       </h3>
                       <p className="text-gray-600 font-light leading-relaxed">
                          {faq.answer}
                       </p>
                    </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-dark py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center p-2 border border-gray-700 bg-gray-800/50 rounded-none mb-8">
                 <Network className="text-brand-red mr-2" size={16} />
                 <span className="text-gray-400 text-xs font-mono">SYSTEM_READY_FOR_OPTIMIZATION</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">
                 Ready to upgrade your infrastructure?
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link
                    to="/assessment"
                    className="bg-brand-red text-white px-8 py-4 text-sm font-mono hover:bg-red-700 transition-colors"
                 >
                    INITIALIZE_ASSESSMENT
                 </Link>
                 <Link
                    to="/contact"
                    className="bg-transparent border border-gray-600 text-white px-8 py-4 text-sm font-mono hover:bg-white hover:text-brand-dark transition-colors"
                 >
                    CONTACT_ENGINEERING
                 </Link>
              </div>
            </Reveal>
         </div>
      </div>

    </div>
  );
};

export default ServicesPage;