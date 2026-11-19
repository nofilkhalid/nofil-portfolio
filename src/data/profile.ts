// Portfolio content. Taken from the Product Owner CV; swap in real values as needed.
// `photo` is a placeholder: set it to require('@/assets/images/profile.jpg') once a photo is added.
import type { ImageSource } from 'expo-image';

export type Stat = { value: string; label: string };
export type Highlight = { title: string; detail: string };
export type Project = { name: string; type: string; period: string; points: string[] };
export type Role = { title: string; company: string; period: string; points: string[]; projects: Project[] };
export type Education = { degree: string; school: string; period: string; notes: string[] };

export const profile = {
  name: 'Nofil Khalid',
  initials: 'NK',
  photo: null as ImageSource | null,
  headline: 'Product Owner | Business Analyst',
  location: 'Karachi, Pakistan',
  availability: 'Open to fully remote roles · Available immediately',
  email: 'nofilkhalid11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nofil-khalid-028117312',
  intro:
    'Certified Scrum Product Owner who takes software products from discovery to release for remote-first clients in the USA and KSA.',
  summary:
    'Certified Scrum Product Owner and Business Analyst with hands-on experience taking software products from discovery through release for international, remote-first clients (USA, KSA). I work directly with engineering, design, and client stakeholders to define product requirements, prioritise the backlog, and keep priorities aligned across several products at once. I communicate product direction, status, and key decisions clearly to both technical and non-technical audiences. An ongoing BSc in Computer Science (graduating June 2027) gives me the technical grounding to work closely with engineers.',
};

export const stats: Stat[] = [
  { value: '500+', label: 'User stories scoped' },
  { value: '4', label: 'Client products shipped' },
  { value: '3', label: 'Products run at once' },
  { value: '2', label: 'Markets: USA & KSA' },
];

export const highlights: Highlight[] = [
  {
    title: 'Healthcare product, HIPAA-ready',
    detail: 'Turned complex clinical requirements for NXTSTIM into 500+ scoped user stories that met HIPAA and healthcare UX standards.',
  },
  {
    title: 'Scope set before code',
    detail: 'Authored the SOW and BRD for Insight+, defining stakeholders, timeline and third-party API integration.',
  },
  {
    title: 'Discovery in a new market',
    detail: 'Led weekly discovery and gap analysis to map the Saudi HR ecosystem and define must-have features for VisionS.',
  },
  {
    title: 'Certified Scrum Product Owner',
    detail: 'CSPO from Scrum Alliance, applied daily across distributed engineering and design teams.',
  },
];

export const skills: string[] = [
  'Product Ownership (CSPO)',
  'Requirements & Backlog Prioritisation',
  'Cross-Functional Collaboration',
  'Discovery & Customer Feedback',
  'BRDs, SOWs & User Stories',
  'Stakeholder Communication',
  'Managing Multiple Products',
  'Distributed Remote Teams',
  'Agile / Scrum',
  'Jira',
  'Figma',
  'SQL / MySQL',
  'Python & C++',
];

export const experience: Role[] = [
  {
    title: 'Business Analyst',
    company: 'Bytecorp',
    period: 'Jun 2025 – Present',
    points: [
      'Own product requirements across three concurrent software products for clients in the USA and KSA, setting scope and priorities with distributed teams.',
      'Run discovery with clients to understand user needs and business goals, and turn them into prioritised backlog items.',
      'Write and maintain SOWs, BRDs, project plans and process workflows, balancing business goals, budgets and technical constraints.',
      'Run weekly demos and status reviews, turning client feedback into clear backlog items.',
    ],
    projects: [
      {
        name: 'NXTSTIM',
        type: 'Remote Patient Monitoring Platform',
        period: '2025 – Present',
        points: [
          'Translated complex clinical requirements into 500+ scoped user stories, meeting HIPAA compliance and healthcare UX standards.',
          'Mapped end-to-end system workflows, identifying risks, dependencies and design considerations before development began.',
        ],
      },
      {
        name: 'Insight+',
        type: 'Background Check Platform',
        period: '2025',
        points: [
          'Authored the SOW and BRD, defining stakeholders, scope, timeline and third-party API integration.',
          'Set sprint scope and priorities with the client and development team.',
        ],
      },
      {
        name: 'VisionS',
        type: 'HR Recruitment Platform',
        period: '2025',
        points: [
          'Led weekly discovery sessions and gap analysis to map the Saudi HR ecosystem and define must-have features.',
          'Managed the product backlog and kept requirements current for upcoming sprints.',
        ],
      },
      {
        name: 'VMS',
        type: 'Volunteer Management System',
        period: '2025',
        points: [
          'Ran weekly client demos, capturing feedback to refine the product backlog.',
          'Partnered with UI/UX design to turn functional requirements into prototypes across volunteer, client and super-admin journeys.',
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'BSc (Hons) Computer Science',
    school: 'Habib University',
    period: 'Expected Jun 2027',
    notes: [
      'CGPA 3.27 / 4.00',
      'Final-year project: AI-based defect detection for woven polypropylene sheets, with House of Habib. Business Analyst on a team of four.',
    ],
  },
  { degree: 'A-Levels', school: 'Alpha College', period: '2023', notes: [] },
];

export const certifications: string[] = ['Certified Scrum Product Owner (CSPO), Scrum Alliance'];

export const languages: string[] = ['English (fluent, written and spoken)'];
