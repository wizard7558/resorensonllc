import React from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.4]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <SEO 
        title="Contact Lattara" 
        description="Get in touch for MarTech consulting and revenue operations optimization."
        canonicalUrl="/contact"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block border border-brand-red/20 bg-red-50 text-brand-red px-3 py-1 text-xs font-mono mb-6">
              COMMUNICATION_CHANNEL_OPEN
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Initialize Connection
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Ready to stop the revenue bleed? Send us a transmission.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-sm font-bold text-gray-900 uppercase mb-4">Direct_Line</h3>
                  <div className="space-y-4">
                    <a href="mailto:riley@lattara.com" className="flex items-center text-gray-600 hover:text-brand-red transition-colors group">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-red-50 transition-colors">
                        <Mail size={18} />
                      </div>
                      <span className="font-mono text-sm">riley@lattara.com</span>
                    </a>
                    <a href="tel:+19496327363" className="flex items-center text-gray-600 hover:text-brand-red transition-colors group">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-red-50 transition-colors">
                        <Phone size={18} />
                      </div>
                      <span className="font-mono text-sm">+1 (949) 632-7363</span>
                    </a>
                  </div>
                </div>

                <div>
                   <h3 className="font-mono text-sm font-bold text-gray-900 uppercase mb-4">Base_of_Ops</h3>
                   <div className="flex items-center text-gray-600">
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center mr-4">
                        <MapPin size={18} />
                      </div>
                      <span className="font-mono text-sm">Orange County, CA</span>
                   </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col justify-center bg-gray-50 p-8 border border-gray-100">
                 <h3 className="text-lg font-bold text-brand-dark mb-4">Fastest Response?</h3>
                 <p className="text-gray-600 mb-6 text-sm">
                   If you have a specific technical issue or need a full stack audit, the assessment form routes directly to our engineering priority queue.
                 </p>
                 <a 
                   href="/assessment" 
                   className="inline-flex items-center justify-center bg-brand-dark text-white px-6 py-3 text-sm font-mono hover:bg-brand-red transition-colors"
                 >
                   START_ASSESSMENT <ArrowRight size={16} className="ml-2" />
                 </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
