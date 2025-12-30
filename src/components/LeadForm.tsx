import React, { useState } from 'react';
import { Terminal, ArrowRight, Check, AlertCircle, Loader2, User, Building, Globe, Mail } from 'lucide-react';

interface LeadFormProps {
  portalId: string;
  formId: string;
  onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ portalId, formId, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    company: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    const timestamp = new Date().toISOString();

    try {
      // Get HubSpot Cookie
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
      };
      const hutk = getCookie('hubspotutk');

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: Object.keys(formData).map(key => ({
              name: key,
              value: formData[key as keyof typeof formData]
            })),
            context: {
              hutk: hutk,
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setMessage(`[${timestamp}] SUCCESS: LEAD_CAPTURED_ID_PENDING`);
        if (onSuccess) onSuccess();
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus('error');
      setMessage(`[${timestamp}] ERROR: CONNECTION_REFUSED`);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50/50 border border-green-200 p-8 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
           <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Check size={24} />
           </div>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2 font-mono">TRANSMISSION_RECEIVED</h3>
        <p className="text-sm text-green-700 font-mono mb-6">{message}</p>
        <p className="text-gray-600 mb-8">
          Our engineering team has received your assessment request. We will analyze your stack and contact you shortly to schedule the review.
        </p>
        <div className="flex flex-col space-y-4 mb-8">
           <a 
              href="https://meetings.hubspot.com/lattara/meet-with-riley"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white py-4 px-8 font-bold font-mono text-sm hover:bg-brand-red transition-all flex items-center justify-center shadow-lg"
           >
              BOOK_MEETING_NOW <ArrowRight size={18} className="ml-2" />
           </a>
        </div>
        <button 
           onClick={() => window.location.reload()}
           className="text-xs font-mono text-gray-400 hover:text-brand-dark underline"
        >
           RESET_FORM
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {/* First Name */}
         <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <User size={16} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
            </div>
            <input
              type="text"
              name="firstname"
              required
              placeholder="FIRST_NAME"
              value={formData.firstname}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="w-full bg-gray-50 border border-gray-200 focus:border-brand-dark outline-none py-3 pl-10 pr-4 text-sm transition-all"
            />
         </div>

         {/* Last Name */}
         <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <User size={16} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
            </div>
            <input
              type="text"
              name="lastname"
              required
              placeholder="LAST_NAME"
              value={formData.lastname}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="w-full bg-gray-50 border border-gray-200 focus:border-brand-dark outline-none py-3 pl-10 pr-4 text-sm transition-all"
            />
         </div>
      </div>

      {/* Email */}
      <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <Mail size={16} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="WORK_EMAIL_ADDRESS"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="w-full bg-gray-50 border border-gray-200 focus:border-brand-dark outline-none py-3 pl-10 pr-4 text-sm transition-all"
          />
      </div>

      {/* Company */}
      <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <Building size={16} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
          </div>
          <input
            type="text"
            name="company"
            placeholder="COMPANY_NAME"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="w-full bg-gray-50 border border-gray-200 focus:border-brand-dark outline-none py-3 pl-10 pr-4 text-sm transition-all"
          />
      </div>

      {/* Website */}
      <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <Globe size={16} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
          </div>
          <input
            type="text"
            name="website"
            placeholder="COMPANY_WEBSITE"
            value={formData.website}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="w-full bg-gray-50 border border-gray-200 focus:border-brand-dark outline-none py-3 pl-10 pr-4 text-sm transition-all"
          />
      </div>

      {status === 'error' && (
        <div className="flex items-center text-xs text-red-500 bg-red-50 p-2 border border-red-100">
           <AlertCircle size={14} className="mr-2 flex-shrink-0" />
           <span>{message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-red text-white py-4 font-bold tracking-wide hover:bg-red-700 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-wait flex items-center justify-center"
      >
        {status === 'submitting' ? (
           <>
              <Loader2 size={18} className="animate-spin mr-2" />
              TRANSMITTING_DATA...
           </>
        ) : (
           <>
              INITIALIZE_AUDIT <ArrowRight size={18} className="ml-2" />
           </>
        )}
      </button>

      <div className="text-[10px] text-center text-gray-400 mt-4">
         SECURE_ENCRYPTED_CONNECTION_ESTABLISHED
      </div>
    </form>
  );
};

export default LeadForm;
