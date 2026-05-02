import { MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, Link, useLoaderData } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { projects, type Project } from "~/data/projects";
import ProjectLogo from "~/components/custom/ProjectLogo";
import LiquidGlass from "~/components/custom/LiquidGlass";
import { useTheme } from "~/components/theme-provider";

export const clientLoader = async ({ params }: ClientLoaderFunctionArgs) => {
    const { slug } = params;
    const project = projects.find(p => p.slug === slug);
    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return project;
};

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
    const project = data as Project;
    if (!project) {
        return [{ title: "Project Not Found" }];
    }
    return [
        { title: `${project.title} | Project Details` },
        { name: "description", content: project.description },
    ];
};

export default function ProjectDetail() {
    const project = useLoaderData<typeof clientLoader>();
    const { resolvedTheme } = useTheme();

    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14 max-w-4xl">
            <Link to="/project" className="inline-flex items-center text-sm opacity-60 hover:opacity-100 mb-8 transition-opacity">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <ProjectLogo
                    src={project.logo}
                    title={project.title}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-sm bg-white"
                />
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                        {project.year} • {project.type}
                    </p>
                </div>
            </div>

            <div className="mb-12 w-full">
                <Carousel className="w-full">
                    <CarouselContent className="ml-0">
                        {project.images.map((image: string, index: number) => (
                            <CarouselItem key={index} className="pl-0">
                                {image.includes('placeholder') ? (
                                    <LiquidGlass className="rounded-xl !w-full" depth={6} strength={0} blur={12}>
                                        <div className={`absolute inset-0 pointer-events-none rounded-xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                                        <div className="z-10 relative w-full h-[300px] sm:h-[450px] flex flex-col items-center justify-center">
                                            <div className="w-16 h-16 rounded-full glass-badge flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="font-medium opacity-60">No Preview Available</p>
                                            <p className="text-sm mt-1 opacity-40">Images will be available soon</p>
                                        </div>
                                    </LiquidGlass>
                                ) : (
                                    <img
                                        src={image}
                                        alt={`${project.title} preview ${index + 1}`}
                                        className="w-full h-auto max-h-[500px] rounded-xl object-cover bg-gray-100"
                                    />
                                )}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 sm:-left-6 lg:-left-12" />
                    <CarouselNext className="right-2 sm:-right-6 lg:-right-12" />
                </Carousel>
            </div>

            <div className="space-y-10">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                        {project.longDescription}
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <section className="flex flex-col">
                        <h2 className="text-xl font-bold mb-3">Challenges</h2>
                        <LiquidGlass className="rounded-2xl !w-full flex-1 !h-full flex flex-col" contentClassName="!h-full" depth={6} strength={0} blur={12}>
                            <div className={`absolute inset-0 pointer-events-none rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                            <div className="z-10 relative p-6 w-full text-left flex-1">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        </LiquidGlass>
                    </section>

                    <section className="flex flex-col">
                        <h2 className="text-xl font-bold mb-3">Solution</h2>
                        <LiquidGlass className="rounded-2xl !w-full flex-1 !h-full flex flex-col" contentClassName="!h-full" depth={6} strength={0} blur={12}>
                            <div className={`absolute inset-0 pointer-events-none rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                            <div className="z-10 relative p-6 w-full text-left flex-1">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        </LiquidGlass>
                    </section>
                </div>

                <section>
                    <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, index: number) => (
                            <LiquidGlass key={index} className="rounded-full text-sm font-medium" depth={6} strength={0} blur={12}>
                                <div className={`absolute inset-0 pointer-events-none rounded-full border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                                <div className="z-10 relative px-4 py-2 w-full text-left h-full">
                                    {tech}
                                </div>
                            </LiquidGlass>
                        ))}
                    </div>
                </section>
            </div>

            <div className="my-16 border-t border-dashed" />

            <div className="flex justify-center mb-16">
                <Link to="/project" className="glass-btn-secondary rounded-full font-medium px-8 py-3 inline-block">
                    Explore More Projects
                </Link>
            </div>

            <div className="mb-24" />
        </div>
    );
}
