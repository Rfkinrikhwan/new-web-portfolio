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
        logo: "/clients/4.png", // Using existing logo to fix 404
        images: ["https://placehold.co/800x600"],
        longDescription: `Masterjems is a comprehensive Therapy Clinic Management System designed to replace manual scheduling and record-keeping with a digital solution.\n\nKey modules include:\n• Therapist-Centric Booking System: Enabling real-time slot management to prevent scheduling conflicts.\n• Electronic Medical Record (EMR): Tracking longitudinal patient history, chief complaints, diagnosis, and digital informed consents.\n• Point of Sale (POS): Custom module for service packages, supporting bundled treatments, down payments, and split payment methods.\n• Role-based Dashboards: Tailored views for Therapists (queue and commission history) and Admins (financial reporting).`,
        challenges: "Replacing traditional manual processes with a seamless digital workflow that accommodates complex therapy scheduling and historical patient data tracking.",
        solution: "Engineered a robust system using Laravel 11 and Vue 3, featuring a custom POS and an intuitive EMR module to ensure data accuracy and operational efficiency."
    },
    // {
    //     slug: "sikapsu",
    //     title: "SIKAPSU",
    //     description: "A Maritime Licensing Application for vessel management and document verification.",
    //     technologies: ["Laravel", "Svelte.js", "Tailwind CSS", "PostgreSQL"],
    //     year: "2025",
    //     type: "Web Application",
    //     logo: "/clients/7.png",
    //     images: ["/api/placeholder/800/600"],
    //     longDescription: `SIKAPSU is a web application developed for maritime vessel licensing management. It streamlines the verification process to help authorities process maritime documents more efficiently.\n\nMain features include:\n• Vessel licensing management\n• Application submissions for new licenses\n• Regional master data management\n• Deletion requests and data auditing`,
    //     challenges: "Managing complex maritime documentation and ensuring a fast, reliable verification workflow for government authorities.",
    //     solution: "Utilized the combination of Laravel and Svelte.js to create a highly responsive interface and a scalable backend capable of handling sensitive maritime data."
    // },
    {
        slug: "nagata-admin",
        title: "Nagata Admin Panel",
        description: "A dedicated photography service platform for streamlined booking and data management.",
        technologies: ["React.js", "Tailwind CSS", "Laravel", "RESTful API"],
        year: "2025",
        type: "Web Application",
        logo: "/clients/5.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `Nagata Admin Panel is a platform built specifically for photography service providers to manage their orders and customer interactions apart from other systems.\n\nCore responsibilities:\n• Developed frontend features for photography service admin panel\n• Assisted with backend data management processes\n• Implemented responsive design for improved user experience across all devices`,
        challenges: "Creating a separate, dedicated entity for photography services that remains intuitive and fast for administrative tasks.",
        solution: "Built as a separate entity using a modern React frontend and a robust Laravel backend, ensuring high performance and a clean UI/UX."
    },
    {
        slug: "bridetobe-id",
        title: "Bridetobe.id",
        description: "Full-stack admin panel for rental management specializing in clothing and accessories.",
        technologies: ["Laravel", "Inertia.js", "React.js", "Tailwind CSS"],
        year: "2025",
        type: "Web Application",
        logo: "/clients/1.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `Bridetobe.id is a comprehensive management application for rental businesses, specifically for clothing catalogs like dresses, suits, and shoes.\n\nKey features:\n• Full-stack management of clothing catalogs\n• Inventory tracking and stock management\n• Integrated rental booking system\n• Responsive interface for fast management experience`,
        challenges: "Developing a responsive and efficient interface for managing diverse rental catalogs and tracking bookings in real-time.",
        solution: "Leveraged the power of Inertia.js to bridge Laravel and React, providing a single-page application experience with the robustness of a traditional backend."
    },
    {
        slug: "attendance-app",
        title: "School Attendance App",
        description: "An automated attendance tracking system for schools with real-time parent notifications.",
        technologies: ["React Native", "Laravel", "WhatsApp API", "MySQL"],
        year: "2025",
        type: "Web & Mobile App",
        logo: "/clients/2.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `Developed a Junior High School attendance tracking system that automates the check-in process and keeps parents informed instantly.\n\nFeatures include:\n• Real-time attendance monitoring\n• Check-in system with instant parent notification upon arrival\n• Automated WhatsApp notification feature for parents\n• Improved communication channel between school and parents`,
        challenges: "Ensuring instant and reliable notifications to parents via WhatsApp as soon as students arrive at school.",
        solution: "Integrated a custom check-in system with a reliable WhatsApp API gateway and built a mobile monitoring app for school administrators."
    },
    {
        slug: "shanrise-web",
        title: "Shanrise Web Admin",
        description: "E-Learning & Institution Management Platform with CBT and automated grading.",
        technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Laravel"],
        year: "2022 - 2025",
        type: "Web Application",
        logo: "/clients/2.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `Shanrise is a modern Learning Management System (LMS) tailored for tutoring students preparing for psychology and entrance exams. It includes a comprehensive exam simulation environment.\n\nFeatures include:\n• Computer Based Test (CBT) module: Supports complex question types and automated grading.\n• Digital Signature Verification: Authenticating official documents and certificates directly within the platform.\n• Online Registration Workflow: Seamlessly integrates student data into the admin panel.\n• Financial Module (Cash Book): Tracks institution expenses and income involved in daily operations.`,
        challenges: "Building a scalable and secure CBT system capable of handling complex question structures and providing instant grading.",
        solution: "Used React with TypeScript and Vite for a blazing-fast admin interface, coupled with a robust Laravel backend for secure data processing and document verification."
    },
    {
        slug: "jdm-store",
        title: "JDM Store",
        description: "A comprehensive Retail & Production System for specialized textile and tailoring businesses.",
        technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL"],
        year: "2022 - 2025",
        type: "Web Application",
        logo: "/clients/3.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `JDM Store (Jaket Distro Medan) is a complex management system bridging retail sales and custom tailoring services (Stitching).\n\nKey features:\n• Complex Inventory Module: Handles multi-dimensional product variants (Category → Fabric → Color → Size).\n• Custom Stitching Management: Allows users to create made-to-measure orders by assigning specific fabrics and measurements.\n• Member Portal: Allows loyal customers to view catalogs and place orders independently.\n• High-performance POS interface: Capable of handling mixed carts (retail items + custom stitching services).`,
        challenges: "Managing multi-dimensional inventory and the complexity of integrating custom tailoring services into a standard POS workflow.",
        solution: "Engineered a sophisticated inventory system and a custom POS interface using React and Laravel, enabling seamless management of both ready-to-wear and custom products."
    },
    {
        slug: "cabita-admin",
        title: "Cabita Admin Panel",
        description: "Photography Service Management for studio workflows and customer bookings.",
        technologies: ["Vue.js", "Bootstrap", "Laravel", "SCSS"],
        year: "2025",
        type: "Web Application",
        logo: "/clients/1.png",
        images: ["https://placehold.co/800x600"],
        longDescription: `Cabita Admin Panel is designed for photography businesses to manage studio orders, customer data, and photo galleries efficiently.\n\nResponsibilities:\n• Focused on frontend development using Vue.js and Bootstrap\n• Contributed to backend logic implementation for managing photography services\n• Built a user-friendly interface for service booking and photo gallery management`,
        challenges: "Simplifying the photography booking workflow while providing a rich gallery management experience for studio owners.",
        solution: "Developed a streamlined UI with Vue and integrated it with a Laravel backend to provide a robust yet easy-to-use platform for studio management."
    }
];
