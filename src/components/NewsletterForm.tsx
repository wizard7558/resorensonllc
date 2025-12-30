import React, { useState } from 'react';
import { Terminal, ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  portalId: string;
  formId: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ portalId, formId }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    // precise time for log effect
    const timestamp = new Date().toISOString();

    try {
      // Get HubSpot Cookie (hutk) if available
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
            fields: [
              {
                name: 'email',
                value: email,
              },
            ],
            context: {
              hutk: hutk, // Include cookie for tracking
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setMessage(`[${timestamp}] SUCCESS: CONTACT_CREATED_ID_PENDING`);
        setEmail('');
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

  return (
    <div className="w-full font-mono text-sm">
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 p-6 animate-fade-in">
          <div className="flex items-start space-x-3 text-green-700">
             <Check className="mt-0.5 h-5 w-5 flex-shrink-0" />
             <div>
                <p className="font-bold mb-1">TRANSMISSION_COMPLETE</p>
                <p className="text-xs opacity-80">{message}</p>
                <p className="mt-4 text-xs">You have been added to the distribution protocol.</p>
             </div>
          </div>
          <button 
             onClick={() => setStatus('idle')}
             className="mt-4 text-xs text-green-800 underline hover:text-green-900"
          >
             REGISTER_NEW_NODE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
           <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <Terminal size={16} className={`transition-colors ${status === 'error' ? 'text-red-400' : 'text-gray-400 group-hover:text-brand-red'}`} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_EMAIL_ADDRESS..."
                disabled={status === 'submitting'}
                className={`w-full bg-white border outline-none py-3 pl-10 pr-12 transition-all duration-200 placeholder-gray-400 font-mono text-sm
                  ${status === 'error' 
                     ? 'border-red-300 focus:border-red-500 text-red-600' 
                     : 'border-gray-200 focus:border-brand-dark text-gray-700'
                  }
                  ${status === 'submitting' ? 'bg-gray-50 text-gray-400 cursor-wait' : ''}
                `}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="absolute inset-y-0 right-0 px-4 flex items-center justify-center text-gray-400 hover:text-brand-red disabled:opacity-50 disabled:hover:text-gray-400 transition-colors"
              >
                {status === 'submitting' ? (
                   <Loader2 size={18} className="animate-spin" />
                ) : (
                   <ArrowRight size={18} />
                )}
              </button>
           </div>
           
           {status === 'error' && (
              <div className="mt-2 flex items-center text-xs text-red-500">
                 <AlertCircle size={12} className="mr-1" />
                 <span>{message}</span>
              </div>
           )}
           
           <div className="mt-2 text-[10px] text-gray-400 flex justify-between">
              <span>PROTOCOL: HTTPS_SECURE</span>
              <span>STATUS: {status === 'idle' ? 'READY' : status.toUpperCase()}</span>
           </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
