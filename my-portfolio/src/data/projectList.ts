import { images } from "../assets/imagePath";

export const projects = [
  {
    title: "E-SchoolApp",
    subtitle: "(Web Application - Capstone Project)",
    description:
      "A web application that communication and collaboration platform for student and teacher.",
    features:
      "Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.",
    repository: "https://github.com/CODEX-17/E-SchoolApp.git",
    thumbnail: images.eSchoolLoginPic,
    icon: images.eSchoolAppLogo,
    project_type: "web",
  },
  {
    title: "Smart Library Management System",
    subtitle: "(Web Application)",
    description:
      "A web-based system designed to streamline the borrowing and returning of books for students and guests, with automated email notifications for due dates.",
    features:
      "User-friendly borrowing and return process, email deadline notifications, guest access requests, admin dashboard for tracking borrowed books, approving guest requests, and managing book records and user data.",
    repository: "https://github.com/CODEX-17/smart-library.git",
    thumbnail: images.smartLibraryThumbnail,
    icon: images.smartLibraryLogo,
    project_type: "web",
  },
  {
    title: "Scholarhip Management System",
    subtitle: "(Web Application)",
    description:
      "A web app that simplifies scholarship applications and management for scholars and administrators.",
    features:
      "Account creation, admin posting and updates, dashboard for monitoring scholarships, available slots, and program details.",
    repository:
      "https://github.com/CODEX-17/SCHOLARSHIP-APPLICATION-AND-TRACKING-MANAGEMENT-SYSTEM.git",
    thumbnail: images.scholarshipPic,
    icon: images.scholarshipLogo,
    project_type: "web",
  },
  {
    title: "NFRDI Procurement Dashboard",
    subtitle: "(Web Application - Internship Project)",
    description: `A web app that streamlines NFRDI's procurement process with transparency, efficiency, and real-time tracking.`,
    features:
      "Manages procurement data, bidding, and alternative methods, providing an overview with options to add, edit, and delete records.",
    repository: "https://github.com/CODEX-17/NFRDI-Procurement-Dashboard.git",
    thumbnail: images.NFRDIPic,
    icon: images.NFRDILogo,
    project_type: "web",
  },
  {
    title: "Hours Calculator",
    subtitle: "(Web Application)",
    description: `A web-based system that calculates the total hours rendered during On-the-Job Training (OJT), tailored for student trainees.`,
    features:
      "Tracks daily logs, computes total OJT hours, and generates downloadable reports based on the format required by the student’s school.",
    repository: "https://github.com/CODEX-17/Hours-Calculator-V2.git",
    thumbnail: images.hourCalThumbnail,
    icon: images.hourCalLogo,
    project_type: "web",
  },
  {
    title: "Separ Book App",
    subtitle: "(Mobile Application)",
    description: `A mobile application built using React Native and Expo, designed to help users read and interact with the sacred book of Yahuweh. It features verse tracking, offline reading, and a ranking system based on user reading activity.`,
    features:
      "Read divine verses from the Separ of Yahuweh, track user ranking based on the number of verses read, full offline support using Expo local database, verse search and navigation, optional light/dark mode and notifications, clean and intuitive UI.",
    repository: "https://github.com/CODEX-17/Separ_Book_Mobile_App.git",
    thumbnail: images.separThumbnail,
    icon: images.separLogo,
    project_type: "mobile",
  },
];
