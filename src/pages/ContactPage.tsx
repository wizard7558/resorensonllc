import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    // Ensure HubSpot script is loaded and create the form
    const loadHubSpotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45832447",
          formId: "43badb32-d497-44b9-b1eb-ae894de45952",
          target: "#hubspot-contact-form"
        });
      } else {
        // If script isn't loaded yet, wait and try again
        setTimeout(loadHubSpotForm, 100);
      }
    };

    loadHubSpotForm();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact MarTech Consultant | Free Assessment Available"
        description="Get expert MarTech consulting help. Free 30-minute assessment, personalized optimization roadmap, and ROI projections. Contact RESorenson LLC today."
        keywords="martech consultant contact, free martech assessment, hubspot consultant, salesforce integration help, revenue operations consulting"
        canonicalUrl="/contact"
        ogType="website"
      />
      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text - Positioned above the form */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Transform Your MarTech Stack
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to turn marketing chaos into revenue-driving systems? 
              Get in touch to discuss your specific challenges and opportunities.
            </p>
          </div>

          {/* Contact Form - Centered under header */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Start Your Project</h2>
              {/* HubSpot Contact Form Container */}
              <script src="https://js.hsforms.net/forms/embed/45832447.js" defer></script> 
                <div class="hs-form-frame" data-region="na1" data-form-id="43badb32-d497-44b9-b1eb-ae894de45952" data-portal-id="45832447">
                </div>
            </div>
          </div>

          {/* Get In Touch and What to Expect - Side by side below form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get In Touch Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to optimize your MarTech stack? Fill out the form and we'll get back to you 
                within 4 hours during business hours to discuss your specific needs and challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 mt-1" style={{ color: '#9D2235' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">riley@resorensonllc.com</p>
                    <p className="text-gray-500 text-sm">We typically respond within 4 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 mt-1" style={{ color: '#9D2235' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(949) 632-7363</p>
                    <p className="text-gray-500 text-sm">Available for urgent matters</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 mt-1" style={{ color: '#9D2235' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Remote & On-site</p>
                    <p className="text-gray-500 text-sm">Serving clients globally</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 mt-1" style={{ color: '#9D2235' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM PST</p>
                    <p className="text-gray-500 text-sm">Emergency support available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Response</h4>
                    <p className="text-gray-600 text-sm">Within 4 hours during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Discovery Call</h4>
                    <p className="text-gray-600 text-sm">30-minute consultation to understand your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Proposal</h4>
                    <p className="text-gray-600 text-sm">Detailed project scope and timeline</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Kickoff</h4>
                    <p className="text-gray-600 text-sm">Strategic planning and implementation begins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;