import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'GA4 Migration: Complete Implementation Guide for B2B Companies',
      excerpt: 'Step-by-step guide to migrating from Universal Analytics to GA4 without losing historical data or breaking your attribution models.',
      date: '2025-01-15',
      readTime: '12 min read',
      category: 'Web Analytics',
      featured: true
    },
    {
      title: 'The MarTech Stack Audit: 15 Critical Questions Every CMO Should Ask',
      excerpt: 'Comprehensive checklist for evaluating your marketing technology stack effectiveness and identifying optimization opportunities.',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Strategy'
    },
    {
      title: 'HubSpot to Salesforce Integration: Common Pitfalls and Solutions',
      excerpt: 'Avoid the most common mistakes when connecting HubSpot and Salesforce. Real-world examples and proven solutions.',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Integration'
    },
    {
      title: 'Data Governance in MarTech: Building Trust in Your Customer Data',
      excerpt: 'Essential framework for implementing data governance policies that ensure data quality and compliance across your MarTech stack.',
      date: '2025-01-01',
      readTime: '15 min read',
      category: 'Data Management'
    },
    {
      title: 'Attribution Modeling Beyond First-Touch: Advanced Strategies',
      excerpt: 'Move beyond basic attribution with custom models that accurately reflect your customer journey and marketing impact.',
      date: '2024-12-28',
      readTime: '11 min read',
      category: 'Analytics'
    },
    {
      title: 'Marketo vs Pardot vs HubSpot: 2025 Platform Comparison',
      excerpt: 'In-depth comparison of leading marketing automation platforms with recommendations based on company size and use cases.',
      date: '2024-12-20',
      readTime: '18 min read',
      category: 'Platform Review'
    }
  ];

  const categories = ['All', 'Strategy', 'Web Analytics', 'Integration', 'Data Management', 'Analytics', 'Platform Review'];

  // HubSpot form embed
  useEffect(() => {
    // Check if the script is already present
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/45832447.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/45832447.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="MarTech Strategy Blog | Analytics, Attribution & Automation Insights"
        description="Expert insights on MarTech optimization, GA4 implementation, attribution modeling, and marketing automation. Strategic guides for B2B marketing technology."
        keywords="martech blog, ga4 migration, attribution modeling, marketing automation, hubspot tips, salesforce integration, data governance, martech strategy"
        canonicalUrl="/blog"
        ogType="blog"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MarTech Insights & Strategies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic insights, implementation guides, and industry analysis to help you 
              optimize your marketing technology stack and drive revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-100 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on MarTech Trends
            </h2>
            <p className="text-gray-600 mb-6">
              Get weekly insights on MarTech optimization, new platform features, and industry best practices.
            </p>
            
            {/* HubSpot Newsletter Form */}
            <div className="max-w-md mx-auto">
              <div 
                className="hs-form-frame" 
                data-region="na1" 
                data-form-id="6470b071-68f5-4c52-8264-5c83cab75259" 
                data-portal-id="45832447"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                }`}
                style={category === 'All' ? { backgroundColor: '#9D2235' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:border-blue-500 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-orange-400" />
                      <span className="text-orange-400 font-medium">Featured</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:opacity-80 transition-colors" style={{ color: '#9D2235' }}>
                      <Link to="#" className="block">{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <span className="text-white px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#9D2235' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Regular Posts */}
            <div className="space-y-6">
              {blogPosts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:opacity-80 transition-colors" style={{ color: '#9D2235' }}>
                    <Link to="#" className="block">{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500 text-xs">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Posts Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).slice(3).map((post, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:opacity-80 transition-colors" style={{ color: '#9D2235' }}>
                  <Link to="#" className="block">{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-gray-500 text-xs">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
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
            Need Help Implementing These Strategies?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance on implementing the strategies discussed in our blog posts. 
            Schedule a free consultation to discuss your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              style={{ color: '#9D2235' }}
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link
              to="/assessment"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
