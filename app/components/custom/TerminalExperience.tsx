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
                <span className="inline-block w-full">- Developing backend systems for various company projects.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Teaching programming and technology courses.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: PHP, Laravel, Database Management.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2200} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Web Developer - Freelance (March 2023 - Present)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2400} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Project: Shanrise Bimble.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2600} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Project: Jaket Distro Medan (JDM).</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: TypeScript, JavaScript, PHP, React.js, Laravel.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Mobile Developer at KitaKale ID (Sept 2023 - Sept 2024)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3200} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Developing mobile applications with React Native.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3400} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: JavaScript, Git, React Native, Tailwind CSS.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3600} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Web Developer - Part Time at KitaKale ID (June 2023 - Sept 2023)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Developing websites using Vue.js.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: JavaScript, Vue.js, Git, Bootstrap.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4200} className="text-yellow-500">
                <span className="inline-block w-full">⮑ Content Writer & Programming Intern at KitaKale ID (Nov 2022 - June 2023)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4400} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Creating programming learning materials.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4600} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Writing technical content.</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4800} className="pl-2 sm:pl-4 text-muted-foreground ">
                <span className="inline-block w-full">- Skills: Technical Writing, Programming Fundamentals.</span>
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