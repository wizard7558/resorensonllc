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

    // Load Calendly routing form integration
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/forms.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/forms.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.addEventListener('load', function() {
          if (window.Calendly) {
            window.Calendly.initHubspotForm({
              "id": "4474bab3-e337-4e40-ae85-a41d4c3ceed6",
              "url": "https://calendly.com/api/form_builder/forms/74fe6ff2-23ec-4c52-bbf9-0d74ca76aabb/submissions",
              "options": {
                "hide_event_type_details": 1,
                "hide_gdpr_banner": 1,
                "primary_color": "9d2235",
                "parentElement": "#hubspot-lead-form"
              }
            });
          }
        });
      };
    }
  }, []);

  const benefits = [
    'Gain full-funnel visibility',
    'Understand actual ROI',
    'Improve marketing/sales alignment'
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
        description="Get a free assessment of your marketing technology stack and discover exactly how to measure your marketing success%. Trusted by 85+ companies with $100M+ in revenue impact."
        keywords="free martech assessment, marketing technology audit, increase qualified leads, martech optimization, hubspot consultant"
        canonicalUrl="/landing"
        noIndex={true}
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Mobile: Form First, Desktop: Content First */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Stop Losing Qualified Leads in Your{' '}
                  <span style={{ color: '#9D2235' }}>MarTech Chaos</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Get a free assessment of your marketing technology stack and discover 
                  exactly how to measure your marketing success.
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
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-gray-200">
                {socialProof.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg sm:text-2xl font-bold" style={{ color: '#9D2235' }}>
                      {item.metric}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Form First, Desktop: Form Second */}
            <div className="order-1 lg:order-2 bg-white p-6 sm:p-8 rounded-lg border-2 shadow-lg" style={{ borderColor: '#9D2235' }}>
              {/* New headline above form */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Stop Losing Qualified Leads in Your{' '}
                  <span style={{ color: '#9D2235' }}>MarTech Chaos</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Get a free assessment of your marketing technology stack and discover 
                  exactly how to measure your marketing success.
                </p>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Free MarTech Assessment
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Book a 30-minute consultation to analyze your MarTech stack
                </p>
              </div>

              {/* HubSpot Form */}
              <div id="hubspot-lead-form" className="min-h-[400px]"></div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>30-minute call • Instant booking • No obligations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What You'll Get in Your Free Assessment Call
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Live MarTech Stack Review
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We'll analyze your current tools and identify immediate optimization opportunities.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Custom ROI Projections
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Get specific revenue impact estimates based on your current metrics and goals.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9D2235' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Actionable Next Steps
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Leave with a clear roadmap for immediate wins and long-term optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(to right, #9D2235, #374151)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Free Assessment?
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8">
            Book your 30-minute MarTech assessment call and discover exactly 
            how to increase your qualified leads by 200-400%.
          </p>
          
          <a
            href="#hubspot-lead-form"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg"
            style={{ color: '#9D2235' }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hubspot-lead-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Schedule Your Assessment Call</span>
            <ArrowRight size={20} />
          </a>
          
          <p className="text-red-100 text-xs sm:text-sm mt-4">
            30-minute call • Instant booking • No obligations
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
