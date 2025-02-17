interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
    username: string;
}

import React from 'react';
import { MetaFunction } from "@remix-run/react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import SendMessage from '~/components/custom/SendMessage';

export const meta: MetaFunction = () => {
    return [
        { title: "Contact | Rifki" },
        { name: "description", content: "Allo Guys, I'm Rifki" },
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
                                className="z-10 flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                                    <link.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium">{link.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {link.username}
                                    </p>
                                </div>
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