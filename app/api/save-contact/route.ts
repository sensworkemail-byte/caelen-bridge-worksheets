import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const { error } = await supabase.from("contact_submissions").insert([
      {
        name: formData.preferredName,
        email: formData.email,
        phone: formData.phone,
        text_number: formData.textNumber,
        service_interest: formData.serviceInterest,
        contact_method: formData.contactMethod,
        response_time: formData.responseTime,
        message: formData.message,
        concern_level: formData.concernLevel,
        urgency_level: formData.urgencyLevel,
        comfort_level: formData.comfortLevel,
        impact_level: formData.impactLevel,
        readiness_level: formData.readinessLevel,
        submitted_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    try {
      await resend.emails.send({
        from: "noreply@yourdomain.com",
        to: process.env.NOTIFICATION_EMAIL!,
        subject: "New Website Submission",
        text: "A new submission has been received. Please log in to Supabase or the admin dashboard to view details.",
      })
    } catch (emailError) {
      console.error("Email notification error:", emailError)
      // Continue with success response even if email fails
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 })
  }
}
