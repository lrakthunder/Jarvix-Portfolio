
import React, { useState, useEffect, useRef } from 'react';
import { askJarvis } from '../services/geminiService';

export const JarvisChat: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'jarvis', text: string }[]>([
    { role: 'jarvis', text: "Welcome back, Sir. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const jarvisResponse = await askJarvis(userMsg);
    setMessages(prev => [...prev, { role: 'jarvis', text: jarvisResponse || 'Communication error.' }]);
    setLoading(false);
  };

  return (
    <div className={`flex flex-col h-full border ${isDark ? 'border-cyan-500/20 bg-black/40' : 'border-blue-500/20 bg-white/40'} rounded-lg backdrop-blur-md`}>
      <div className="p-3 border-b border-cyan-500/20 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${loading ? 'bg-red-500 animate-pulse' : 'bg-cyan-400 animate-pulse'}`}></div>
        <span className="text-[10px] font-orbitron tracking-tighter">JARVIX CORE v3.1</span>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-2 ${m.role === 'user' 
              ? (isDark ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-blue-100 border border-blue-500/30')
              : (isDark ? 'text-cyan-300' : 'text-blue-800')}`}>
              <span className="font-bold mr-1">{m.role === 'user' ? '>' : 'JARVIX:'}</span>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-cyan-500/50 animate-pulse">ANALYZING...</div>}
      </div>

      <div className="p-3 border-t border-cyan-500/20 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Query systems..."
          className={`flex-1 bg-transparent border-b border-cyan-500/30 outline-none text-xs font-mono px-1 py-1 ${isDark ? 'text-cyan-100' : 'text-blue-900'}`}
        />
        <button onClick={handleSend} className="text-cyan-400 hover:text-cyan-300">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};
