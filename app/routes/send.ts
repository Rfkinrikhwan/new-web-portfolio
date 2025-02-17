import { json } from '@remix-run/node'
import { Resend } from 'resend'

export const loader = async () => {
  throw json({ message: "Method not allowed" }, { status: 405 });
};

export async function action({ request }: { request: Request }) {
  const resend = new Resend("re_MAfcRcAD_LyBnJA374bFvEoExM8Q7Zryu")

  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['rifkinurikhwan9@gmail.com'],
      subject: subject,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return json({ success: true, data })
  } catch (error) {
    return json({ success: false, error }, { status: 400 })
  }
}

export const handle = {
  spa: true
};