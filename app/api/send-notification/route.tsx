import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { contactData, submissionId } = await request.json()

    // Replace with your actual email service (Resend, SendGrid, etc.)
    const emailData = {
      to: process.env.NOTIFICATION_EMAIL || "your-email@example.com",
      subject: `New Contact Form Submission - ${contactData.service_interest || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Submission ID:</strong> ${submissionId}</p>
        <p><strong>Name:</strong> ${contactData.first_name} ${contactData.last_name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${contactData.service_interest || "Not specified"}</p>
        
        <h3>Assessment Scores:</h3>
        <ul>
          <li>Concern Level: ${contactData.concern_level}/10</li>
          <li>Urgency Level: ${contactData.urgency_level}/10</li>
          <li>Comfort Level: ${contactData.comfort_level}/10</li>
          <li>Impact Level: ${contactData.impact_level}/10</li>
          <li>Readiness Level: ${contactData.readiness_level}/10</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${contactData.message}</p>
        
        <p><em>This record will be automatically deleted after 30 days unless marked to keep.</em></p>
      `,
    }

    // Example using fetch to send email (replace with your email service)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "notifications@yourdomain.com",
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email notification error:", error)
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
  }
}
