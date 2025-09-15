import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { CheckCircle, TrendingUp, Clock, Users, ArrowRight, Star, Target } from 'lucide-react';

const LandingPage = () => {
  // HubSpot form embed
  useEffect(() => {
    // Load HubSpot forms embed script if not already present
    if (!document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "45832447",
            formId: "4474bab3-e337-4e40-ae85-a41d4c3ceed6",
            region: "na1",
            target: "#hubspot-lead-form"
          });
        }
      };
    }
  }, []);

  const benefits = [
    'Increase qualified leads by 200-400%',
    'Reduce manual data entry by 85%',
    'Improve marketing/sales alignment',
    'Get complete ROI visibility'
  ];

  const socialProof = [
    { metric: '$100M+', label: 'Average Revenue Impact Generated' },
    { metric: '2.6x', label: 'Average ROAS Improvement' },
    { metric: '85+', label: 'Companies Transformed' }
  ];

  const testimonials = [
    {
      quote: "Our MQL-to-SQL conversion rate jumped from 12% to 41% in just 4 months.",
      author: "Sarah Chen, VP of Marketing"
    },
    {
      quote: "We now have complete visibility into our customer journey and achieved 2.6x ROAS improvement.",
      author: "David Rodriguez, CRO"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free MarTech Assessment - Transform Your Marketing Stack | RESorenson LLC"
        description="Get a free MarTech stack assessment and discover how to increase qualified leads by 200-400%. Trusted by 85+ companies with $100M+ in revenue impact."
        keywords="free martech assessment, marketing technology audit, increase qualified leads, martech optimization, hubspot consultant"
        canonicalUrl="/landing"
        noIndex={true}
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline & Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Stop Losing Qualified Leads in Your{' '}
                  <span style={{ color: '#9D2235' }}>MarTech Chaos</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get a free assessment of your marketing technology stack and discover 
                  exactly how to increase qualified leads by 200-400%.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: '#9D2235' }} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                {socialProof.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#9D2235' }}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="bg-white p-8 rounded-lg border-2 shadow-lg" style={{ borderColor: '#9D2235' }}>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free MarTech Assessment
                </h2>
                <p className="text-gray-600">
                  Discover exactly how to increase your qualified leads by 200-400%
                </p>
              </div>

              {/* HubSpot Form */}
              <div id="hubspot-lead-form"></div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>100% Free • No Spam • Instant Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join 85+ Companies That Transformed Their MarTech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-gray-500 text-sm">— {testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Get in Your Free Consultation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instant MarTech Analysis
              </h3>
              <p className="text-gray-600">
                Get immediate insights into your current MarTech stack with specific optimization recommendations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized ROI Report
              </h3>
              <p className="text-gray-600">
                Receive detailed projections showing potential revenue impact and timeline for improvements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Implementation Roadmap
              </h3>
              <p className="text-gray-600">
                Get a clear action plan for immediate wins and long-term MarTech optimization strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(to right, #9D2235, #374151)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Stop Losing Qualified Leads?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join the 85+ companies that have transformed their MarTech stack and 
            generated over $100M in additional revenue.
          </p>
          
          <a
            href="#hubspot-lead-form"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            style={{ color: '#9D2235' }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hubspot-lead-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Get Your Free Assessment</span>
            <ArrowRight size={20} />
          </a>
          
          <p className="text-red-100 text-sm mt-4">
            Instant results • No spam • 100% free
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;