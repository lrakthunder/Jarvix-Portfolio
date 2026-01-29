
export type Section = 'overview' | 'projects' | 'journey' | 'background' | 'contact';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
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
