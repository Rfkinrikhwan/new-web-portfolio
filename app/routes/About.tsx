import { MetaFunction } from "@remix-run/react";
import { CodeXml } from "lucide-react";
import TerminalExperience from "~/components/custom/TerminalExperience";
import { Marquee } from "~/components/ui/marquee";
import LiquidGlass from "~/components/custom/LiquidGlass";
import { useTheme } from "~/components/theme-provider";


export const meta: MetaFunction = () => {
    return [
        { title: "About | Rifki Nur Ikhwan" },
        { name: "description", content: "Learn more about Rifki Nur Ikhwan, a Frontend Developer with 3 years of experience. Discover my background, skills in JavaScript, TypeScript, React, and my passion for building digital experiences." },
    ];
};

const skills = [
    { "name": "JavaScript", "icon": "/Skills/javascript.webp" },
    { "name": "TypeScript", "icon": "/Skills/typescript.webp" },
    { "name": "PHP", "icon": "/Skills/php.webp" },
    { "name": "Laravel", "icon": "/Skills/laravel.webp" },
    { "name": "React JS", "icon": "/Skills/react.webp" },
    { "name": "React Native", "icon": "/Skills/reactnative.webp" },
    { "name": "Vue JS", "icon": "/Skills/vue.webp" },
    { "name": "Remix JS", "icon": "/Skills/remix.webp" },
    { "name": "Tailwind", "icon": "/Skills/tailwind.webp" },
    { "name": "Bootstrap", "icon": "/Skills/bootstrap.webp" },
]

const tools = [
    { "name": "Github", "icon": "/Skills/github.webp" },
    { "name": "Postman", "icon": "/Skills/postman.webp" },
    { "name": "Herd", "icon": "/Skills/herd.webp" },
    { "name": "Vite", "icon": "/Skills/vite.webp" },
    { "name": "Expo", "icon": "/Skills/expo.webp" },
]

export default function AboutPage() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">About</h1>

            <p className="leading-8 text-zinc-500 dark:text-zinc-400">
                A short story about me
            </p>

            <div className="border my-4 border-dashed" />

            <p className="leading-7">
                Hi! I am Rifki Nur Ikhwan, a frontend developer with 3 years of experience in building modern, responsive,
                and user-friendly web applications. With a strong foundation in JavaScript and TypeScript, along with expertise
                in various frontend libraries and frameworks, I am passionate about crafting seamless and efficient digital experiences.
            </p>

            <p className="mt-4 leading-7">
                I thrive in dynamic environments where innovation drives progress. My ability to adapt quickly and
                collaborate effectively allows me to integrate seamlessly with teams, contributing not only my technical
                expertise but also a problem-solving mindset that values continuous learning and teamwork. Currently, I reside
                in Medan, Indonesia 🇮🇩.
            </p>

            <div className="border my-4" />

            <h1 className="text-xl font-bold">Experience</h1>

            <div className="mt-2 z-50 relative rounded-xl overflow-hidden">
                <LiquidGlass className="rounded-xl !w-full" depth={6} strength={0} blur={12}>
                    <div className={`absolute inset-0 pointer-events-none rounded-xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                    <div className="z-10 relative w-full text-left">
                        <TerminalExperience />
                    </div>
                </LiquidGlass>
            </div>

            <div className="border my-4" />

            <div className="flex items-center gap-3">
                <CodeXml />
                <h1 className="text-xl font-bold">Skills and Tools</h1>
            </div>

            <p className="mt-4 leading-7">
                I master several programming languages and some of their framewoks and the following tools that I often use
            </p>

            <Marquee pauseOnHover className="[--duration:50s] mt-3 px-0">
                {skills.map((data: any) => {
                    return (
                        <div key={data.name} className="py-2 px-5 rounded-full glass-pill flex items-center gap-2">
                            <img src={data.icon} alt={data.name} width="28" height="28" className="h-7 w-7" />
                            {data.name}
                        </div>
                    )
                })}
            </Marquee>

            <Marquee pauseOnHover reverse className="[--duration:15s] mt-3 px-0">
                {tools.map((data: any) => {
                    return (
                        <div key={data.name} className="py-2 px-5 rounded-full glass-pill flex items-center gap-2">
                            {data.name}
                            <img src={data.icon} alt={data.name} width="20" height="20" className="h-5 w-5" />
                        </div>
                    )
                })}
            </Marquee>

            <div className="mb-48" />
        </div>
    );
}