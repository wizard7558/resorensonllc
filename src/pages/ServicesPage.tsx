import React from 'react';
import SEO from '../components/SEO';
import { generateFAQSchema } from '../data/structuredData';
import { Settings, Database, BarChart3, GitBranch, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const faqs = [
    {
      question: "How long does a typical MarTech optimization project take?",
      answer: "Most MarTech optimization projects take 3-6 months from strategy to full implementation, depending on the complexity of your current stack and desired outcomes."
    },
    {
      question: "What's the typical ROI improvement from MarTech optimization?",
      answer: "Our clients typically see 200-400% ROI improvements within 6 months, with lead conversion rates increasing by 150-340% and sales cycle reductions of 30-50%."
    },
    {
      question: "Do you work with specific MarTech platforms?",
      answer: "We specialize in HubSpot, Salesforce, Google Analytics 4, Segment, Snowflake, and other leading platforms. We're certified across major MarTech tools and can work with your existing stack."
    },
    {
      question: "Can you help with data migration between platforms?",
      answer: "Yes, we handle complete data migration projects including historical data preservation, field mapping, and validation to ensure no data loss during platform transitions."
    },
    {
      question: "What size companies do you typically work with?",
      answer: "We work with companies from high-growth startups to Fortune 500 enterprises. Our solutions scale based on your company size, budget, and growth trajectory."
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'MarTech Stack Optimization',
      description: 'Transform disconnected tools into a unified revenue engine through strategic integration and automation.',
      features: [
        'Lead Scoring & Routing Systems',
        'Multi-Touch Attribution Modeling',
        'Marketing Automation Workflows',
        'CRM Integration Architecture',
        'Campaign Performance Analytics',
        'A/B Testing Implementation'
      ],
      outcomes: [
        'Increase qualified lead conversion by 200-400%',
        'Reduce manual data entry by 85%',
        'Improve marketing/sales alignment',
        'Accelerate lead velocity by 45%'
      ],
      caseStudy: {
        client: 'B2B SaaS Company',
        challenge: 'Disconnected HubSpot and Salesforce with 30% lead leakage',
        solution: 'Custom integration with automated lead scoring and routing',
        result: '340% increase in MQL-to-SQL conversion rate'
      }
    },
    {
      icon: Database,
      title: 'Data Infrastructure',
      description: 'Build scalable data architecture that unifies customer data and enables real-time decision making.',
      features: [
        'Customer Data Platform (CDP) Implementation',
        'Data Warehouse Architecture',
        'Real-time Pipeline Development',
        'Data Governance Framework',
        'Identity Resolution Systems',
        'API Integration Management'
      ],
      outcomes: [
        'Unified customer view across all touchpoints',
        '99.9% data accuracy and consistency',
        'Real-time personalization capabilities',
        'Scalable architecture for growth'
      ],
      caseStudy: {
        client: 'E-commerce Platform',
        challenge: 'Fragmented customer data across 12 different systems',
        solution: 'Segment CDP with Snowflake data warehouse implementation',
        result: '95% improvement in attribution accuracy'
      }
    },
    {
      icon: BarChart3,
      title: 'Web Analytics & Reporting',
      description: 'Implement comprehensive analytics systems with custom dashboards and automated reporting.',
      features: [
        'Google Analytics 4 Setup & Migration',
        'Custom Conversion Tracking',
        'Executive Dashboard Creation',
        'Automated Reporting Systems',
        'Data Visualization Design',
        'Performance Monitoring Alerts'
      ],
      outcomes: [
        'Complete visibility into customer journey',
        'Real-time performance monitoring',
        'Data-driven decision making capability',
        'Automated stakeholder reporting'
      ],
      caseStudy: {
        client: 'Professional Services Firm',
        challenge: 'No visibility into marketing ROI or customer journey',
        solution: 'GA4 implementation with custom Looker dashboards',
        result: 'Increased marketing efficiency by 60%'
      }
    },
    {
      icon: GitBranch,
      title: 'Revenue Operations',
      description: 'Align sales and marketing processes through optimized lead management and revenue workflows.',
      features: [
        'Sales Process Optimization',
        'Lead Lifecycle Management',
        'Revenue Forecasting Systems',
        'Performance Metrics Framework',
        'Territory & Quota Management',
        'Compensation Plan Design'
      ],
      outcomes: [
        'Improved sales/marketing alignment',
        'Shortened sales cycles by 30-50%',
        'Increased forecast accuracy by 25%',
        'Higher win rates and deal sizes'
      ],
      caseStudy: {
        client: 'Technology Startup',
        challenge: 'Misaligned sales and marketing with 60-day sales cycle',
        solution: 'Implemented unified lead scoring and handoff process',
        result: '35% reduction in sales cycle length'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="MarTech Stack Optimization Services | HubSpot, Salesforce Integration"
        description="Expert MarTech consulting services: stack optimization, data infrastructure, web analytics, and revenue operations. Certified in HubSpot, Salesforce, GA4, and more."
        keywords="martech services, hubspot integration, salesforce consulting, data infrastructure, web analytics, revenue operations, marketing automation, lead scoring"
        canonicalUrl="/services"
        structuredData={generateFAQSchema(faqs)}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic MarTech Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that transform marketing chaos into revenue-driving systems 
              through strategic optimization and data-driven implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <service.icon className="h-12 w-12" style={{ color: '#9D2235' }} />
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#9D2235' }} />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Expected Outcomes</h3>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Case Study Highlight</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#9D2235' }}>Client</h4>
                      <p className="text-gray-600">{service.caseStudy.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Challenge</h4>
                      <p className="text-gray-600">{service.caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
                      <p className="text-gray-600">{service.caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Result</h4>
                      <p className="text-gray-600 font-semibold">{service.caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our MarTech consulting services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ color: '#9D2235' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#9D2235' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your MarTech Stack?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment of your current technology stack and discover 
            opportunities for immediate improvement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment"
              className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              style={{ color: '#9D2235' }}
            >
              <span>Start Free Assessment</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;