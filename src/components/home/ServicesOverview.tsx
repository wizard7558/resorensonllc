import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Database, BarChart3, GitBranch, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: 'MarTech Stack Optimization',
      description: 'Lead scoring, attribution modeling, and automation workflows that eliminate data silos and drive qualified pipeline.',
      features: ['Lead Scoring & Routing', 'Attribution Modeling', 'Workflow Automation', 'Integration Architecture']
    },
    {
      icon: Database,
      title: 'Data Infrastructure',
      description: 'CDP implementation, data warehousing, and pipeline architecture for unified customer data and actionable insights.',
      features: ['CDP Implementation', 'Data Warehousing', 'Pipeline Architecture', 'Data Governance']
    },
    {
      icon: BarChart3,
      title: 'Web Analytics & Reporting',
      description: 'GA4 setup, conversion tracking, and dashboard creation with governance frameworks for reliable decision-making.',
      features: ['GA4 Implementation', 'Conversion Tracking', 'Custom Dashboards', 'Data Governance']
    },
    {
      icon: GitBranch,
      title: 'Revenue Operations',
      description: 'Sales and marketing alignment through optimized lead lifecycle management and systematic revenue processes.',
      features: ['Sales/Marketing Alignment', 'Lead Lifecycle Optimization', 'Revenue Process Design', 'Performance Metrics']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive MarTech solutions focused on measurable business outcomes, 
            not just technical implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-500 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <service.icon className="h-8 w-8 group-hover:text-red-600 transition-colors" style={{ color: '#9D2235' }} />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9D2235' }}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className="inline-flex items-center space-x-2 hover:text-red-700 transition-colors font-medium"
                style={{ color: '#9D2235' }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;