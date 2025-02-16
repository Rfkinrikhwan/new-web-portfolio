import React, { useState } from 'react';
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
        title: "E-Commerce Platform",
        description: "Built a scalable e-commerce platform for a local retail business using React, TypeScript, and Laravel.",
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        year: "2023",
        type: "Web Application",
        logo: "/api/placeholder/64/64",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            This e-commerce platform was built to help local retail businesses compete in the digital marketplace. 
            Key features include:
            • Real-time inventory management
            • Integrated payment gateway
            • Analytics dashboard
            • Mobile-responsive design
            • Multi-language support
        `,
        challenges: "One of the main challenges was implementing real-time inventory synchronization across multiple stores while maintaining system performance.",
        solution: "We implemented a webhook-based system with Redis caching to handle real-time updates efficiently."
    },
    {
        title: "Mobile Delivery App",
        description: "Developed a food delivery mobile application using React Native with real-time tracking features.",
        technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        year: "2023",
        type: "Mobile App",
        logo: "/api/placeholder/64/64",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            A comprehensive food delivery application with features including:
            • Real-time order tracking
            • In-app chat between customer and driver
            • Multiple payment methods
            • Restaurant management portal
            • Driver management system
        `,
        challenges: "Implementing accurate real-time tracking while minimizing battery consumption was a significant challenge.",
        solution: "We implemented an adaptive tracking system that adjusts update frequency based on delivery status and distance."
    },
    {
        title: "Business Management System",
        description: "Created a comprehensive business management system for SMEs to handle inventory, sales, and customer relationships.",
        technologies: ["Next.js", "Laravel", "PostgreSQL", "Redis"],
        year: "2022",
        type: "Web Application",
        logo: "/api/placeholder/64/64",
        images: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        longDescription: `
            An all-in-one business management solution featuring:
            • Inventory management
            • Sales tracking
            • Customer relationship management
            • Financial reporting
            • Employee management
        `,
        challenges: "Creating a system that was both comprehensive and user-friendly for non-technical users was challenging.",
        solution: "We implemented a modular design with role-based access control and contextual help system."
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
                                    {/* <img 
                                        src={project.logo} 
                                        alt={`${project.title} logo`}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    /> */}
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