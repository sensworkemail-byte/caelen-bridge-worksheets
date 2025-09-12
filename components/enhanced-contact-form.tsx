"use client"

import type React from "react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
    concernLevel: 5,
    urgencyLevel: 5,
    comfortLevel: 5,
    impactLevel: 5,
    readinessLevel: 5,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      console.log("[v0] Starting form submission...")

      // Prepare data for Supabase
      const contactData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_interest: formData.serviceInterest,
        message: formData.message,
        concern_level: formData.concernLevel,
        urgency_level: formData.urgencyLevel,
        comfort_level: formData.comfortLevel,
        impact_level: formData.impactLevel,
        readiness_level: formData.readinessLevel,
        keep_record: false, // Will be auto-deleted after 30 days unless manually changed
      }

      console.log("[v0] Submitting data to Supabase:", contactData)

      // Save to Supabase
      const { data, error } = await supabase.from("contacts").insert(contactData).select()

      console.log("[v0] Supabase response:", { data, error })

      if (error) {
        console.error("[v0] Supabase error:", error)
        throw error
      }

      console.log("[v0] Successfully saved to Supabase, attempting email notification...")

      try {
        const emailResponse = await fetch("/api/send-notification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactData,
            submissionId: data[0]?.id,
          }),
        })

        if (!emailResponse.ok) {
          console.log("Email notification failed, but form was saved")
        }
      } catch (emailError) {
        console.log("Email notification failed, but form was saved:", emailError)
      }

      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
        concernLevel: 5,
        urgencyLevel: 5,
        comfortLevel: 5,
        impactLevel: 5,
        readinessLevel: 5,
      })
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSliderChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: Number.parseInt(value) }))
  }

  return (
    <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">Thank you for your message!</p>
          <p className="text-green-700 text-sm mt-1">
            We've received your confidential message and will respond within 24 hours during business days.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-medium">There was an error sending your message</p>
          <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#1A3D5D] mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#1A3D5D] mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1A3D5D] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1A3D5D] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#1A3D5D] mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.serviceInterest}
          onChange={(e) => setFormData((prev) => ({ ...prev, serviceInterest: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="individual">Individual Support</option>
          <option value="family">Family Support</option>
          <option value="detox">Community Detox Support</option>
          {/* <option value="professional">Professional Services</option> */}
          <option value="consultation">General Consultation</option>
        </select>
      </div>

      {/* Assessment Questions Section */}
      <div className="border-t pt-6 mt-8">
        <h3 className="text-lg font-medium text-[#1A3D5D] mb-4">Brief Assessment (Optional)</h3>
        <p className="text-sm text-gray-600 mb-6">
          These questions help us understand your situation better and prepare for our conversation. All responses are
          confidential.
        </p>

        {/* Assessment Question 1 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
            How would you rate your current level of concern about substance use?
          </label>
          <div className="px-3">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.concernLevel}
              onChange={(e) => handleSliderChange("concernLevel", e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 - Minimal concern</span>
              <span className="font-medium text-[#1A3D5D]">{formData.concernLevel}</span>
              <span>10 - Very concerned</span>
            </div>
          </div>
        </div>

        {/* Assessment Question 2 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
            How urgently do you feel you need support?
          </label>
          <div className="px-3">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.urgencyLevel}
              onChange={(e) => handleSliderChange("urgencyLevel", e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 - No rush</span>
              <span className="font-medium text-[#1A3D5D]">{formData.urgencyLevel}</span>
              <span>10 - Very urgent</span>
            </div>
          </div>
        </div>

        {/* Assessment Question 3 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
            How comfortable are you with seeking help?
          </label>
          <div className="px-3">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.comfortLevel}
              onChange={(e) => handleSliderChange("comfortLevel", e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 - Very uncomfortable</span>
              <span className="font-medium text-[#1A3D5D]">{formData.comfortLevel}</span>
              <span>10 - Very comfortable</span>
            </div>
          </div>
        </div>

        {/* Assessment Question 4 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
            How much is this situation affecting your daily life?
          </label>
          <div className="px-3">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.impactLevel}
              onChange={(e) => handleSliderChange("impactLevel", e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 - Minimal impact</span>
              <span className="font-medium text-[#1A3D5D]">{formData.impactLevel}</span>
              <span>10 - Significant impact</span>
            </div>
          </div>
        </div>

        {/* Assessment Question 5 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
            How ready do you feel to make changes?
          </label>
          <div className="px-3">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.readinessLevel}
              onChange={(e) => handleSliderChange("readinessLevel", e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 - Not ready</span>
              <span className="font-medium text-[#1A3D5D]">{formData.readinessLevel}</span>
              <span>10 - Very ready</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1A3D5D] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Please share what brings you here today and how we can best support you..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
        ></textarea>
      </div>

      <div className="bg-[#1A3D5D]/5 border-l-4 border-[#1A3D5D] p-4 rounded">
        <p className="text-sm text-[#1A3D5D]">
          <strong>Privacy Notice:</strong> All information submitted through this form is encrypted and treated with
          complete confidentiality. We aim to respond within 24 hours during business days.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1A3D5D] text-white px-8 py-4 rounded-lg hover:bg-[#1A3D5D]/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Confidential Message"}
      </button>
    </form>
  )
}
