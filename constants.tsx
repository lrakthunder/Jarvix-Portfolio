
import React from 'react';
import { Project, JourneyItem, Skill } from './types';

export const USER_BIO = `
Hi, I’m Karl Gilbert Pascual, a Full Stack Engineer specializing in high-performance web applications with immersive user interfaces. 
Skilled in React, Vue, Javascript, TypeScript, and Laravel/PHP, I’m dedicated to crafting innovative solutions that push the boundaries of what the web can do.
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EXPENSE TRACKER",
    description: "A web application to track and visualize personal expenses with real-time updates.",
    tags: ["Vue", "PHP", "JavaScript", "CSS", "HTML", "Blade", "Batchfile", "MySQL"],
    link: "https://dimgrey-bison-569365.hostingersite.com/",
    status: "COMPLETED"
  },
  {
    id: 2,
    title: "HOSPITAL APPOINTMENT SYSTEM",
    description: "A web application to manage and schedule hospital appointments efficiently.",
    tags: ["PHP", "HTML", "TypeScript", "CSS", "Batchfile", "MySQL"],
    link: "#",
    status: "IN-PROGRESS"
  },
  {
    id: 3,
    title: "WORK APPLICATION TRACKER",
    description: "A tool to help users track their job applications and interviews in one place.",
    tags: ["TypeScript", "Batchfile", "CSS", "Javascript", "MySQL"],
    link: "https://blanchedalmond-salamander-962993.hostingersite.com/",
    status: "COMPLETED"
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "R2M IT Solutions, Inc.",
    full_period: "August 2023 - January 2026",
    period: "2026",
    details: [
      "Full-Stack Development of new features for various systems(Retirement, Eportal, Payroll, Loans).",
      "Support - fixing bugs, adding new details, and documenting changes.",
    ]
  },
  {
    id: 2,
    role: "Research Aide",
    company: "University of Southern Mindanao - Main Campus",
    full_period: "March 2023 - August 2023",
    period: "2023",
    details: [
      "Documents research processes and the daily activities.",
      "Field Survey.",
    ]
  },
  {
    id: 3,
    role: "Map Data Processor",
    company: "Phillippine Statistics Authority - Kidapawan Branch",
    full_period: "April 2022 - November 2022",
    period: "2022",
    details: [
      "Map Enhancement.",
      "Fixing technical errors within the QGIS system.",
    ]
  },
  {
    id: 4,
    role: "IT Officer",
    company: "Deseret Ambulatory Referral Center Foundation, Inc.",
    full_period: "September 2019 - October 2021",
    period: "2021",
    details: [
      "Processing and submission of data using Electronic Claims Submission (ECS).",
      "Fixing technical computer problems within the clinic.",
    ]
  },
  {
    id: 5,
    role: "IT Officer",
    company: "Deseret Surgimed Hospital",
    full_period: "June 2019 - July 2019",
    period: "2019",
    details: [
      "Processing and submission of data using Electronic Claims Submission (ECS).",
      "Fixing technical computer problems within the hospital.",
    ]
  },
];

export const SKILLS: Skill[] = [
  { name: "Laravel / PHP", level: 95, category: "BACKEND" },
  { name: "React / Next.js", level: 92, category: "FRONTEND" },
  { name: "MySQL / Database Design", level: 90, category: "BACKEND" },
  { name: "Git / Version Control", level: 90, category: "TOOLS" },
  { name: "VS Code Copilot", level: 90, category: "TOOLS" },
  { name: "Cursor AI", level: 90, category: "TOOLS" },
  { name: "NPM / PNPM", level: 90, category: "FRONTEND" },
  { name: "Composer", level: 90, category: "BACKEND" },
  { name: "Cursor AI", level: 90, category: "TOOLS" },
  { name: "Vue.js", level: 80, category: "FRONTEND" },
  { name: "Programming Fundamentals", level: 85, category: "CORE" },
  { name: "Web Fundamentals", level: 85, category: "CORE" },
  { name: "JavaScript", level: 85, category: "CORE" },
  { name: "TypeScript", level: 85, category: "CORE" },
  { name: "Tailwind CSS", level: 85, category: "FRONTEND" },
  { name: "Node.js", level: 85, category: "BACKEND" },
];
