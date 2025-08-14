import { IconType } from 'react-icons';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaJava,
  FaLaravel,
} from 'react-icons/fa';
import { SiDjango, SiMysql, SiTypescript } from "react-icons/si";


export interface Skill {
  name: string;
  level?: string;
  proficiency: number; // 0-100
  icon: IconType;
}

export const skills: Skill[] = [
  { name: 'React', proficiency: 90, level: 'Expert', icon: FaReact },
  { name: 'JavaScript', proficiency: 85, level: 'Advanced', icon: FaJsSquare },
  { name: 'TypeScript', proficiency: 85, level: 'Advanced', icon: SiTypescript },
  // { name: 'Node.js', proficiency: 75, level: 'Intermediate', icon: FaNodeJs },
  { name: 'CSS3', proficiency: 80, level: 'Advanced', icon: FaCss3Alt },
  { name: 'Databases', proficiency: 70, level: 'Intermediate', icon: FaDatabase },
  { name: 'Python', proficiency: 65, level: 'Intermediate', icon: FaPython },
  { name: 'Git', proficiency: 85, level: 'Advanced', icon: FaGitAlt },
  { name: 'Docker', proficiency: 60, level: 'Intermediate', icon: FaDocker },
  { name: 'Linux', proficiency: 75, level: 'Intermediate', icon: FaLinux },
  { name: 'HTML5', proficiency: 90, level: 'Expert', icon: FaHtml5 },
  { name: 'Java', proficiency: 50, level: 'Beginner', icon: FaJava },
  { name: 'Laravel', proficiency: 50, level: 'Beginner', icon: FaLaravel },
  { name: 'MySQL', proficiency: 50, level: 'Beginner', icon: SiMysql },
  { name: 'Django', proficiency: 50, level: 'Beginner', icon: SiDjango },
];
