import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const submissionData = {
      name: formData.preferredName,
      serviceInterest: formData.serviceInterest || "Not specified",
      contactMethod: formData.contactMethod,
      email: formData.email || "Not provided",
      phone: formData.phone || "Not provided",
      textNumber: formData.textNumber || "Not provided",
      responseTime: formData.responseTime || "Any time",
      message: formData.message,
      assessmentScores: {
        dailyLifeImpact: formData.concernLevel,
        othersConcern: formData.urgencyLevel,
        importanceOfChange: formData.comfortLevel,
        readinessToStart: formData.impactLevel,
        confidenceInSupport: formData.readinessLevel,
      },
      submittedAt: formData.submittedAt,
    }

    console.log("Contact form submission received:", submissionData)

    return NextResponse.json({
      success: true,
      message: "Form submission received successfully",
    })
  } catch (error) {
    console.error("Form processing error:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
