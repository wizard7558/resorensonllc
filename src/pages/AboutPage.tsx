import React from 'react';
import SEO from '../components/SEO';
import { Award, TrendingUp, Users, Target, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const certifications = [
    'Google Analytics Certified',
    'Google Ads Certified', 
    'Microsoft Excel Certified',
    'B2B Marketing Specialist'
  ];

  const achievements = [
    {
      icon: Award,
      title: 'All-Pac-12 Honorable Mention',
      description: 'Recognition for exceptional performance as WSU starting center'
    },
    {
      icon: Target,
      title: 'Rimington Award Watch List',
      description: 'Named among the nation\'s top centers in college football'
    },
    {
      icon: Star,
      title: 'Athletic Director\'s Star Performer',
      description: 'Academic excellence while competing at Division I level'
    },
    {
      icon: Users,
      title: 'Pac-12 Sportsmanship Award',
      description: 'Leadership and character recognition during senior season'
    }
  ];

  const businessMetrics = [
    { value: '$100M+', label: 'Revenue Generated' },
    { value: '85+', label: 'Client Engagements' },
    { value: '33', label: 'Games Started' },
    { value: '4', label: 'Years Division I' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Riley Sorenson | MarTech Consultant & Former D1 Athlete"
        description="Meet Riley Sorenson: from WSU All-Pac-12 center to marketing analytics expert. Proven resilience, data-driven growth strategies, and leadership through adversity."
        keywords="riley sorenson, martech consultant, wsu football, marketing analytics, resilience leadership, growth consultant, pac-12 athlete"
        canonicalUrl="/about"
        ogType="profile"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The resilient center who transforms adversity into strategic growth
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Riley Sorenson brings a unique combination of data-driven marketing expertise, 
              battle-tested leadership, and genuine human connection to growth-stage companies.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {businessMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#9D2235' }}>
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            RESorenson LLC has served clients of all sizes and industries, generating
            over $100M in new revenue across 85+ client engagements. Notable clients
            include DoorDash, Rippling, Uber, Reddit, and Penn Interactive. 
          </p>
        </div>
      </section>

      {/* From Gridiron to Growth */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From the gridiron to growth metrics
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Riley's journey from Washington State University's football field to Silicon Valley's 
                  marketing analytics ecosystem demonstrates extraordinary resilience and adaptability. 
                  As WSU's starting center from 2013-2016, Riley earned <strong>All-Pac-12 Honorable Mention</strong> honors 
                  and a spot on the prestigious <strong>Rimington Award Watch List</strong> for the nation's top centers.
                </p>
                <p>
                  Standing 6'4" and anchoring the offensive line for 33 starts, teammates nicknamed him 
                  <strong>"The Wizard"</strong> for his exceptional analytical abilities and natural teaching skills – 
                  qualities that would prove prophetic for his business career.
                </p>
                <p>
                  His Economics degree from WSU, completed in 2017, provided the quantitative foundation 
                  for his analytics expertise. Riley earned the <strong>Athletic Director's Star Performer Award</strong> for 
                  academic excellence, balancing advanced coursework with Division I athletics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <achievement.icon className="h-8 w-8 mb-4" style={{ color: '#9D2235' }} />
                  <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Credentials that modern businesses trust
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Riley's professional certifications reflect a commitment to mastering the tools that power modern marketing:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#9D2235' }} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            At Fiat Growth, Riley contributes to a consultancy that positions itself as "strategic thinkers 
            and proven operators" rather than a traditional agency. The firm's focus on data-driven growth 
            strategies for venture-backed companies provides Riley with direct experience in the challenges 
            facing scaling businesses – from Series A startups to pre-IPO growth stories.
          </p>
        </div>
      </section>

      {/* Leadership Through Adversity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Leadership forged through unprecedented adversity
          </h2>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-6">
              What truly distinguishes Riley is his proven ability to lead through crisis and uncertainty. 
              During his senior year at WSU, Riley faced challenges that would derail most careers: he lost 
              his father to a heart attack in January 2016 and his mother to stage 4 melanoma just five months later. 
              Days after his mother's funeral, he was diagnosed with testicular cancer.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Rather than stepping away, Riley demonstrated extraordinary mental toughness by playing every 
              game of his senior season while undergoing treatment. He earned the <strong>Pac-12 Conference Sportsmanship Award</strong> and 
              was nominated for the <strong>Capital One Orange Bowl-FWAA Courage Award</strong>.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-medium">
                This experience of maintaining peak performance through personal crisis translates directly 
                to helping businesses navigate their own challenges and transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            A consultant who understands growth at every level
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Riley's current role analyzing growth strategies for disruptive financial technology companies 
            provides cutting-edge insights into:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Performance marketing optimization with measurable ROI',
              'Multi-channel attribution modeling for complex customer journeys',
              'Customer acquisition cost (CAC) optimization strategies',
              'Marketing operations infrastructure for scaling companies',
              'Data-driven decision making across paid and organic channels'
            ].map((insight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#9D2235' }}></div>
                <span className="text-gray-600">{insight}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            His experience spans the full spectrum of growth stages, from early-stage startups finding 
            product-market fit to established brands preparing for IPO. This breadth allows him to understand 
            the unique challenges at each phase of a company's journey.
          </p>
        </div>
      </section>

      {/* Human Element */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            The human element that younger businesses need
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Beyond the analytics and certifications, Riley brings qualities that resonate with entrepreneurial teams:
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Crisis Leadership',
                description: 'Proven ability to maintain focus and drive results under extreme pressure'
              },
              {
                title: 'Strategic Thinking', 
                description: 'Economics training combined with real-world application in high-growth environments'
              },
              {
                title: 'Genuine Connection',
                description: 'Known for building trust through authentic relationships and thoughtful communication'
              },
              {
                title: 'Teaching Mindset',
                description: 'Natural ability to explain complex concepts and mentor others'
              },
              {
                title: 'Resilience DNA',
                description: 'Living proof that obstacles can become opportunities for growth'
              }
            ].map((quality, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2" style={{ color: '#9D2235' }}>
                  {quality.title}
                </h3>
                <p className="text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Colleagues describe Riley as someone who pauses to consider questions deeply before providing 
              nuanced, thoughtful responses – a trait that serves clients well when navigating complex strategic 
              decisions. His combination of analytical rigor and emotional intelligence creates a consulting 
              approach that addresses both the spreadsheet and the human elements of business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-red-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              A New Generation of Consultant
            </h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Riley Sorenson represents a new generation of consultant: data-fluent yet deeply human, 
              analytically rigorous yet emotionally intelligent, battle-tested yet optimistic about growth potential. 
              His journey from WSU's offensive line through personal tragedy to marketing analytics leadership 
              demonstrates the resilience and adaptability that growing businesses need in their corner.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-gray-600" style={{ background: 'linear-gradient(to right, #9D2235, #6B7280)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            For companies seeking a consultant who understands both the metrics that matter 
            and the mindset required to achieve them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{ color: '#9D2235' }}
            >
              Start a Conversation
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

export default AboutPage;
