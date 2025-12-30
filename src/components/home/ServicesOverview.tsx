import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Database, BarChart3, GitBranch, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      code: 'MOD_01',
      title: 'Stack Optimization',
      description: 'Lead scoring, attribution modeling, and workflows to eliminate data silos.',
      features: ['Lead_Scoring', 'Attribution_v2', 'Auto_Routing']
    },
    {
      icon: Database,
      code: 'MOD_02',
      title: 'Data Infrastructure',
      description: 'CDP implementation and warehousing for unified customer profiles.',
      features: ['CDP_Deploy', 'Warehousing', 'Governance']
    },
    {
      icon: BarChart3,
      code: 'MOD_03',
      title: 'Analytics & Reporting',
      description: 'GA4 setup and conversion tracking for reliable decision-making.',
      features: ['GA4_Setup', 'Dashboards', 'Tracking_Pixels']
    },
    {
      icon: GitBranch,
      code: 'MOD_04',
      title: 'RevOps Alignment',
      description: 'Systematic revenue processes bridging sales and marketing gaps.',
      features: ['Lifecycle_Mgmt', 'SLA_Design', 'Funnel_Metrics']
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Core System Modules
            </h2>
            <p className="text-lg text-gray-600 font-light">
              We don't just "consult." We deploy engineering-grade solutions to fix your revenue infrastructure.
            </p>
          </div>
          <div className="hidden md:block">
            <Link to="/services" className="text-brand-red font-mono text-sm flex items-center hover:underline">
              FULL_SERVICE_CATALOG <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 border border-gray-200 hover:border-brand-red transition-all duration-300 group shadow-sm hover:shadow-md relative overflow-hidden"
            >
              {/* Technical Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-red-50" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 border border-gray-100 group-hover:border-brand-red/30 transition-colors">
                  <service.icon className="h-6 w-6 text-gray-700 group-hover:text-brand-red" />
                </div>
                <span className="font-mono text-xs text-gray-400 group-hover:text-brand-red">{service.code}</span>
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs font-mono bg-gray-50 text-gray-600 px-2 py-1 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
