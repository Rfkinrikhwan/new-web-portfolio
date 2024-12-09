import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "About | Rifki" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function AboutPage() {
    return (
        <div className="py-14">
            <h1 className="text-3xl font-bold">About</h1>

            <p className="mt-3 leading-8">
                A short story about me
            </p>

            <div className="border my-4 border-dashed" />

            <p className="leading-8">
                Hi! I am Rifi Nur Ikhwan, a seasoned software engineer with a deep passion for creating elegant and
                efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with
                a comprehensive understanding of various frontend libraries and frameworks, I heve been navigating
                the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in
                Medan, Indonesia 🇮🇩.
            </p>

            <p className="mt-5 leading-8">
                As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving
                force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my
                technical prowess but also a humble attitude that values every members input.
            </p>

            <p className="mt-5 leading-8">
                This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer.
                Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape
                the digital landscape in remarkable ways.
            </p>

            <p className="mt-5 leading-8">
                Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure
            </p>

            <div className="border my-4" />
        </div>
    );
}