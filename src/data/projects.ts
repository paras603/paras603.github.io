import { 
  easyCartHero, easyCart1, easyCart2, easyCart3,
  webPrintHero, webPrint1, webPrint2,
  employeeDirectoryHero, employeeDirectory1, employeeDirectory2,
  bookLibraryHero, bookLibrary1, bookLibrary2,
  recreationalHero,
  cityTravellerHero, cityTraveller1, cityTraveller2,
  laravelHero,
  animeRecommendationHero,
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

const projectList: Project[] = [
  {
    id: 1,
    slug: 'easy-cart',
    title: "Easy Cart",
    description: [
      "Easy Cart Your Smart Shopping Companion Easy Cart is a feature-packed mobile application designed to make your shopping experience seamless, organized, and efficient. Whether you're grocery shopping, planning an event, or managing your household needs, Easy Cart simplifies the process and keeps everything in one place.",
      "The app includes a variety of advanced features to enhance usability and productivity. Users can sort and filter items by name, date, or priority, export lists as PDFs, and mark items or entire lists as purchased. Easy Cart also supports smart functionalities like list duplication, undo actions, clearing all items, and searching items by name. Additional tools like a favorites list and priority tagging make frequent shopping even faster.",
      "User experience is a core focus of Easy Cart. From the splash screen and first-time tutorial to in-app reminders and trash recovery, every interaction is designed with convenience in mind. Notifications help users stay on top of shopping days, while deleted lists can be restored from the trash. Built with Android Studio (Kotlin), Easy Cart delivers a responsive, full-featured shopping assistant right at your fingertips."
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
    techStack: ["React", "Django", "Data visualization", "Python"],
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
  {
    id: 6,
    slug: "city-traveller",
    title: "City Traveller",
    description: [
      "This website presents you the beautiful geography of Nepal. If you are planning to spend your next vacation in Nepal, this website has everything you need.",
      "CityTraveller is a travel-oriented website that showcases the breathtaking geography and rich cultural heritage of Nepal. Designed to be the perfect planning companion for your next vacation, the website offers detailed insights into top destinations, popular tour packages, and travel tips. Developed by Roshan Budhathoki and Paras Mani Rai, CityTraveller includes a thoughtfully designed homepage and contact page by Roshan, while Paras focused on the destinations and tour packages sections. Both team members collaborated on the overall design principles, accessibility standards, and SEO strategies to ensure the site is both visually engaging and easy to find online.",
      "The website follows key design principles such as proximity, contrast, alignment, repetition, and typography to provide a clean, intuitive user experience. Accessibility was prioritized through features like text alternatives for images, responsive design, and proper semantic HTML, making the site inclusive for all users. For search engine optimization, techniques such as meta tags, alt text, and header structuring were implemented to increase visibility. All visual content is sourced from Pexels, ensuring high-quality, copyright-free imagery that enhances the overall appeal of the site.",
    ],
    features: [
      "User-Friendly Interface",
      "Destination Highlights",
      "Tour Packages",
      "Responsive Design",
      "Accessibility Features",
      "Meta tags and keywords included to improve visibility on search engines (SEO)"
    ],
    date: "August 2024",
    techStack: ["HTML", "CSS"],
    imageUrl: cityTravellerHero,
    githubUrl: "https://github.com/paras603/citytraveller",
    backgroundColor: "bg-gradient-to-r from-sky-400 to-indigo-600",
    images: [cityTravellerHero, cityTraveller1, cityTraveller2],
  },
{
  id: 7,
  slug: "my-stay",
  title: "myStay - Homestay Booking Website",
  description: [
    "myStay is a full-featured homestay booking platform built with Laravel and MySQL. It allows users to search and book homestays based on location, date, and preferences, while giving homestay owners a dashboard to manage listings, bookings, and availability.",
    "This project focuses on creating a seamless two-sided experience — travelers can easily find and reserve accommodations, and hosts can efficiently list properties and manage reservations. The application includes secure authentication, real-time availability checks, and an intuitive interface built with responsive design in mind.",
    "The admin panel offers complete control over users, listings, and reservations, making it a scalable solution for real-world deployment. Emphasis was placed on UX/UI best practices and mobile optimization to ensure a clean, professional look across all devices.",
  ],
  features: [
    "User Registration and Authentication",
    "Advanced Homestay Search (by location, date, and preferences)",
    "Detailed Property Pages (with room types, pricing, and amenities)",
    "Reservation System with Secure Payment Integration",
    "Homestay Owner Dashboard (property and booking management)",
    "Admin Panel for Full Control over Platform Data",
    "Responsive and Mobile-Friendly Design",
  ],
  date: "August 2021",
  techStack: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
  imageUrl: laravelHero, 
  githubUrl: "https://github.com/paras603/myStay", 
  backgroundColor: "bg-gradient-to-r from-rose-400 to-purple-500",
  images: [laravelHero], 
},
{
  "id": 8,
  "slug": "anime-recommender",
  "title": "Anime Recommendation System",
  "description": [
    "A content-based recommendation system built with Python that suggests similar anime titles based on genre similarity using TF-IDF and cosine similarity.",
    "This terminal-based project allows users to input an anime title and returns top 10 similar titles. It uses machine learning techniques like TF-IDF vectorization and Nearest Neighbors to compare anime genre data.",
    "Ideal for anime fans or as an educational project to demonstrate content-based filtering with real-world datasets. It emphasizes data cleaning, vectorization, and cosine similarity."
  ],
  "features": [
    "Content-based filtering using TF-IDF and Cosine Similarity",
    "Search anime titles and get top 10 recommendations",
    "Preprocessing of multi-label genre data",
    "Removes unknown or incomplete data fields",
    "CLI-based interaction for simplicity and speed",
    "Modular Python code with clean logic separation"
  ],
  "date": "March 2021",
  "techStack": ["Python", "Pandas", "NumPy", "scikit-learn", "SciPy"],
  "imageUrl": animeRecommendationHero, 
  "githubUrl": "https://github.com/paras603/anime-recommendation",
  "backgroundColor": "bg-gradient-to-r from-blue-400 to-indigo-500",
  "images": [animeRecommendationHero]
}


];

export const latestProject: Project[] = [...projectList]
  .sort((a,b) => b.id - a.id)
  .slice(0,6);

export { projectList };
