import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ykzzutjlnqpeyidxwksj.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrenp1dGpsbnFwZXlpZHh3a3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzk2NzcsImV4cCI6MjA3MjY1NTY3N30.DkHv4VNFTBiYb7i79zwKqTB1i9bVUbp8vInUS1ujqhI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  serviceInterest: string
  message: string
  concernLevel: number
  urgencyLevel: number
  comfortLevel: number
  impactLevel: number
  readinessLevel: number
}
