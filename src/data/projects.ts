import { 
  easyCartHero, easyCart1, easyCart2, easyCart3,
  webPrintHero, webPrint1, webPrint2,
  employeeDirectoryHero, employeeDirectory1, employeeDirectory2,
  bookLibraryHero, bookLibrary1, bookLibrary2,
  recreationalHero
 } from '../assets/images/index';

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
      "Smart list sorting and filtering",
      "Export lists to PDF",
      "Duplicate and undo list actions",
      "Search and prioritize items",
      "Trash recovery and notifications",
      "Favorites list and priority tagging",
    ],
    techStack: ["Kotlin", "Android Studio",],
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
  {
    id: 4,
    slug: "book-library",
    title: "Book Library",
    description: [
      "A cross-platform mobile app built with React Native and Firebase that allows library users to browse and borrow books. Designed for both Android and iOS platforms.",
      "It is a cross-platform mobile application built with React Native, designed to enhance how users interact with a library system. The app allows users to securely sign up and log in using Firebase Authentication, creating a personalized experience for browsing and borrowing books. Once logged in, users can view available books, search by title or author, and borrow them with a simple tap. The clean and responsive UI ensures smooth navigation across both Android and iOS devices.",
      "The backend is powered by Firebase Firestore, enabling real-time data syncing and scalable storage for user and book data. Each user has a unique borrowing history, and book availability is dynamically updated across all devices. With a full authentication flow, real-time database interactions, and seamless cross-platform performance, Book Library showcases my ability to develop secure, cloud-connected mobile apps with modern design and functionality.",
    ],
    features: [
      "Register and Login into the system",
      "Browse available books in the library",
      "Search for books by title or author",
      "Borrow books with one tap",
      "View borrowing history",
      "Firebase authentication for user login",
      "Real-time updates using Firestore",
    ],
    date: "March 2024",
    techStack: ["React Native", "Firebase", "Cross-platform"],
    imageUrl: bookLibraryHero,
    githubUrl: "https://github.com/paras603/book-library",
    backgroundColor: "bg-gradient-to-r from-sky-400 to-indigo-600",
    images: [ bookLibraryHero, bookLibrary1, bookLibrary2],
  },
  {
    id: 5,
    slug: "recreational-center",
    title: "Recreational Center",
    description: [
      "A C# Windows Forms application for managing a recreation center with separate login systems and dashboards for Admin and Staff. Built using Visual Studio.",
      "The Recreation Center Management System is a desktop application developed in C# using Windows Forms in Visual Studio. It offers a secure and user-friendly environment for managing facility operations through differentiated access for Administrators and Staff. Administrators log in through the Admin Login, granting them access to the Admin Dashboard, where they can oversee staff accounts and perform high-level management tasks. Staff members use the Staff Login to access the Staff Dashboard, enabling them to efficiently manage day-to-day operations like check-ins, activity tracking, and schedule coordination. The project utilizes .Designer.cs and .resx files for UI layout and resource organization, while application settings are handled through the App.config file, all coordinated from the Program.cs entry point.",
      "Built with clarity and structure in mind, the system emphasizes clean separation between user roles and their respective functionalities, making it straightforward to enhance with features like database integration, improved validation, or richer UI experiences in the future. Its modular design highlights maintainability and scalability—qualities that are essential for practical software solutions. Whether you're interested in understanding workflow logic, UI architecture, or C# application structure, this project represents a solid demonstration of foundational WinForms development, role-based access control, and organized coding practices.",
    ],
    features: [
      "Admin and Staff login system",
      "Role-based dashboards for Admin and Staff",
      "Built using Windows Forms and Visual Studio",
      "Centralized configuration with App.config",
      "Clean code organization (Program.cs, .Designer.cs, .resx)",
      "Scalable structure for future features like database integration",
    ],
    date: "February 2022",
    techStack: ["C#", ".NET (Windows Forms)", "Visual Studio"],
    imageUrl: recreationalHero,
    githubUrl: "https://github.com/paras603/recreation-center",
    backgroundColor: "bg-gradient-to-r from-sky-400 to-indigo-600",
    images: [recreationalHero],
  },
];
