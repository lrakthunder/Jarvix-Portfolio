
import React from 'react';
import { Project, JourneyItem, Skill } from './types';

export const USER_BIO = `
Hi, I’m Karl Gilbert Pascual, a Full Stack Engineer specializing in high-performance web applications with immersive user interfaces. 
Skilled in React, Vue, Javascript, TypeScript, and Laravel/PHP, I’m dedicated to crafting innovative solutions that push the boundaries of what the web can do.
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    card_title: "EXPENSE TRACKER",
    title: "THUNDER EXPENSE TRACKER",
    card_description: 'A modern expense tracking app using Laravel 11 + Vue 3 (Vite) with dashboards, charts, calendar tracking, and PDF/CSV reports.',
    description: `Thunder Expense Tracker is a modern multi‑page application built with Laravel 11 and Vue 3 (Vite) for fast local development and smooth client-side interactivity. It provides a polished, responsive dashboard with visual analytics, full CRUD for expenses and income, category management, and a calendar view for transaction tracking. The app includes a custom authentication UI, PDF/CSV reporting and preview capabilities, and a table-driven admin interface designed for easy data management and extensibility.`,
    tags: ["Vue", "PHP", "JavaScript", "CSS", "HTML", "Blade", "Batchfile", "MySQL"],
    image: "/jarvix-portfolio/Expense_Tracker.jpg",
    link: "https://dimgrey-bison-569365.hostingersite.com/",
    features: [
      'Responsive dashboard with summary cards for daily and monthly spending',
      'Interactive charts (pie and bar) for category breakdowns and monthly trends',
      'Full CRUD for expenses and income with category management',
      'Calendar view for transaction tracking by date',
      'Report generation with preview and PDF export options',
      'Paginated tables and accessible controls for easy data management',
      'Separation of API (Laravel) and frontend (Vue + Vite) for easy extensibility'
    ],
    codeLink: "https://github.com/lrakthunder/Expense-Tracker",
    status: "COMPLETED"
  },
  {
    id: 2,
    card_title: "HOSPITAL APPOINTMENT SYSTEM",
    title: "HOSPITAL APPOINTMENT SYSTEM",
    card_description: 'Patient and appointment management system with scheduling, assignment, and reporting.',
    description: `Hospital Appointment System is a staff-focused web application for managing patient records, scheduling appointments, and streamlining clinic workflows. The interface provides a searchable patient list, assignment indicators for assigned/unassigned patients, appointment time slots, and calendar-driven scheduling. Designed for clinic staff and administrators, it supports role-based access, quick editing of appointments, and reporting/export capabilities for operational use.`,
    image: "/jarvix-portfolio/Hospital_Appointment_System.jpg",
    features: [
      'Searchable patient registry with assigned/unassigned status',
      'Flexible appointment scheduling with date/time slots and staff assignment',
      'Calendar and list views for easy tracking of daily appointments',
      'Role-based access for receptionists, clinicians, and admins',
      'Edit/delete appointments and patient records with confirmation',
      'Search, filter, and sort support for fast data retrieval',
      'Exportable reports and printable appointment summaries',
      'Responsive layout optimized for clinic desktops and tablets'
    ],
    tags: ["PHP", "HTML", "TypeScript", "CSS", "Batchfile", "MySQL"],
    link: "#",
    codeLink: "https://github.com/lrakthunder/Hospital-Appointment-System",
    status: "IN-PROGRESS"
  },
  {
    id: 3,
    card_title: "WORK APPLICATION TRACKER",
    title: "WORK JOURNEY",
    card_description: 'A modern expense tracking app using Laravel 11 + Vue 3 (Vite) with dashboards, charts, calendar tracking, and PDF/CSV reports.',
    description: "A tool to help users track their job applications and interviews in one place.",
    tags: ["TypeScript", "Batchfile", "CSS", "Javascript", "MySQL"],
    image: "/jarvix-portfolio/Work_Journey.jpg",
    link: "https://blanchedalmond-salamander-962993.hostingersite.com/",
    codeLink: "https://github.com/lrakthunder/Work-Journey",
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
  { name: "NPM / PNPM", level: 90, category: "FRONTEND" },
  { name: "Composer", level: 90, category: "BACKEND" },
  { name: "Cursor AI", level: 90, category: "TOOLS" },
  { name: "Source Tree(version control)", level: 98, category: "TOOLS" },
  { name: "Cypress(automated E2E testing)", level: 90, category: "TOOLS" },
  { name: "Vue.js", level: 80, category: "FRONTEND" },
  { name: "Programming Fundamentals", level: 85, category: "CORE" },
  { name: "Web Fundamentals", level: 85, category: "CORE" },
  { name: "JavaScript", level: 85, category: "CORE" },
  { name: "TypeScript", level: 85, category: "CORE" },
  { name: "Tailwind CSS", level: 85, category: "FRONTEND" },
  { name: "Node.js", level: 85, category: "BACKEND" },
];
