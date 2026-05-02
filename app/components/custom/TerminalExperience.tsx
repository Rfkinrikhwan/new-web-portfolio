import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";

export default function TerminalExperience() {
    return (
        <Terminal className="w-full text-[11px] sm:text-[14px] md:text-base">
            <TypingAnimation duration={20} className="">&gt; devx run experience</TypingAnimation>

            <AnimatedSpan delay={500} className="text-green-500">
                <span className="inline-block w-full">✔ Fetching work history...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={800} className="text-green-500">
                <span className="inline-block w-full">✔ Found relevant experiences.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1100} className="text-green-500">
                <span className="inline-block w-full">✔ Initializing latest role...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1400} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Backend Developer & Technical Instructor at KitaKale ID (Jan 2024 - Present)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1600} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Developed backend systems and mentored students in web development.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: PHP, Laravel, Database Management, Technical Instruction.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Software Engineering Teacher at SMKS Khaidir Nur Binjai (Aug 2024 - Aug 2025)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2200} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Taught Software Engineering and Informatics curriculum.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2400} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Mentored students in programming fundamentals and software best practices.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2600} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Frontend Developer - Freelance at Faria Org (July 2025 - Sept 2025)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Optimized website performance and integrated modern UI designs.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: Svelte.js, Tailwind CSS, Cross-browser compatibility.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3200} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Mobile Developer at KitaKale ID (Sept 2023 - Sept 2024)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3400} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Built cross-platform mobile applications using React Native.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3600} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: React Native, Git, Tailwind CSS, RESTful APIs.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3800} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Web Developer at KitaKale ID (2022 - 2025)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Developed and maintained web applications for various clients.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4200} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Projects: Shanrise Bimble, Jaket Distro Medan (JDM).</span>
            </AnimatedSpan>

            <TypingAnimation delay={5000} className="text-muted-foreground ">
                Success! Experience module loaded.
            </TypingAnimation>

            <TypingAnimation delay={5200} className="text-muted-foreground ">
                🚀 Always ready for new opportunities!
            </TypingAnimation>
        </Terminal>
    );
}