import { MetaFunction } from "@remix-run/react";
import { CodeXml } from "lucide-react";
import TerminalExperience from "~/components/custom/TerminalExperience";
import { Marquee } from "~/components/ui/marquee";


export const meta: MetaFunction = () => {
    return [
        { title: "About | Rifki" },
        { name: "description", content: "Allo Guys, I'm Rifki" },
    ];
};

const skills = [
    { "name": "JavaScript", "icon": "Skills/javascript.png" },
    { "name": "TypeScript", "icon": "Skills/typescript.png" },
    { "name": "PHP", "icon": "Skills/php.png" },
    { "name": "Laravel", "icon": "Skills/laravel.png" },
    { "name": "React JS", "icon": "Skills/react.png" },
    { "name": "React Native", "icon": "Skills/reactnative.png" },
    { "name": "Vue JS", "icon": "Skills/vue.png" },
    { "name": "Remix JS", "icon": "Skills/remix.png" },
    { "name": "Tailwind", "icon": "Skills/tailwind.png" },
    { "name": "Bootstrap", "icon": "Skills/bootstrap.png" },
]

const tools = [
    { "name": "Github", "icon": "Skills/github.webp" },
    { "name": "Postman", "icon": "Skills/postman.webp" },
    { "name": "Herd", "icon": "Skills/herd.webp" },
    { "name": "Vite", "icon": "Skills/vite.webp" },
    { "name": "Expo", "icon": "Skills/expo.webp" },
]

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">About</h1>

            <p className="leading-8 text-[#666]">
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

            <div className="mt-2 z-50 relative">
                <TerminalExperience />
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
                        <div key={data.name} className="py-2 px-5 rounded-full shadow flex items-center gap-2">
                            <img src={data.icon} alt="" className="h-7 w-7" />
                            {data.name}
                        </div>
                    )
                })}
            </Marquee>

            <Marquee pauseOnHover reverse className="[--duration:15s] mt-3 px-0">
                {tools.map((data: any) => {
                    return (
                        <div key={data.name} className="py-2 px-5 rounded-full shadow flex items-center gap-2">
                            {data.name}
                            <img src={data.icon} alt="" className="h-5 w-5" />
                        </div>
                    )
                })}
            </Marquee>

            <div className="mb-48" />
        </div>
    );
}