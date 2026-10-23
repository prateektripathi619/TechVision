import { z } from 'zod'

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1).max(40),
  company: z.string().trim().max(120),
  serviceType: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(10000),
})

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Please submit a valid inquiry.' }, { status: 400 })
  }

  const result = inquirySchema.safeParse(body)
  if (!result.success) {
    return Response.json({ error: 'Please check the inquiry details and try again.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !fromEmail) {
    console.error('Contact email is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.')
    return Response.json({ error: 'The contact form is temporarily unavailable. Please email us directly.' }, { status: 503 })
  }

  const { name, email, phone, company, serviceType, description } = result.data

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `TechVision Website <${fromEmail}>`,
        to: ['software@devcube.in'],
        reply_to: email,
        subject: `New project inquiry: ${name.replace(/[\r\n]+/g, ' ')}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Company: ${company || 'Not provided'}`,
          `Service required: ${serviceType}`,
          '',
          'Project details:',
          description,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      console.error(`Contact email provider returned status ${response.status}.`)
      return Response.json({ error: 'We could not send your inquiry. Please try again shortly.' }, { status: 502 })
    }
  } catch (error) {
    console.error('Contact email provider request failed.', error)
    return Response.json({ error: 'We could not send your inquiry. Please try again shortly.' }, { status: 502 })
  }

  return Response.json({ success: true })
}
