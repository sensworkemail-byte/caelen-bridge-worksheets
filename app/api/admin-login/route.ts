import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Check credentials against environment variables
    const adminUser = process.env.ADMIN_USER
    const adminPass = process.env.ADMIN_PASS

    if (!adminUser || !adminPass) {
      return NextResponse.json({ success: false, error: "Admin credentials not configured" }, { status: 500 })
    }

    if (username !== adminUser || password !== adminPass) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ success: false, error: "Supabase configuration missing" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch submissions from Supabase
    const { data: submissions, error } = await supabase
      .from("contact_submissions")
      .select(
        "name, service_interest, contact_method, email, phone, text_number, submitted_at, message, concern_level, urgency_level, comfort_level, impact_level, readiness_level",
      )
      .order("submitted_at", { ascending: false })

    if (error) {
      console.error("Error fetching submissions:", error)
      return NextResponse.json({ success: false, error: "Failed to fetch submissions" }, { status: 500 })
    }

    return NextResponse.json({ success: true, submissions })
  } catch (error) {
    console.error("Admin login error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
