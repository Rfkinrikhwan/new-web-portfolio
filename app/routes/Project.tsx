import { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { projects, type Project } from "~/data/projects";
import ProjectLogo from "~/components/custom/ProjectLogo";
import LiquidGlass from "~/components/custom/LiquidGlass";
import { useTheme } from "~/components/theme-provider";

export const meta: MetaFunction = () => {
    return [
        { title: "Projects | Rifki Nur Ikhwan" },
        { name: "description", content: "Explore the portfolio of Rifki Nur Ikhwan. Discover a collection of web and mobile projects built with React, TypeScript, Laravel, and more, focusing on scalable solutions." },
    ];
};

export default function ProjectPage() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">Project</h1>

            <p className="leading-8 text-zinc-500 dark:text-zinc-400">
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
                {projects.map((project: Project, index: number) => (
                    <Link to={`/project/${project.slug}`} key={index} className="block group outline-none">
                        <LiquidGlass className="rounded-2xl !w-full transition-transform duration-300 group-hover:scale-[1.01]" depth={6} strength={0} blur={12}>
                            <div className={`absolute inset-0 pointer-events-none rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                            
                            <div className="z-10 relative p-6 w-full text-left">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <ProjectLogo 
                                            src={project.logo} 
                                            title={project.title} 
                                            className="w-16 h-16 rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {project.year} • {project.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-300 mt-4 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: string, techIndex: number) => (
                                        <span
                                            key={techIndex}
                                            className="glass-badge rounded-md px-2.5 py-0.5 text-xs font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </LiquidGlass>
                    </Link>
                ))}
            </div>

            <div className="mb-48" />
        </div>
    );
}
