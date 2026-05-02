import { MetaFunction, useNavigate } from "@remix-run/react";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Download, Mail, BookOpen, Code2, Briefcase, Star } from "lucide-react";

const GitHubCalendar = lazy(() => import('react-github-calendar'));
import { useTheme } from "~/components/theme-provider";
import LiquidGlass from "~/components/custom/LiquidGlass";

export const meta: MetaFunction = () => {
  return [
    { title: "Rifki Nur Ikhwan | Frontend Developer & IoT Enthusiast" },
    { name: "description", content: "Portfolio of Rifki Nur Ikhwan, a passionate Frontend Developer and Software Engineer based in Medan, Indonesia. Specialized in React, TypeScript, and IoT solutions." },
  ];
};

const stats = [
  { value: "3+", label: "Years Experience", icon: Star },
  { value: "15+", label: "Projects Done", icon: Briefcase },
  { value: "10+", label: "Happy Clients", icon: BookOpen },
  { value: "5+", label: "Technologies", icon: Code2 },
];

export default function Index() {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Hero Box (span 2) */}
        <LiquidGlass className="md:col-span-2 rounded-3xl !w-full" depth={6} strength={0} blur={12}>
          <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
          <div className="relative z-10 p-8 h-full flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Hi I'am Rifki</h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-current rounded-full" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-current rounded-full" />
                <span>Based in Medan</span>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300 text-sm md:text-base max-w-xl">
              Passionate and seasoned Software Engineer with a strong focus on frontend development.
              Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative
              team player dedicated to delivering efficient, scalable, and visually appealing web applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="glass-btn-primary rounded-full px-6 py-2.5 flex items-center gap-2 text-sm font-medium">
                <Download size={16} /> Download CV
              </button>
              <button onClick={() => navigate('/contact')} className="glass-btn-secondary rounded-full px-6 py-2.5 flex items-center gap-2 text-sm font-medium">
                <Mail size={16} /> Contact Me
              </button>
            </div>
          </div>
        </LiquidGlass>

        {/* Avatar Box (span 1) */}
        <LiquidGlass className="md:col-span-1 rounded-3xl !w-full flex-col flex" contentClassName="!h-full" depth={6} strength={0} blur={12}>
          <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 flex-1">
            <div className="relative mb-4 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <img src="/rifki.webp" alt="Rifki" width="128" height="128" fetchpriority="high" className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/10 shadow-xl" />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#09090b] dark:border-zinc-950" />
            </div>
            <h2 className="text-xl font-bold mt-2">Rifki Nur Ikhwan</h2>
            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Available for work
            </div>
          </div>
        </LiquidGlass>

        {/* Currently Working On Box (span 2) */}
        <LiquidGlass className="md:col-span-3 rounded-3xl !w-full flex-col flex" contentClassName="!h-full" depth={6} strength={0} blur={12}>
          <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
          <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between flex-1 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">Currently Learning</h3>
            <div className="flex items-center gap-5 flex-1">
              {/* Swift Logo */}
              <div className="relative flex-shrink-0">
                <img src="/Skills/swift.webp" alt="Swift" width="112" height="112" className="w-28 h-28 rounded-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">Swift</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/25">In Progress</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
                  Exploring iOS & macOS development with Swift. Building native apps for the Apple ecosystem.
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {["SwiftUI", "Xcode", "iOS Dev"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Progress bar */}
            {/* <div className="mt-6">
              <div className="flex justify-between text-xs opacity-50 mb-1.5">
                <span>Learning Progress</span>
                <span>30%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-orange-400 to-red-500 animate-pulse" />
              </div>
            </div> */}
          </div>
        </LiquidGlass>

        {/* Stats Box (span 1) */}
        {/* <LiquidGlass className="md:col-span-1 rounded-3xl !w-full flex-col flex" contentClassName="!h-full" depth={6} strength={0} blur={12}>
          <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
          <div className="relative z-10 w-full h-full p-6 flex flex-col flex-1 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-5">Stats</h3>
            <div className="grid grid-cols-2 gap-3 flex-1 content-center">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className={`flex flex-col gap-1.5 p-3 rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/8 bg-white/4' : 'border-black/5 bg-black/3'}`}>
                  <Icon size={14} className="opacity-50" />
                  <span className="text-2xl font-bold leading-none">{value}</span>
                  <span className="text-xs opacity-50 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </LiquidGlass> */}

        {/* GitHub Activity Box (span 3) */}
        <LiquidGlass className="md:col-span-3 rounded-3xl !w-full flex flex-col" contentClassName="!h-full" depth={6} strength={0} blur={12}>
          <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
          <div className="relative z-10 w-full h-full p-8 flex-1">
            <div className="flex items-center justify-between mb-6 text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">GitHub Contributions</h3>
            </div>
            <div className="w-full overflow-x-auto min-h-[160px] flex items-center justify-center">
              {isMounted ? (
                <Suspense fallback={<div className="w-full h-[140px] animate-pulse bg-gray-500/10 rounded-xl"></div>}>
                  <GitHubCalendar username="rfkinrikhwan" blockSize={12} colorScheme={resolvedTheme} year={2026} />
                </Suspense>
              ) : (
                <div className="w-full h-[140px] animate-pulse bg-gray-500/10 rounded-xl"></div>
              )}
            </div>
          </div>
        </LiquidGlass>

      </div>
      <div className="mb-24" />
    </div>
  );
}
