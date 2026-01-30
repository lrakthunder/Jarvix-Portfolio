
export type Section = 'overview' | 'projects' | 'journey' | 'background' | 'contact';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  /** Optional link to the project's source code repository */
  codeLink?: string;
  /** Optional list of key features to display in the project modal */
  features?: string[];
  /** Short description used on project cards */
  card_description?: string;
  /** Short title used on project cards */
  card_title?: string;
  /** Optional path to a local preview image (served from the public folder) */
  image?: string;
  status: 'COMPLETED' | 'IN-PROGRESS' | 'ARCHIVED' | 'FOR DEPLOYMENT';
}

export interface JourneyItem {
  id: number;
  role: string;
  company: string;
  full_period: string;
  period: string;
  details: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS';
}
