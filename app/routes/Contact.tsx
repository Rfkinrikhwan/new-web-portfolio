interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
    username: string;
}

import React from 'react';
import { MetaFunction } from "@remix-run/react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import SendMessage from '~/components/custom/SendMessage';
import LiquidGlass from "~/components/custom/LiquidGlass";
import { useTheme } from "~/components/theme-provider";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact | Rifki Nur Ikhwan" },
        { name: "description", content: "Get in touch with Rifki Nur Ikhwan for collaborations, inquiries, or just to say hi. Reach out via email or connect on LinkedIn, GitHub, and Instagram." },
    ];
};

const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/rfkinrikhwan",
        icon: Github,
        username: "@rfkinrikhwan"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rfkinrikhwan",
        icon: Linkedin,
        username: "Rifki Nur Ikhwan"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/rfkinrikhwan_",
        icon: Instagram,
        username: "@rfkinrikhwan_"
    },
    {
        name: "Email",
        url: "mailto:rifkinurikhwan9@gmail.com",
        icon: Mail,
        username: "rifkinurikhwan9@gmail.com"
    }
];

export default function ContactPage() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="px-4 sm:px-0 py-10 md:py-14">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold">Contact</h1>

            <div className="border my-8 border-dashed" />

            <div className="grid md:grid-cols-1 gap-12">
                {/* Social Links Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block outline-none group"
                            >
                                <LiquidGlass className="rounded-xl !w-full transition-transform duration-300 group-hover:scale-[1.02]" depth={6} strength={0} blur={12}>
                                    <div className={`absolute inset-0 pointer-events-none rounded-xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                                    
                                    <div className="z-10 relative flex items-center gap-4 p-4 w-full text-left">
                                        <div className="p-2 rounded-full glass-badge">
                                            <link.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{link.name}</h3>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {link.username}
                                            </p>
                                        </div>
                                    </div>
                                </LiquidGlass>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
                <SendMessage/>
            </div>

            <div className="mb-48" />
        </div>
    );
}