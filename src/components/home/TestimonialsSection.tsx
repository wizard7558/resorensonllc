import React from 'react';
import { Star, TrendingUp, Users, Target } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'VP of Marketing',
      company: 'TechFlow Solutions',
      content: 'RESorenson transformed our chaotic MarTech stack into a revenue-generating machine. Our MQL-to-SQL conversion rate jumped from 12% to 41% in just 4 months.',
      metrics: {
        icon: TrendingUp,
        value: '2.6x',
        label: 'ROAS Improvement'
      }
    },
    {
      name: 'David Rodriguez',
      title: 'Chief Revenue Officer',
      company: 'ScaleUp Inc',
      content: 'The data infrastructure overhaul eliminated our attribution blind spots completely. We now have full visibility into our customer journey and can optimize with confidence.',
      metrics: {
        icon: Target,
        value: '95%',
        label: 'Attribution Accuracy'
      }
    },
    {
      name: 'Jennifer Park',
      title: 'Head of Operations',
      company: 'Growth Dynamics',
      content: 'Our lead scoring and routing automation reduced our sales cycle by 35% while improving lead quality. The ROI was immediate and continues to compound.',
      metrics: {
        icon: TrendingUp,
        value: '$100M+',
        label: 'Revenue Impact Generated'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real companies who transformed their marketing operations 
            with strategic MarTech optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-500 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <testimonial.metrics.icon className="h-6 w-6" style={{ color: '#9D2235' }} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{testimonial.metrics.value}</div>
                    <div className="text-sm text-gray-600">{testimonial.metrics.label}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.title}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;