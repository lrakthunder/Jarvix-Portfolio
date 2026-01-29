
import React from 'react';
import { JourneyItem } from '../types';

export const JourneyItemComponent: React.FC<{ item: JourneyItem, isDark: boolean }> = ({ item, isDark }) => {
  return (
    <div className="relative pl-12 group">
      {/* Connector Line */}
      <div className={`absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent`}></div>
      
      {/* Node Dot */}
      <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
        ${isDark ? 'border-cyan-500 bg-gray-900 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'border-blue-600 bg-white'}`}>
        <span className="text-[8px] font-orbitron">{item.period.split(' - ')[0]}</span>
      </div>

      <div className={`p-6 border transition-all duration-300 ${isDark ? 'border-cyan-500/10 bg-cyan-900/5 hover:border-cyan-500/40' : 'border-blue-100 bg-white'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className={`text-xl font-orbitron font-bold ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>{item.role}</h3>
            <span className={`text-sm font-mono tracking-widest ${isDark ? 'text-cyan-600' : 'text-blue-400'}`}>{item.company}</span>
          </div>
          <span className={`text-xs font-mono px-3 py-1 border mt-2 md:mt-0 ${isDark ? 'border-cyan-500/30 text-cyan-400' : 'border-blue-200 text-blue-600'}`}>
            {item.full_period}
          </span>
        </div>
        
        <ul className="space-y-3">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 group/li">
              <span className="text-cyan-500 mt-1.5 transition-transform group-hover/li:translate-x-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </span>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-cyan-100/70' : 'text-gray-600'}`}>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
