
import React from 'react';
import { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project, isDark: boolean }> = ({ project, isDark }) => {
  const handleClick = () => {
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative p-6 border ${isDark ? 'border-cyan-500/20 hover:border-cyan-400 bg-cyan-900/10' : 'border-blue-500/20 hover:border-blue-500 bg-blue-50'} transition-all duration-300 ${project.link !== '#' ? 'cursor-pointer' : 'cursor-default'} overflow-hidden`}
    >
      <div className="absolute top-0 right-0 px-2 py-0.5 bg-cyan-500/20 text-[8px] font-mono tracking-tighter text-cyan-400">
        ID: {project.id.toString().padStart(4, '0')}
      </div>
      
      <h3 className={`text-lg font-orbitron font-bold mb-2 tracking-wide ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>
        {project.title}
      </h3>
      
      <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-cyan-100/70' : 'text-gray-600'}`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className={`text-[10px] px-2 py-0.5 font-mono border ${isDark ? 'border-cyan-500/30 text-cyan-400' : 'border-blue-500/30 text-blue-600'}`}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-cyan-500/10">
        <span className={`text-[10px] font-orbitron ${project.status === 'COMPLETED' ? 'text-green-400' : 'text-yellow-400'}`}>
          STATUS: {project.status}
        </span>
        <button className={`text-xs font-orbitron p-1 hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
          ACCESS MODULE &gt;
        </button>
      </div>

      {/* Decorative Scanning Line for hover */}
      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="h-px w-full bg-cyan-400/50 absolute top-0 animate-[scanline_2s_linear_infinite]"></div>
      </div>
    </div>
  );
};
