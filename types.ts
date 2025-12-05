export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  url: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  location: string;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  contact: Contact;
  stats: {
    label: string;
    value: string;
  }[];
}

export enum Tab {
  ALL = 'All',
  EXPERIENCE = 'Experience',
  SKILLS = 'Skills',
  EDUCATION = 'Education',
  PROJECTS = 'Projects',
}