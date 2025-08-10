import { ReactElement } from 'react';
import { FaBriefcase, FaLaptopCode, FaUniversity } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Experience {
    role: string;
    company: string;
    website: string;
    period: string;
    techStack: string[];
    description: string [];
    icon: IconType;
}

export const experiences: Experience[] = [
    {
    role: 'Mobile Application Development',
    company: 'Fanshawe College',
    website: 'https://www.fanshawec.ca/',
    period: 'May 2024 – April 2025',
    techStack: ['Android Studio', 'XCode', 'UI/UX', 'React Native', 'Firebase'],
   description: ['Developed cross-platform mobile and progressive web applications using React Native, Firebase, Xcode, and Android Studio, with a focus on intuitive user interfaces and efficient data management, as part of both academic coursework and personal projects'],
    icon: FaUniversity,
  },
  {
    role: 'Junior Web Developer',
    company: 'Kyanite Software',
    website: 'https://kyanitesoftware.com/',
    period: 'Aug 2023 – Mar 2024',
    techStack: ['Laravel', 'React', 'Vue', 'MySQL', 'Wordpress'],
   description: [
      'Developed and optimized ‘Futsal Nepal’, a high-performance web application using Laravel, Vue.js, and React, enhancing user engagement by 30%.',
      'Integrated MySQL for efficient data management and scalability, optimizing queries to improve application performance.',
      'Collaborated with cross-functional teams to streamline workflows, and introduced automation tools that boosted team productivity by 15%.',
      'Built and customized WordPress components for content management, ensuring seamless integration with Laravel-based services.',
      'Gained hands-on experience with RESTful API integrations, authentication mechanisms, and MVC architecture to deliver scalable, maintainable solutions.',
      'Practiced Agile methodologies, actively contributing to sprint planning, code reviews, and feature releases to ensure timely project delivery.',
    ],
    icon: FaLaptopCode,
  },  
  {
    role: 'Bachelor in Information Technology',
    company: 'Itahari International College',
    website: 'https://iic.edu.np/',
    period: '2019 – 2022',
    techStack: ['Java', 'Puthon', 'MySQL', 'JavaScript', 'Laravel', 'React'],
    description:[
        'Developed a hotel booking web app with Laravel, MySQL, and React to streamline workflows, built an anime recommendation system using Python and KNN, and gained foundational knowledge in networks, OS, and application support for identity and campus systems.',
      ],
    icon: FaUniversity,
  },
  {
    role: 'IT Support Intern',
    company: 'Itahari International College',
    website: 'https://iic.edu.np/',
    period: 'April 2021 – Sep 2021',
    techStack: ['Windows Server', 'Active Directory', 'Networking', 'LAN/WAN', 'Subnetting', 'VLANs', 'Troubleshooting', 'Technical Support Fundamentals (Google), 2024'],
    description:[
        'Delivered Tier-1 IT support during the IIC Industrial Fair 2021, resolving 85% of hardware, software, and network issues for students and faculty within 24 hours, ensuring seamless event operations',
        'Assisted with user account management and onboarding, facilitating secure and efficient access to institutional systems.',
        'Configured basic routers and LAN networks, utilizing knowledge of subnetting and VLANs to improve network performance and reliability.',
        'Documented IT incidents and resolutions, enhancing troubleshooting workflows and enabling proactive system monitoring.',
      ],
    icon: FaBriefcase,
  },
];