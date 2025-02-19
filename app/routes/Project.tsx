import { useState } from 'react';
import { MetaFunction } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

export const meta: MetaFunction = () => {
    return [
        { title: "Project | Rifki" },
        { name: "description", content: "🚀 Building Scalable Web & Mobile Solutions" },
    ];
};

const projects = [
    {
        title: "Kaos Nyaman",
        description: "A mobile app for recording clothing sales, purchases, and customer data management.",
        technologies: ["React Native", "JavaScript"],
        year: "2023",
        type: "Mobile App",
        logo: "/clients/4.png",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            Kaos Nyaman is a mobile application designed to help clothing businesses manage transactions efficiently.
            Key features include:
            • Real-time clothing sales recording
            • Stock purchase management
            • Customer data management
            • Simple financial reporting
        `,
        challenges: "Developing a fast and easy-to-use transaction recording system for business owners with minimal tech knowledge.",
        solution: "We designed an intuitive UI with simple navigation and automation features to streamline transaction recording."
    },
    {
        title: "JDMStore",
        description: "A multi-platform business management app for tracking sales, purchases, and clothing production.",
        technologies: ["React", "TypeScript", "Tailwind", "React Native", "Expo", "Laravel"],
        year: "2024",
        type: "Web & Mobile App",
        logo: "/clients/3.png",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            JDMStore is a comprehensive business solution for the clothing industry, featuring both a web admin and a mobile admin app.
            Key features include:
            • Sales and order tracking
            • Supplier purchase management
            • Clothing production tracking
            • Business revenue monitoring
            • Multi-platform system (web & mobile)
        `,
        challenges: "Building a complex system with two synchronized platforms (web and mobile).",
        solution: "We implemented an API-based architecture using Laravel as the backend, along with React + TypeScript + Tailwind for the web app and React Native + Expo for the mobile app."
    },
    {
        title: "Shanrise",
        description: "A web-based application for police, CPNS, IPDN, and STAN entrance exam simulations.",
        technologies: ["React", "TypeScript", "Tailwind", "Vue", "JavaScript", "Bootstrap", "Laravel 11"],
        year: "2024 - 2025",
        type: "Web Application",
        logo: "/clients/2.png",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            Shanrise is an online exam simulation platform designed to help students prepare for police, CPNS, IPDN, and STAN entrance exams.
            The system consists of:
            • An admin panel for managing questions, classes, and students
            • A CBT (Computer-Based Test) platform where students take exams based on their chosen program
        `,
        challenges: "Ensuring a smooth and scalable exam experience while handling a large number of simultaneous users.",
        solution: "We optimized the backend with Laravel 11 and implemented efficient real-time exam processing. The system uses React + TypeScript + Tailwind for the admin panel and Vue + JavaScript + Bootstrap for the CBT platform."
    },
    {
        title: "Cabita",
        description: "A web-based platform for managing photography service orders and customer data.",
        technologies: ["Vue", "JavaScript", "Bootstrap", "SCSS"],
        year: "2025",
        type: "Web Application",
        logo: "/clients/1.png",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            Cabita is a web application designed for photography businesses to efficiently manage service orders and customer data.
            Key features include:
            • Order management for photography services
            • Customer data management
            • Booking tracking and scheduling
            • Responsive and user-friendly interface
        `,
        challenges: "Creating an intuitive system that simplifies order and customer management while maintaining scalability.",
        solution: "We developed a streamlined UI using Vue, JavaScript, Bootstrap, and SCSS to ensure a responsive and efficient workflow for photography service providers."
    }
];

export default function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState<any>(false)

    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#333]">Project</h1>

            <p className="leading-8 text-[#666]">
                🚀 Building Scalable Web & Mobile Solutions
            </p>

            <div className="border my-4 border-dashed" />

            <p className="leading-7">
                For the past three years, I have been actively involved in various projects focusing on SMEs and companies
                launching their businesses or products. My role extends beyond frontend development, as I also contribute to
                backend development using Laravel and PHP, as well as mobile application development with React Native.
            </p>

            <p className="mt-4 leading-7">
                With expertise in JavaScript, TypeScript, and modern frontend frameworks, I create high-performance web
                applications that provide seamless user experiences. On the backend, I leverage Laravel and PHP to build
                robust, scalable, and secure systems. Additionally, my experience in mobile development allows businesses
                to expand their reach with responsive and feature-rich applications.
            </p>

            <div className="border my-4" />

            <div className="grid gap-6">
                {projects.map((project: any, index) => (
                    <Card
                        key={index}
                        className="z-50 group hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => {
                            setSelectedProject(project);
                            setIsModalOpen(true);
                        }}
                    >
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                        <CardDescription className="text-sm text-gray-500">
                                            {project.year} • {project.type}
                                        </CardDescription>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech: any, techIndex: any) => (
                                    <Badge
                                        key={techIndex}
                                        variant="secondary"
                                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                {selectedProject && (
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={selectedProject.logo} 
                                    alt={`${selectedProject.title} logo`}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                                    <DialogDescription>
                                        {selectedProject.year} • {selectedProject.type}
                                    </DialogDescription>
                                </div>
                            </div>
                        </DialogHeader>

                        <Carousel className="w-full mb-6">
                            <CarouselContent>
                                {selectedProject.images.map((image: any, index: any) => (
                                    <CarouselItem key={index}>
                                        <img 
                                            src={image} 
                                            alt={`${selectedProject.title} preview ${index + 1}`}
                                            className="w-full rounded-lg object-cover"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {selectedProject.challenges}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Solution</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {selectedProject.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech: any, index: any) => (
                                        <Badge 
                                            key={index}
                                            variant="secondary" 
                                            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                )}
            </Dialog> */}

            <div className="mb-48" />
        </div>
    );
}