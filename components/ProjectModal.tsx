import React, { useEffect } from 'react';
import { Project } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import GitHubIcon from './icons/GitHubIcon';
import CheckIcon from './icons/CheckIcon';

export const ProjectModal: React.FC<{
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}> = ({ isOpen, project, onClose, isDark }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const previewImage =
    project.image ||
    (project.link && project.link !== '#' ? project.link : 'Expense_Tracker.jpg');

  // Ensure spaces and special characters in filenames (like "Expense Tracker.png") are handled correctly
  const previewImageUrl = encodeURI(previewImage);

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative w-full max-w-4xl max-h-[90vh] border-2 rounded-lg shadow-[0_0_50px_rgba(34,211,238,0.12)] overflow-hidden ${isDark ? 'border-cyan-500/50 bg-gray-900' : 'border-blue-500/50 bg-white'}`}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-cyan-400 hover:text-cyan-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh] p-6 custom-scrollbar">
          <div className="text-center mb-4">
            <h2 className={`text-2xl font-orbitron font-bold mb-2 ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>{project.title}</h2>
            <div className={`text-sm ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>Full Stack Web Application</div>
          </div>

          <div
            className="w-full h-40 md:h-56 mb-6 bg-cover bg-center rounded overflow-hidden"
            style={{ backgroundImage: `url("${previewImageUrl}")` }}
          />

          <h3 className={`text-lg font-orbitron font-bold mb-2 ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>Project Overview</h3>
          <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-cyan-100/70' : 'text-gray-700'}`}>{project.description}</p>

          <h4 className={`text-sm font-orbitron mb-2 ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>Key Features</h4>
          <div className="mb-4">
            {project.features && project.features.length > 0 ? (
              <div className="flex flex-col gap-3">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">
                      <CheckIcon className="w-5 h-5" />
                    </span>
                    <span className={`text-sm font-mono ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>{f}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1"><CheckIcon className="w-5 h-5" /></span>
                  <span className={`text-sm font-mono ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>Responsive UI and accessibility-first design</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1"><CheckIcon className="w-5 h-5" /></span>
                  <span className={`text-sm font-mono ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>Authentication and user profile management</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1"><CheckIcon className="w-5 h-5" /></span>
                  <span className={`text-sm font-mono ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>Searchable listings, filters and pagination</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1"><CheckIcon className="w-5 h-5" /></span>
                  <span className={`text-sm font-mono ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>Admin dashboard for posting and managing vacancies</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className={`text-[10px] px-2 py-0.5 font-mono border ${isDark ? 'border-cyan-500/30 text-cyan-400' : 'border-blue-500/30 text-blue-600'}`}>STATUS: {project.status}</span>
            {project.tags.map(tag => (
              <span key={tag} className={`text-[10px] px-2 py-0.5 font-mono border ${isDark ? 'border-cyan-500/30 text-cyan-400' : 'border-blue-500/30 text-blue-600'}`}>{tag}</span>
            ))}
          </div>
          <div className="mt-6 w-full">
            <div className="flex w-full flex-col sm:flex-row gap-4">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-orbitron ${isDark ? 'bg-cyan-600 text-white' : 'bg-blue-600 text-white'}`}
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-orbitron border shadow-sm ${isDark ? 'border-cyan-600 text-cyan-200 bg-transparent' : 'border-gray-700 text-gray-900 bg-transparent'}`}
                >
                  <GitHubIcon className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
