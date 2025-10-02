import React from 'react';
import SEO from '../components/SEO';
import { TrendingUp, Target, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'B2B SaaS Lead Generation Transformation',
      client: 'TechFlow Solutions',
      industry: 'B2B SaaS',
      timeframe: '4 months',
      challenge: 'Disconnected HubSpot and Salesforce systems causing 30% lead leakage and poor attribution visibility. Marketing qualified leads were not converting to sales qualified leads effectively.',
      solution: 'Implemented unified lead scoring system with automated routing, custom HubSpot-Salesforce integration, and multi-touch attribution modeling. Created real-time dashboards for sales and marketing alignment.',
      results: [
        { metric: 'MQL to SQL Conversion', before: '12%', after: '41%', improvement: '340%' },
        { metric: 'Lead Response Time', before: '4 hours', after: '15 minutes', improvement: '94%' },
        { metric: 'Sales Cycle Length', before: '45 days', after: '28 days', improvement: '38%' },
        { metric: 'Revenue Attribution', before: '35%', after: '95%', improvement: '171%' }
      ],
      techStack: ['HubSpot', 'Salesforce', 'Zapier', 'Google Analytics', 'Looker'],
      testimonial: {
        quote: 'Lattara transformed our chaotic MarTech stack into a revenue-generating machine. The results speak for themselves.',
        author: 'Sarah Chen, VP of Marketing'
      }
    },
    {
      title: 'E-commerce Customer Data Unification',
      client: 'RetailMax',
      industry: 'E-commerce',
      timeframe: '6 months',
      challenge: 'Customer data fragmented across 12 different systems including Shopify, email platforms, social media, and analytics tools. No single source of truth for customer behavior and attribution.',
      solution: 'Implemented Segment CDP with Snowflake data warehouse, unified customer identity resolution, and real-time personalization engine. Created automated customer journey mapping and predictive analytics.',
      results: [
        { metric: 'Customer LTV', before: '$145', after: '$280', improvement: '93%' },
        { metric: 'Email Open Rates', before: '18%', after: '34%', improvement: '89%' },
        { metric: 'Cart Abandonment Recovery', before: '12%', after: '28%', improvement: '133%' },
        { metric: 'Data Processing Time', before: '24 hours', after: '5 minutes', improvement: '99%' }
      ],
      techStack: ['Segment', 'Snowflake', 'Shopify', 'Klaviyo', 'Google Analytics', 'Tableau'],
      testimonial: {
        quote: 'Finally having a unified view of our customers has transformed how we approach marketing and product development.',
        author: 'Michael Torres, Chief Data Officer'
      }
    },
    {
      title: 'Professional Services Revenue Operations',
      client: 'Strategic Consulting Group',
      industry: 'Professional Services',
      timeframe: '5 months',
      challenge: 'Misaligned sales and marketing processes with no visibility into ROI. 60-day sales cycles with poor forecasting accuracy and manual reporting consuming 20+ hours per week.',
      solution: 'Implemented comprehensive revenue operations system with Pardot automation, Salesforce optimization, and custom reporting dashboards. Created lead lifecycle management and territory optimization.',
      results: [
        { metric: 'Sales Cycle Length', before: '60 days', after: '39 days', improvement: '35%' },
        { metric: 'Forecast Accuracy', before: '65%', after: '91%', improvement: '40%' },
        { metric: 'Marketing ROI Visibility', before: '0%', after: '100%', improvement: '100%' },
        { metric: 'Manual Reporting Hours', before: '20 hours/week', after: '2 hours/week', improvement: '90%' }
      ],
      techStack: ['Pardot', 'Salesforce', 'Google Analytics', 'Looker', 'Zapier'],
      testimonial: {
        quote: 'The revenue operations overhaul has given us complete visibility and control over our sales process.',
        author: 'Jennifer Park, Head of Operations'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="MarTech Success Stories & Case Studies | Proven Results"
        description="Real MarTech transformation case studies showing 200-400% ROI improvements. See how we optimize HubSpot, Salesforce, and data infrastructure for B2B companies."
        keywords="martech case studies, hubspot success stories, salesforce optimization results, data infrastructure case studies, revenue operations success, martech roi"
        canonicalUrl="/case-studies"
        ogType="article"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies & Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from real companies. See how strategic MarTech optimization 
              drives measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h2>
                      <div className="flex items-center space-x-6 text-gray-600">
                        <span className="flex items-center space-x-2">
                          <Target className="h-4 w-4" />
                          <span>{study.industry}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{study.timeframe}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4" style={{ color: '#9D2235' }}>Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4" style={{ color: '#9D2235' }}>Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h3 className="text-xl font-semibold mb-6" style={{ color: '#9D2235' }}>Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                          <div className="text-sm text-gray-500 mb-2">{result.metric}</div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Before:</span>
                              <span className="text-gray-600">{result.before}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">After:</span>
                              <span className="text-gray-900 font-semibold">{result.after}</span>
                            </div>
                            <div className="flex justify-between text-sm font-semibold">
                              <span style={{ color: '#9D2235' }}>Improvement:</span>
                              <span style={{ color: '#9D2235' }}>+{result.improvement}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-lg italic mb-4">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="text-gray-500">
                      — {study.testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#9D2235' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Every successful project starts with understanding your current state. 
            Get a free assessment of your MarTech stack today.
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

export default CaseStudiesPage;