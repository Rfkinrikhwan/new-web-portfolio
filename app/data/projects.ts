export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    year: string;
    type: string;
    logo: string;
    images: string[];
    longDescription: string;
    challenges: string;
    solution: string;
}

export const projects: Project[] = [
    {
        slug: "masterjems",
        title: "Masterjems",
        description: "A specialized Clinic Management System for therapy centers to streamline operations and patient records.",
        technologies: ["Laravel 11", "Vue 3", "Tailwind CSS", "MySQL"],
        year: "2026",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/masterjems-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/masterjems/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/masterjems/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/masterjems/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/masterjems/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/masterjems/5.jpg",
        ],
        longDescription: `Masterjems is a comprehensive Therapy Clinic Management System designed to replace manual scheduling and record-keeping with a digital solution.\n\nKey modules include:\n• Therapist-Centric Booking System: Enabling real-time slot management to prevent scheduling conflicts.\n• Electronic Medical Record (EMR): Tracking longitudinal patient history, chief complaints, diagnosis, and digital informed consents.\n• Point of Sale (POS): Custom module for service packages, supporting bundled treatments, down payments, and split payment methods.\n• Role-based Dashboards: Tailored views for Therapists (queue and commission history) and Admins (financial reporting).`,
        challenges: "Replacing traditional manual processes with a seamless digital workflow that accommodates complex therapy scheduling and historical patient data tracking.",
        solution: "Engineered a robust system using Laravel 11 and Vue 3, featuring a custom POS and an intuitive EMR module to ensure data accuracy and operational efficiency."
    },
    {
        slug: "sikapsu",
        title: "SIKAPSU",
        description: "A Maritime Licensing Application for vessel management and document verification.",
        technologies: ["Laravel", "Svelte.js", "Tailwind CSS", "MySQL"],
        year: "2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/sikapsu-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/sikapsu/7.jpg",
        ],
        longDescription: `SIKAPSU is a web application developed for maritime vessel licensing management. It streamlines the verification process to help authorities process maritime documents more efficiently.\n\nMain features include:\n• Vessel licensing management\n• Application submissions for new licenses\n• Regional master data management\n• Deletion requests and data auditing`,
        challenges: "Managing complex maritime documentation and ensuring a fast, reliable verification workflow for government authorities.",
        solution: "Utilized the combination of Laravel and Svelte.js to create a highly responsive interface and a scalable backend capable of handling sensitive maritime data."
    },
    // {
    //     slug: "nagata-admin",
    //     title: "Nagata Admin Panel",
    //     description: "A dedicated photography service platform for streamlined booking and data management.",
    //     technologies: ["Vue.js", "Bootstrap", "Laravel", "RESTful API", "MySQL"],
    //     year: "2025",
    //     type: "Web Application",
    //     logo: "https://assets.rfkinrikhwan.my.id/clients/nagata-logo.webp",
    //     images: ["https://placehold.co/800x600"],
    //     longDescription: `Nagata Admin Panel is a platform built specifically for photography service providers to manage their orders and customer interactions apart from other systems.\n\nCore responsibilities:\n• Developed frontend features for photography service admin panel\n• Assisted with backend data management processes\n• Implemented responsive design for improved user experience across all devices`,
    //     challenges: "Creating a separate, dedicated entity for photography services that remains intuitive and fast for administrative tasks.",
    //     solution: "Built as a separate entity using a modern React frontend and a robust Laravel backend, ensuring high performance and a clean UI/UX."
    // },
    {
        slug: "cabita-admin",
        title: "Cabita Admin Panel",
        description: "Photography Service Management for studio workflows and customer bookings.",
        technologies: ["Vue.js", "Bootstrap", "Laravel", "RESTful API", "MySQL"],
        year: "2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/cabita-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/cabita/7.jpg",
        ],
        longDescription: `Cabita Admin Panel is designed for photography businesses to manage studio orders, customer data, and photo galleries efficiently.\n\nResponsibilities:\n• Focused on frontend development using Vue.js and Bootstrap\n• Contributed to backend logic implementation for managing photography services\n• Built a user-friendly interface for service booking and photo gallery management`,
        challenges: "Simplifying the photography booking workflow while providing a rich gallery management experience for studio owners.",
        solution: "Developed a streamlined UI with Vue and integrated it with a Laravel backend to provide a robust yet easy-to-use platform for studio management."
    },
    {
        slug: "bridetobe-id",
        title: "Bridetobe.id",
        description: "Full-stack admin panel for rental management specializing in clothing and accessories.",
        technologies: ["Laravel", "React.js", "Tailwind CSS", "MySQL"],
        year: "2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/bridetobe-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/bridetobe/7.jpg",
        ],
        longDescription: `Bridetobe.id is a comprehensive management application for rental businesses, specifically for clothing catalogs like dresses, suits, and shoes.\n\nKey features:\n• Full-stack management of clothing catalogs\n• Inventory tracking and stock management\n• Integrated rental booking system\n• Responsive interface for fast management experience`,
        challenges: "Developing a responsive and efficient interface for managing diverse rental catalogs and tracking bookings in real-time.",
        solution: "Leveraged the power of Inertia.js to bridge Laravel and React, providing a single-page application experience with the robustness of a traditional backend."
    },
    {
        slug: "numberwise",
        title: "Numberwise",
        description: "An interactive educational platform designed to make mathematics learning engaging through gamification and specialized calculation tools.",
        technologies: ["React.js", "Tailwind CSS", "JavaScript"],
        year: "2024",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/wise-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/number-wise/7.jpg",
        ],
        longDescription: `Numberwise was developed as a college project with the vision of transforming mathematics from a daunting subject into an enjoyable, interactive experience. The platform bridges the gap between traditional learning and modern digital engagement by integrating educational modules with gaming elements.\n\nCore Functionalities:\n• Gamified Learning: Engaging students with math challenges that feel more like playing than studying.\n• Number Sequence Generator: A specialized tool for generating and analyzing various mathematical series (deret bilangan).\n• Conversion Calculator: Comprehensive tools for unit and base conversions.\n• Logic Math Suite: Interactive tools for exploring logical operations, including automated truth table generators.\n• Built-in Math Games: Dedicated mini-games designed to sharpen mental calculation and logical reasoning skills.`,
        challenges: "Designing a system that effectively balances educational rigor with an entertaining user interface, ensuring that the gaming elements didn't overshadow the primary learning objectives.",
        solution: "Developed a client-side web application using React, implementing all mathematical algorithms and logic directly in the browser to ensure a responsive and interactive user experience without the need for a dedicated backend."
    },
    {
        slug: "shanrise-web-admin",
        title: "Shanrise Web Admin",
        description: "Institution Management Platform for managing exams, classes, students, and financial records.",
        technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Laravel"],
        year: "2022 - 2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/shanrise-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/7.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-admin/8.jpg",
        ],
        longDescription: `Shanrise Web Admin is the back-office management platform for the Shanrise e-learning institution. It provides comprehensive tools for administrators to manage all aspects of the institution's operations.\n\nKey features:\n• Class & Student Management: Assign students to classes, manage enrollment, and track academic progress.\n• Exam Management: Create, configure, and assign CBT exams to specific classes and schedules.\n• Digital Signature Verification: Authenticate official documents and certificates directly within the platform.\n• Online Registration Workflow: Seamlessly integrates new student data into the system.\n• Financial Module (Cash Book): Tracks institution expenses and income for daily operations.`,
        challenges: "Building a scalable admin platform that can handle complex relationships between classes, students, exams, and financial records while keeping the UI intuitive for non-technical administrators.",
        solution: "Used React with TypeScript and Vite for a blazing-fast admin interface, coupled with a robust Laravel backend for secure data processing, document verification, and role-based access control."
    },
    {
        slug: "shanrise-web-cbt",
        title: "Shanrise CBT",
        description: "Computer-Based Test platform for students to take structured exams with automated grading.",
        technologies: ["Vue 2", "Bootstrap", "Laravel"],
        year: "2022 - 2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/shanrise-logo.webp",
        images: [
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/1.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/2.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/3.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/4.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/5.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/6.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/7.jpg",
            "https://assets.rfkinrikhwan.my.id/project-showcase/shanrise-web-cbt/8.jpg",
        ],
        longDescription: `Shanrise CBT is the student-facing exam platform built as part of the Shanrise e-learning ecosystem. It provides a secure and streamlined environment for students to take computer-based tests.\n\nKey features:\n• Structured Exam Interface: Clean, distraction-free UI optimized for focused test-taking.\n• Multiple Question Types: Supports various question formats including multiple choice and essay.\n• Automated Grading: Instant score calculation upon exam submission.\n• Exam Timer: Built-in countdown timer with auto-submit when time expires.\n• Result Dashboard: Students can review their answers and scores after completing an exam.`,
        challenges: "Ensuring a stable, secure, and fair exam environment that prevents cheating while remaining accessible and responsive across different devices.",
        solution: "Built a dedicated student-facing frontend using Vue 2 and Bootstrap, integrated with the same robust Laravel backend used by the Admin Panel to ensure synchronized data management and secure exam processing."
    },
    {
        slug: "jdm-store",
        title: "JDM Store",
        description: "A comprehensive Retail & Production System for specialized textile and tailoring businesses.",
        technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL"],
        year: "2022 - 2025",
        type: "Web Application",
        logo: "https://assets.rfkinrikhwan.my.id/clients/jdm-logo.webp",
        images: ["https://placehold.co/800x600"],
        longDescription: `JDM Store (Jaket Distro Medan) is a complex management system bridging retail sales and custom tailoring services (Stitching).\n\nKey features:\n• Complex Inventory Module: Handles multi-dimensional product variants (Category → Fabric → Color → Size).\n• Custom Stitching Management: Allows users to create made-to-measure orders by assigning specific fabrics and measurements.\n• Member Portal: Allows loyal customers to view catalogs and place orders independently.\n• High-performance POS interface: Capable of handling mixed carts (retail items + custom stitching services).`,
        challenges: "Managing multi-dimensional inventory and the complexity of integrating custom tailoring services into a standard POS workflow.",
        solution: "Engineered a sophisticated inventory system and a custom POS interface using React and Laravel, enabling seamless management of both ready-to-wear and custom products."
    },
];
