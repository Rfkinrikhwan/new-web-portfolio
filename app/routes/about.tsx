import { MetaFunction } from "@remix-run/node";
import { CodeXml } from "lucide-react";
import Marquee from "~/components/ui/marquee";

export const meta: MetaFunction = () => {
    return [
        { title: "About | Rifki" },
        { name: "description", content: "Allo Guys, I'm Rifki" },
    ];
};

const skills = [
    { "name": "JavaScript", "icon": "javascript.png" },
    { "name": "TypeScript", "icon": "typescript.png" },
    { "name": "PHP", "icon": "php.png" },
    { "name": "Laravel", "icon": "laravel.png" },
    { "name": "Dart", "icon": "dart.png" },
    { "name": "Flutter", "icon": "flutter.png" },
    { "name": "React JS", "icon": "react.png" },
    { "name": "React Native", "icon": "reactnative.png" },
    { "name": "Vue JS", "icon": "vue.png" },
    { "name": "Remix JS", "icon": "remix.png" },
    { "name": "Next JS", "icon": "nextjs.png" },
    { "name": "Tailwind", "icon": "tailwind.png" },
    { "name": "Bootstrap", "icon": "bootstrap.png" },
]

const tools = [
    { "name": "Github", "icon": "github.webp" },
    { "name": "Postman", "icon": "postman.webp" },
    { "name": "Herd", "icon": "herd.webp" },
    { "name": "Vite", "icon": "vite.webp" },
    { "name": "Expo", "icon": "expo.webp" },
]

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6">About</h1>

            <p className="mt-3 leading-8">
                A short story about me
            </p>

            <div className="border my-4 border-dashed" />

            <p className="leading-7">
                Hi! I am Rifi Nur Ikhwan, a seasoned software engineer with a deep passion for creating elegant and
                efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with
                a comprehensive understanding of various frontend libraries and frameworks, I heve been navigating
                the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in
                Medan, Indonesia 🇮🇩.
            </p>

            <p className="mt-4 leading-7">
                As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving
                force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my
                technical prowess but also a humble attitude that values every members input.
            </p>

            <p className="mt-4 leading-7">
                This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer.
                Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape
                the digital landscape in remarkable ways.
            </p>

            <p className="mt-4 leading-7">
                Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure
            </p>

            <div className="border my-4" />

            <h1 className="text-xl font-bold">Career</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
            </div>

            <div className="border my-4" />

            <div className="flex items-center gap-3">
                <CodeXml />
                <h1 className="text-xl font-bold">Skills and Tools</h1>
            </div>

            <p className="mt-4 leading-7">
                I master several programming languages and some of their framewoks and the following tools that I often use
            </p>

            <Marquee pauseOnHover className="[--duration:50s] mt-3">
                {skills.map((data: any) => {
                    return (
                        <div className="py-2 px-5 rounded-full shadow flex items-center gap-2">
                            <img src={data.icon} alt="" className="h-7 w-7" />
                            {data.name}
                        </div>
                    )
                })}
            </Marquee>

            <Marquee pauseOnHover reverse className="[--duration:15s] mt-3">
                {tools.map((data: any) => {
                    return (
                        <div className="py-2 px-5 rounded-full shadow flex items-center gap-2">
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