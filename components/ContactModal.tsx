
import React, { useState, useEffect } from 'react';
import { sendContactEmail, previewEmailTemplate, canSendEmail, type ContactFormData } from '../services/emailService';

export const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; isDark: boolean }> = ({ isOpen, onClose, isDark }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info' | 'warning'; text: string } | null>(null);
  const [rateLimitInfo, setRateLimitInfo] = useState<{ allowed: boolean; timeRemaining?: string }>({ allowed: true });

  useEffect(() => {
    if (isOpen) {
      // Check rate limit when modal opens
      setRateLimitInfo(canSendEmail());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setStatusMessage({ type: 'success', text: result.message });
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setStatusMessage(null);
          onClose();
        }, 2500);
      } else {
        setStatusMessage({ type: 'error', text: result.message });
        // Update rate limit info after failed attempt
        setRateLimitInfo(canSendEmail());
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: '✗ Connection Error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      previewEmailTemplate(formData);
      setStatusMessage({ type: 'info', text: '📧 Email preview opened in new window' });
    } else {
      setStatusMessage({ type: 'error', text: '⚠ Please fill all fields to preview' });
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStatusMessage(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60">
      <div className={`relative w-full max-w-lg p-8 border-2 ${isDark ? 'border-cyan-500/50 bg-gray-900' : 'border-blue-500/50 bg-white'} shadow-[0_0_50px_rgba(34,211,238,0.2)]`}>
        {/* Decor */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

        <button onClick={onClose} className="absolute top-4 right-4 text-cyan-500 hover:text-cyan-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className={`text-2xl font-orbitron font-bold mb-6 tracking-widest ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>ESTABLISH UPLINK</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className={`block text-[10px] font-orbitron mb-1 ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>ORIGIN SIGNATURE</label>
            <input 
              type="text" 
              placeholder="Identity name" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full bg-transparent border-b ${isDark ? 'border-cyan-500/30 text-white' : 'border-blue-500/30 text-black'} py-2 outline-none focus:border-cyan-400 transition-colors font-mono`} 
              required 
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className={`block text-[10px] font-orbitron mb-1 ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>COMMS CHANNEL</label>
            <input 
              type="email" 
              placeholder="email@address.net" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full bg-transparent border-b ${isDark ? 'border-cyan-500/30 text-white' : 'border-blue-500/30 text-black'} py-2 outline-none focus:border-cyan-400 transition-colors font-mono`} 
              required 
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className={`block text-[10px] font-orbitron mb-1 ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>ENCRYPTED MESSAGE</label>
            <textarea 
              rows={4} 
              placeholder="Begin transmission..." 
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`w-full bg-transparent border ${isDark ? 'border-cyan-500/30 text-white' : 'border-blue-500/30 text-black'} p-2 outline-none focus:border-cyan-400 transition-colors font-mono resize-none`} 
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className={`text-xs font-mono p-2 border ${
              statusMessage.type === 'success' ? 'border-green-500 text-green-400' :
              statusMessage.type === 'error' ? 'border-red-500 text-red-400' :
              statusMessage.type === 'warning' ? 'border-yellow-500 text-yellow-400' :
              'border-cyan-500 text-cyan-400'
            }`}>
              {statusMessage.text}
            </div>
          )}

          {/* Rate Limit Warning */}
          {!rateLimitInfo.allowed && (
            <div className="text-xs font-mono p-2 border border-yellow-500 text-yellow-400 bg-yellow-500/10">
              🔒 Cooldown Active: {rateLimitInfo.timeRemaining} remaining
            </div>
          )}

          <div className="flex gap-3">
            <button 
              type="button"
              onClick={handlePreview}
              disabled={isSubmitting}
              className={`flex-1 py-3 font-orbitron tracking-[0.3em] text-sm transition-all duration-300 
                ${isDark 
                  ? 'bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 border border-purple-400/50' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'} 
                disabled:opacity-50 disabled:cursor-not-allowed`}>
              PREVIEW
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting || !rateLimitInfo.allowed}
              className={`flex-1 py-3 font-orbitron tracking-[0.3em] text-sm transition-all duration-300 
                ${isDark 
                  ? 'bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-400/50' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'} 
                disabled:opacity-50 disabled:cursor-not-allowed`}>
              {isSubmitting ? 'SENDING...' : !rateLimitInfo.allowed ? 'COOLDOWN' : 'SEND'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
