import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { toast } from 'sonner'

export default function SendMessage() {
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
            const response = await fetch('send', {
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
            <Card>
                <CardContent className="pt-6">
                    <form 
                        ref={formRef}
                        onSubmit={handleSubmit} 
                        className="space-y-4 z-50"
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
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}