interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ActionData {
    success: boolean;
    message: string;
}

interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
    username: string;
}

import React from 'react';
import { json, MetaFunction } from "@remix-run/react";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useActionData, Form } from "@remix-run/react";
import { ActionFunction } from '@remix-run/node';
import { sendContactEmail } from '~/services/email.server';

export const meta: MetaFunction = () => {
    return [
        { title: "Contact | Rifki" },
        { name: "description", content: "Allo Guys, I'm Rifki" },
    ];
};

export const action: ActionFunction = async ({ request }): Promise<Response> => {
    const formData = await request.formData();
    const data: FormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
    };

    // Validasi data
    if (!data.name || !data.email || !data.subject || !data.message) {
        return json(
            { success: false, message: "All fields are required" },
            { status: 400 }
        );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return json(
            { success: false, message: "Please enter a valid email address" },
            { status: 400 }
        );
    }

    try {
        const result = await sendContactEmail(data);
        
        if (!result.success) {
            throw new Error('Failed to send email');
        }

        return json({
            success: true,
            message: "Thank you for your message! I'll get back to you soon."
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return json({
            success: false,
            message: "Failed to send message. Please try again later."
        }, { status: 500 });
    }
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
    const actionData = useActionData<ActionData>();
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);
        try {
            await event.currentTarget.submit();
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <Form method="post" onSubmit={handleSubmit} className="space-y-4 z-50">
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2 z-50">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2 z-50">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 z-50">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="How can I help you?"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2 z-50">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message here..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>
                                </div>

                                {actionData?.message && (
                                    <p className={`text-sm ${actionData.success ? 'text-green-600' : 'text-red-600'}`}>
                                        {actionData.message}
                                    </p>
                                )}


                                <Button
                                    type="submit"
                                    className="w-full h-10 z-50 relative"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mb-48" />
        </div>
    );
}