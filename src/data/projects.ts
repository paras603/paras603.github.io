export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  backgroundColor: string;
  techStack: string [];
  date: string;
}

export const projectList: Project[] = [
  {
    id: 1,
    slug: 'pokenmon-library',
    title: "Pokemon Library",
    description: "Explore your favorite Pokemon using a beautiful UI and data fetched from a public API.",
        techStack: ["React", "D3.js", "Tailwind CSS", "API"],

    date: "May 2024",
    imageUrl: "/assets/pokemon.jpg",
    githubUrl: "https://github.com/paras603",
    liveUrl: "https://parasmanirai.com.np",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: 2,
    slug: 'chat-with-coffee',
    title: "Chat with Coffee",
    description: "A real-time chat app with a warm design inspired by coffee shops. Built using Firebase and React. A real-time chat app with a warm design inspired by coffee shops. Built using Firebase and React. A real-time chat app with a warm design inspired by coffee shops. Built using Firebase and React.A real-time chat app with a warm design inspired by coffee shops. Built using Firebase and React.",

    date: "May 2024",
    imageUrl: "/assets/chat-coffee.jpg",
        techStack: ["React", "D3.js", "Tailwind CSS", "API"],
    githubUrl: "https://github.com/paras603",
    liveUrl: "https://parasmanirai.com.np",
    backgroundColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
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
  },
];
