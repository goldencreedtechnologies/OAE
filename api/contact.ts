import { contactRecipient } from '../data/site';

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

const asText = (value: unknown, maxLength: number) => typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
})[character] || character);

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return Response.json({ error: 'Method not allowed.' }, { status: 405 });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return Response.json({ error: 'Email delivery is not configured.' }, { status: 503 });

    let submission: ContactSubmission;
    try {
      submission = await request.json() as ContactSubmission;
    } catch {
      return Response.json({ error: 'Invalid submission.' }, { status: 400 });
    }

    const name = asText(submission.name, 100);
    const email = asText(submission.email, 254);
    const company = asText(submission.company, 100);
    const message = asText(submission.message, 3000);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'Not provided');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OAE Website <charles@onuoraenterprises.com>',
        to: [contactRecipient],
        reply_to: email,
        subject: `New OAE project enquiry from ${name}`,
        html: `<h2>New OAE project enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Company:</strong> ${safeCompany}</p><p><strong>Project details:</strong><br />${safeMessage}</p>`,
        text: `New OAE project enquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nProject details:\n${message}`,
      }),
    });

    if (!resendResponse.ok) return Response.json({ error: 'Unable to send your message.' }, { status: 502 });
    return Response.json({ success: true });
  },
};
