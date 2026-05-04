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
        longDescription: `Masterjems is a comprehensive Therapy Clinic Management System designed to replace manual scheduling and record-keeping with a digital solution. Therapy clinics in Indonesia often rely on handwritten schedules and paper records, creating chaos in appointment management and patient history tracking. The system covers three core pillars: a therapist-centric booking engine, an electronic medical record module for longitudinal patient history, and a custom POS supporting bundled treatments and split payments. A separate patient-facing portal was also built, allowing patients to independently book sessions and choose their preferred therapist based on real-time availability.`,
        challenges: "Replacing traditional manual processes with a seamless digital workflow that accommodates complex therapy scheduling, historical patient data tracking, and a self-service booking experience for patients.",
        solution: "Engineered a role-based system using Laravel 11 and Vue 3, where each user — patient, therapist, admin, and owner — interacts with the same data through a tailored interface. Built a real-time availability engine, an intuitive EMR module, and a custom POS to ensure data accuracy and operational efficiency."
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
        longDescription: `SIKAPSU is a web application developed for maritime vessel licensing management, helping government authorities process maritime documents more efficiently. The platform handles application submissions, vessel data, deletion requests, and regional master data in one centralized system.`,
        challenges: "Maritime licensing involves sensitive, multi-step documentation that varies by vessel type and region. The existing manual process was slow and error-prone, requiring a digital solution that is both reliable and easy to use for non-technical government staff.",
        solution: "Leveraged Laravel for a structured, secure backend and Svelte.js for a highly responsive frontend interface. Designed the system around the actual verification workflow used by authorities, minimizing the learning curve while significantly improving document processing speed."
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
        longDescription: `Bridetobe.id is a full-stack admin panel built for a wedding clothing rental business to manage their catalog, inventory, and booking system in one place. The platform covers dresses, suits, shoes, and accessories — each with their own stock tracking and rental booking flow. Built with a REST API architecture separating the Laravel backend from the React.js frontend.`,
        challenges: "Managing a diverse rental catalog with multiple product categories, each requiring independent inventory tracking, while ensuring the booking system prevents double rentals and keeps stock data accurate in real-time.",
        solution: "Built a RESTful API using Laravel as the backend and React.js as the frontend, enabling a clean and scalable separation of concerns. Implemented an inventory tracking system per product category and an integrated booking flow that automatically updates stock availability upon confirmation."
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
        longDescription: `Shanrise Web Admin is the back-office management platform for Shanrise, a psychology tutoring institution. It provides tools for administrators to manage classes, students, exams, financial records, and official document verification — all within a single platform built and maintained over 3 years.`,
        challenges: "Building a long-running platform that scales with the institution's growing needs — from basic student management to complex features like digital signature verification and a financial cash book — while keeping the UI intuitive for non-technical administrators.",
        solution: "Used React with TypeScript and Vite for a fast, maintainable frontend, paired with a Laravel backend for secure data processing and role-based access control. The system was iteratively developed over 3 years, with new modules added without disrupting existing workflows."
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
        longDescription: `Shanrise CBT is the student-facing exam platform built as part of the Shanrise e-learning ecosystem. It provides a secure and streamlined environment for students to take computer-based tests with automated grading, built-in timers, and a post-exam result dashboard.`,
        challenges: "Ensuring a stable, fair, and synchronized exam experience for students — where exam data, timing, and grading all need to stay in sync with the admin panel in real-time, even under concurrent usage.",
        solution: "Built a dedicated student-facing frontend using Vue 2 and Bootstrap, tightly integrated with the same Laravel backend used by the admin panel. Implemented a countdown timer with auto-submit and an automated grading engine to deliver instant, accurate results upon exam completion."
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
