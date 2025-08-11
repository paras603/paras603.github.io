import easyCartHero from '../assets/images/easy-cart/project-hero.png';
import easyCart1 from '../assets/images/easy-cart/project-feature1.png';
import easyCart2 from '../assets/images/easy-cart/project-feature2.png';
import easyCart3 from '../assets/images/easy-cart/project-feature3.png';
import webPrintHero from '../assets/images/web-print/web-print.png';
import webPrint1 from '../assets/images/web-print/project-feature1.png';
import webPrint2 from '../assets/images/web-print/project-feature2.png';


export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  backgroundColor: string;
  techStack: string [];
  date: string;
  images?: string [];
}

export const projectList: Project[] = [
  {
    id: 1,
    slug: 'easy-cart',
    title: "Easy Cart",
    description: "Easy Cart Your Smart Shopping Companion Easy Cart is a feature-packed mobile application designed to make your shopping experience seamless, organized, and efficient. Whether you're grocery shopping, planning an event, or managing your household needs, Easy Cart simplifies the process and keeps everything in one place.",
    techStack: ["React", "Laravel", "MySQL"],
    date: "April 2024",
    imageUrl: easyCartHero,
    githubUrl: "https://github.com/paras603/easy-cart",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    images: [easyCartHero, easyCart1, easyCart2, easyCart3]
  },
  {
    id: 2,
    slug: 'web-print',
    title: "Web Print",
    description: "Web-Print, a web app designed to analyze and visualize social media data using React (frontend) and Django (backend). The first feature I built focuses on Follower Growth Analysis, allowing users to upload JSON files and generate insightful visualizations.",
    date: "February 2025",
    imageUrl: webPrintHero,
    techStack: ["React", "Django", "Data visualization"],
    githubUrl: "https://github.com/paras603/web_print",
    backgroundColor: "bg-gradient-to-r from-yellow-400 to-orange-500",  
    images: [webPrintHero, webPrint1, webPrint2]  
  },
  {
    id: 3,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills, projects, and contact information.",
    date: "May 2024",
        techStack: ["React", "D3.js", "Tailwind CSS", "API"],
    imageUrl: "/assets/portfolio.jpg",
    githubUrl: "https://github.com/paras603",
    liveUrl: "https://parasmanirai.com.np",
    backgroundColor: "bg-gradient-to-r from-sky-400 to-indigo-600",
    images: [
      "/images/project-hero.jpg",
      "/images/project-feature1.jpg",
      "/images/project-feature2.jpg"
    ]
  },
];
