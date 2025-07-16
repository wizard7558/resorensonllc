import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Encode form data for Netlify
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };
      
      // Convert FormData to object
      const formObject: Record<string, string> = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formObject
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 8000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h2>
                {/* HubSpot Embedded Form */}
                <div>
                  <script src="https://js.hsforms.net/forms/embed/45832447.js" defer></script>
                  <div className="hs-form-frame" data-region="na1" data-form-id="43badb32-d497-44b9-b1eb-ae894de45952" data-portal-id="45832447"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info & Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to optimize your MarTech stack? Fill out the form and we'll get back to you 
                  within 4 hours during business hours to discuss your specific needs and challenges.
                </p>
              </div>

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

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                
                <div className="space-y-4">
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;