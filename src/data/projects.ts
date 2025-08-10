import pokemonImage from '../assets/images/pokemon/pokemon.jpg';

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
  images?: string [];
}

export const projectList: Project[] = [
  {
    id: 1,
    slug: 'pokemon-library',
    title: "Pokémon Library",
    description: "The Pokémon Library is a simple web application that lets users browse and explore information about different Pokémon. It connects to a public API to fetch data such as names, images, types, and abilities, and displays them in an easy-to-read format. The goal of the project was to practice working with external APIs and improve frontend development skills. This project also helped me understand how to handle asynchronous data, manage user interactions, and structure components for better readability and reusability. It was a fun way to combine programming with a familiar theme, making the learning process more engaging.",
    techStack: ["React", "D3.js", "Tailwind CSS"],
    date: "May 2024",
    imageUrl: pokemonImage,
    githubUrl: "https://github.com/paras603",
    liveUrl: "https://parasmanirai.com.np",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    images: [
      "/assets/images/pokemon/project-hero.jpg",
      "/assets/images/pokemon/project-feature1.jpg",
      "/assets/images/pokemon/project-feature2.jpg"
    ]
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
    images: [
      "/images/project-hero.jpg",
      "/images/project-feature1.jpg",
      "/images/project-feature2.jpg"
    ]
  },
];
