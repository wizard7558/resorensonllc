import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, Clock, Terminal, Share2, Tag } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      // Optional: Redirect to blog index if not found, or show 404 state
      // navigate('/blog'); 
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-mono text-brand-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404: ENTRY_NOT_FOUND</h1>
          <p className="mb-8">The requested system log does not exist.</p>
          <Link to="/blog" className="bg-brand-dark text-white px-6 py-3 hover:bg-brand-red transition-colors">
            RETURN_TO_INDEX
          </Link>
        </div>
      </div>
    );
  }

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Riley Sorenson"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lattara",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lattara.com/lattara-logo-black.svg"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Lattara Engineering Log`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        structuredData={articleSchema}
      />

      {/* Reading Progress Bar (Optional - simplistic version) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100">
         <div className="h-full bg-brand-red" id="progress-bar" style={{ width: '0%' }}></div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Navigation / Meta Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
           <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-red font-mono text-xs mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              RETURN_TO_LOGS
           </Link>

           <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-6">
              <span className="flex items-center text-brand-red font-bold">
                 <Terminal size={14} className="mr-1" />
                 {post.category}
              </span>
              <span className="flex items-center">
                 <Calendar size={14} className="mr-1" />
                 {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                 <Clock size={14} className="mr-1" />
                 {post.readTime}
              </span>
           </div>

           <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
             {post.title}
           </h1>

           <p className="text-xl text-gray-600 font-light leading-relaxed border-l-4 border-brand-red pl-6">
              {post.excerpt}
           </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg prose-gray max-w-none font-sans prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline prose-code:text-brand-red prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-none prose-pre:border-l-4 prose-pre:border-brand-red">
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-gray-200">
           <div className="flex justify-between items-center">
              <div className="text-xs font-mono text-gray-400">
                 END_OF_LOG
              </div>
              <div className="flex space-x-4">
                 <button className="flex items-center text-gray-500 hover:text-brand-red transition-colors text-sm font-mono">
                    <Share2 size={16} className="mr-2" />
                    SHARE_PROTOCOL
                 </button>
              </div>
           </div>
        </div>

      </article>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
               Need help executing this?
            </h3>
            <p className="text-gray-600 mb-8">
               Our engineering team specializes in implementing these exact protocols.
            </p>
            <Link to="/contact" className="inline-block bg-brand-red text-white px-8 py-3 font-mono text-sm hover:bg-red-700 transition-colors">
               CONTACT_ENGINEERING
            </Link>
         </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
