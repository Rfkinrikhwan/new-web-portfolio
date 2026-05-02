import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resend = new Resend("re_MAfcRcAD_LyBnJA374bFvEoExM8Q7Zryu");

  try {
    const { name, email, subject, message } = req.body;

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['rifkinurikhwan9@gmail.com'],
      subject: subject || `New message from ${name}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
}
