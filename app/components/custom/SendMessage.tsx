import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Send } from 'lucide-react'
import { toast } from 'sonner'
import LiquidGlass from './LiquidGlass'
import { useTheme } from '../theme-provider'

export default function SendMessage() {
    const { resolvedTheme } = useTheme();
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const formRef = React.useRef<HTMLFormElement>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const result = await response;

            if (result.ok) {
                toast.success('Message sent successfully!')
                formRef.current?.reset()
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error: any) {
            console.error('Error sending email:', error)
            toast.error(error.message || 'An error occurred. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <LiquidGlass className="rounded-2xl !w-full" depth={6} strength={0} blur={12}>
                <div className={`absolute inset-0 pointer-events-none rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                <div className="z-10 relative p-6 w-full text-left">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4 z-50 relative"
                    >
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
                                        className="bg-white/10 border-white/20 focus:border-white/40 h-12 rounded-xl"
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
                                        className="bg-white/10 border-white/20 focus:border-white/40 h-12 rounded-xl"
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
                                    className="bg-white/10 border-white/20 focus:border-white/40 h-12 rounded-xl"
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
                                    className="min-h-[120px] bg-white/10 border-white/20 focus:border-white/40 rounded-xl"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl glass-btn-primary flex items-center justify-center gap-2 font-medium"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </LiquidGlass>
        </div>
    )
}