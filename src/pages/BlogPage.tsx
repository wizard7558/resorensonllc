import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Clock, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import NewsletterForm from '../components/NewsletterForm';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const BlogPage = () => {
  const categories = ['ALL', 'STRATEGY', 'WEB_ANALYTICS', 'INTEGRATION', 'DATA_MANAGEMENT', 'ANALYTICS', 'PLATFORM_REVIEW'];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Engineering Logs | MarTech Insights"
        description="Technical guides and strategic insights for marketing infrastructure."
        keywords="martech blog, ga4 migration, attribution modeling, marketing automation"
        canonicalUrl="/blog"
        ogType="blog"
      />
      
      {/* Header */}
      <div className="relative bg-gray-50 border-b border-gray-200 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.5]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-red/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-brand-red font-mono text-sm mb-6">
               <Terminal size={16} />
               <span>SYSTEM_LOGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
              Technical Briefs & <br/>
              Strategic Protocols.
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
              Engineering-grade insights for the modern revenue architect.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup - Technical Style */}
      <div className="border-b border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="max-w-xl">
                <h2 className="text-lg font-bold text-brand-dark font-mono uppercase mb-2">
                   Subscribe_To_Updates
                </h2>
                <p className="text-gray-600 text-sm">
                   Receive weekly optimization protocols and system alerts directly to your inbox.
                </p>
             </div>
             <div className="w-full md:w-auto flex-1 max-w-md">
                <NewsletterForm 
                  portalId="45832447" 
                  formId="6470b071-68f5-4c52-8264-5c83cab75259" 
                />
             </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10 opacity-95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-6 py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-xs font-mono whitespace-nowrap transition-colors ${
                  category === 'ALL'
                    ? 'text-brand-red font-bold'
                    : 'text-gray-500 hover:text-brand-dark'
                }`}
              >
                [{category}]
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="lg:col-span-2 group cursor-pointer">
                <Reveal>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="border border-gray-200 bg-white p-8 h-full hover:border-brand-red transition-all duration-300 relative cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-mono px-3 py-1">
                       FEATURED_ENTRY
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-6 text-xs font-mono text-gray-400">
                       <span>{new Date(post.date).toISOString().split('T')[0]}</span>
                       <span>//</span>
                       <span className="text-brand-red">{post.category}</span>
                    </div>

                    <h2 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors">
                      <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs font-mono text-gray-500 border-t border-gray-100 pt-4">
                      <Clock size={14} className="mr-2" />
                      {post.readTime}
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            ))}

            {/* Regular Posts Column */}
            <div className="space-y-8">
              {blogPosts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="border border-gray-200 bg-white p-6 hover:border-brand-dark transition-all duration-300 group cursor-pointer"
                  >
                    <div className="mb-3 text-xs font-mono text-gray-400 flex justify-between">
                       <span className="text-brand-red">{post.category}</span>
                       <span>{new Date(post.date).toISOString().split('T')[0]}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors leading-tight">
                      <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                     <div className="text-xs font-mono text-gray-400">
                        EST_TIME: {post.readTime}
                     </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
        </div>

        {/* Remaining Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            {blogPosts.filter(post => !post.featured).slice(3).map((post, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="border border-gray-200 bg-white p-6 hover:border-brand-dark transition-all duration-300 group cursor-pointer"
                >
                   <div className="mb-3 text-xs font-mono text-gray-400 flex justify-between">
                       <span className="text-brand-red">{post.category}</span>
                       <span>{new Date(post.date).toISOString().split('T')[0]}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors leading-tight">
                      <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                     <div className="text-xs font-mono text-gray-400">
                        EST_TIME: {post.readTime}
                     </div>
                </motion.div>
              </Reveal>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <Reveal>
        <div className="bg-brand-dark py-20 text-white border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Implementation Support?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light">
              Theory is useful, but execution generates revenue. Our engineering team is ready to deploy these protocols.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-red text-white px-8 py-3 font-mono text-sm hover:bg-red-700 transition-colors"
              >
                SCHEDULE_CONSULT
              </Link>
              
              <Link
                to="/assessment"
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 font-mono text-sm transition-colors"
              >
                RUN_AUDIT
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default BlogPage;
