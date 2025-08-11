import easyCartHero from '../assets/images/easy-cart/project-hero.png';
import easyCart1 from '../assets/images/easy-cart/project-feature1.png';
import easyCart2 from '../assets/images/easy-cart/project-feature2.png';
import easyCart3 from '../assets/images/easy-cart/project-feature3.png';
import webPrintHero from '../assets/images/web-print/web-print.png';
import webPrint1 from '../assets/images/web-print/project-feature1.png';
import webPrint2 from '../assets/images/web-print/project-feature2.png';
import employeeDirectoryHero from '../assets/images/employee-directory/project-hero.png';
import employeeDirectory1 from '../assets/images/employee-directory/project-feature1.png';
import employeeDirectory2 from '../assets/images/employee-directory/project-feature2.png';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description?: string [];
  features?: string [];
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
    description: [
      "Easy Cart Your Smart Shopping Companion Easy Cart is a feature-packed mobile application designed to make your shopping experience seamless, organized, and efficient. Whether you're grocery shopping, planning an event, or managing your household needs, Easy Cart simplifies the process and keeps everything in one place.",
      "The app includes a variety of advanced features to enhance usability and productivity. Users can sort and filter items by name, date, or priority, export lists as PDFs, and mark items or entire lists as purchased. Easy Cart also supports smart functionalities like list duplication, undo actions, clearing all items, and searching items by name. Additional tools like a favorites list and priority tagging make frequent shopping even faster.",
      "User experience is a core focus of Easy Cart. From the splash screen and first-time tutorial to in-app reminders and trash recovery, every interaction is designed with convenience in mind. Notifications help users stay on top of shopping days, while deleted lists can be restored from the trash. Built with React Native, Laravel, and MySQL, Easy Cart delivers a responsive, full-featured shopping assistant right at your fingertips."
    ],
    features: [
      "Upload JSON files securely",
      "Follower Growth Visualization",
      "Facebook Friends Report",
      "Backend processing with Django & Pandas",
      "Data visualization using Matplotlib",
      "Modular UI ready for future expansions",
    ],
    techStack: ["Kotlin", "Android Studio", "Mobile App "],
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
    description: [
      "Web-Print, a web app designed to analyze and visualize social media data using React (frontend) and Django (backend). The first feature I built focuses on Follower Growth Analysis, allowing users to upload JSON files and generate insightful visualizations.",
      "Web-Print is a data-driven web application built using React and Django, designed to analyze and visualize social media data. Users can upload their exported JSON files to generate insightful visual reports, such as Follower Growth Trends and Facebook Friends Analysis. With a focus on usability and modular design, Web-Print transforms complex datasets into clear, interactive charts powered by Pandas and Matplotlib, making it easier to interpret engagement patterns and relationships over time.",
      "This project challenged me to dive deep into backend file handling, asynchronous processing, and frontend state management. By implementing secure upload handling, dynamic UI updates, and expandable architecture, I ensured the platform is scalable for additional data features in the future. It reflects my ability to work across the stack and solve real-world problems through clean code and thoughtful design.",
    ],
    features: [
      "Upload JSON data securely",
      "Process and analyze data with Django",
      "Generate interactive visualizations",
      "Modular UI for future feature expansion",
      "Following Report Analysis – Upload your JSON file to visualize your follower growth over time",
      "Facebook Friends Analysis – Gain insights into your Facebook friends' data with interactive reports",
    ],
    date: "February 2025",
    imageUrl: webPrintHero,
    techStack: ["React", "Django", "Data visualization"],
    githubUrl: "https://github.com/paras603/web_print",
    backgroundColor: "bg-gradient-to-r from-yellow-400 to-orange-500",  
    images: [webPrintHero, webPrint1, webPrint2]  
  },
  {
    id: 3,
    slug: "employee-directory",
    title: "Employee Directory",
    description: [
      "Employee Directory is a SwiftUI-based iOS application that displays a list of employees fetched from a remote JSON endpoint. The app is designed following the MVVM architecture to ensure clean separation of concerns and scalable code structure.",
      "The app includes four main screens: onboarding (shown once using @AppStorage), employee list with search and pull-to-refresh, employee detail view with full info and high-resolution images, and a settings screen that displays the developer's details. Images are cached on disk using AsyncImage to minimize bandwidth usage, and the app handles loading, empty, and error states for a polished user experience.",
      "Network responses are cached during app runtime to reduce unnecessary API calls. Error handling is built-in for malformed and empty JSON responses, with appropriate UI feedback. The app demonstrates proper state management, conditional UI rendering, and clean SwiftUI view composition, making it a great showcase of iOS development skills."
    ],
    features: [
      "MVVM architecture with clean ViewModel logic",
      "Onboarding screen shown once using @AppStorage",
      "Employee list fetched from JSON API with error and empty state handling",
      "Search functionality for employee names",
      "Pull-to-refresh retrieves data from local memory cache",
      "Employee detail view with full info and large cached photo using AsyncImage",
      "Disk-based image caching to reduce bandwidth",
      "Human-readable formatting for employee types (e.g., Full time, Contractor)",
      "Settings screen with developer info",
      "Proper error handling for network and data issues"
    ],
    date: "April 2024",
    techStack: ["Swift", "XCode", "SwiftUI", "iOS App Development"],
    imageUrl: employeeDirectoryHero,
    githubUrl: "https://github.com/paras603/EmployeeDirectory",
    backgroundColor: "bg-gradient-to-r from-sky-400 to-indigo-600",
    images: [ employeeDirectoryHero, employeeDirectory1, employeeDirectory2 ]
  },
];
