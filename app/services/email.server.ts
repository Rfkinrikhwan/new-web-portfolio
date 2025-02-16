import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail(data: EmailData) {
    try {
        const { name, email, subject, message } = data;
        
        const emailContent = `
            New Contact Form Submission
            
            From: ${name}
            Email: ${email}
            Subject: ${subject}
            
            Message:
            ${message}
        `;

        const response = await resend.emails.send({
            from: `${email}`, // Ganti dengan email yang sudah diverifikasi
            to: 'rifkinurikhwan9@gmail.com', // Email tujuan Anda
            subject: `New Contact Form: ${subject}`,
            text: emailContent,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return { success: true, data: response };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, error };
    }
}