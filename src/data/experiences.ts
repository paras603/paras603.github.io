import { ReactElement } from 'react';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Experience {
    role: string;
    company: string;
    website: string;
    period: string;
    techStack: string[];
    description: string;
    icon: IconType;
}

export const experiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'TechNova Inc.',
    website: 'https://www.google.com',
    period: 'Jan 2023 – Present',
    techStack: ['React', 'Laravel'],
    description:
      'Developed interactive UIs using React and TypeScript, improved performance and accessibility, and led redesign of key landing pages.',
    icon: FaLaptopCode,
  },
  {
    role: 'Software Engineer Intern',
    company: 'Innovate Labs',
    website: 'https://www.google.com',
    period: 'May 2022 – Aug 2022',
    techStack: ['PHP', 'Tailwind', 'Laravel'],
    description:
      'Built reusable components, integrated REST APIs, and contributed to code reviews in an agile team.',
    icon: FaBriefcase,
  },
];