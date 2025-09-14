"use client"

import type React from "react"
import Link from "next/link"
import { Phone, X, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ContactFormPage() {
  const searchParams = useSearchParams()
  const isInvoiceRequest = searchParams.get("type") === "invoice"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    preferredName: "",
    email: "",
    phone: "",
    textNumber: "",
    serviceInterest: isInvoiceRequest ? "Invoice Request" : "",
    responseTime: "",
    contactMethod: "",
    message: isInvoiceRequest ? "I would like to request an invoice for payment. " : "",
    concernLevel: 5,
    urgencyLevel: 5,
    comfortLevel: 5,
    impactLevel: 5,
    readinessLevel: 5,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSliderChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: Number.parseInt(value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      if (!formData.preferredName || !formData.message || !formData.contactMethod) {
        throw new Error("Please fill in all required fields")
      }

      if (formData.contactMethod.includes("email") && !formData.email) {
        throw new Error("Please provide your email address")
      }

      if (formData.contactMethod.includes("phone") && !formData.phone) {
        throw new Error("Please provide your phone number")
      }

      if (formData.contactMethod.includes("text") && !formData.textNumber) {
        throw new Error("Please provide your mobile number for text messages")
      }

      const response = await fetch("/api/save-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }

      setSubmitMessage(
        "Thank you! Your message has been sent to our team. We'll respond within 24 hours during business days.",
      )
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage(
        `Sorry, there was an error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again or call us directly at 0800 654 6848.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link href="/">
                <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-40 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center mr-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">0800 654 6848</span>
              </span>
              <Link
                href="/contact"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close and return to Contact"
              >
                <X className="h-6 w-6 text-[#1A3D5D]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-6 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance">
            {isInvoiceRequest ? "Request Payment Invoice" : "Send Us a Confidential Message"}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {isInvoiceRequest
              ? "You are requesting a payment invoice. Please confirm your details below and the amount if known."
              : "Fill out our secure form and we'll respond within 24 hours during business days."}
          </p>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-2 px-4">
        <div className="max-w-2xl mx-auto">
          {isInvoiceRequest && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <p className="text-purple-800 font-medium">
                  Invoice Request - We'll email you a detailed invoice with a secure payment button.
                </p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="preferredName" className="block text-sm font-medium text-[#1A3D5D] mb-2">
                Preferred Name *
              </label>
              <input
                type="text"
                id="preferredName"
                name="preferredName"
                required
                placeholder="How would you like us to address you?"
                value={formData.preferredName}
                onChange={(e) => setFormData((prev) => ({ ...prev, preferredName: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#1A3D5D] mb-2">
                {isInvoiceRequest ? "Request Type" : "Service Interest"}
              </label>
              <select
                id="service"
                name="service"
                value={formData.serviceInterest}
                onChange={(e) => setFormData((prev) => ({ ...prev, serviceInterest: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
              >
                {isInvoiceRequest ? (
                  <>
                    <option value="Invoice Request">Invoice Request</option>
                  </>
                ) : (
                  <>
                    <option value="">Select a service...</option>
                    <option value="individual">Individual Support</option>
                    <option value="family">Family Support</option>
                    <option value="detox">Community Detox Support</option>
                    <option value="training">Training</option>
                    <option value="consultation">General Consultation</option>
                  </>
                )}
              </select>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-medium text-[#1A3D5D] mb-4">Preferred Contact Details</h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose your preferred contact method(s) and provide the relevant details. You can select multiple
                options.
              </p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
                  How would you prefer us to contact you? *
                </label>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod.includes("email")}
                        onChange={(e) => {
                          const method = e.target.value
                          setFormData((prev) => ({
                            ...prev,
                            contactMethod: e.target.checked
                              ? prev.contactMethod + (prev.contactMethod ? "," : "") + method
                              : prev.contactMethod.replace(new RegExp(`,?${method},?`), "").replace(/^,|,$/, ""),
                          }))
                        }}
                        className="mr-3 mt-1 text-[#1A3D5D] focus:ring-[#1A3D5D]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-[#1A3D5D]">📧 Email</span>
                          <span className="ml-2 text-xs text-gray-500">- Secure and confidential</span>
                        </div>
                        {formData.contactMethod.includes("email") && (
                          <div className="bg-white border border-gray-300 rounded-md p-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Your Email Address:</label>
                            <input
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod.includes("phone")}
                        onChange={(e) => {
                          const method = e.target.value
                          setFormData((prev) => ({
                            ...prev,
                            contactMethod: e.target.checked
                              ? prev.contactMethod + (prev.contactMethod ? "," : "") + method
                              : prev.contactMethod.replace(new RegExp(`,?${method},?`), "").replace(/^,|,$/, ""),
                          }))
                        }}
                        className="mr-3 mt-1 text-[#1A3D5D] focus:ring-[#1A3D5D]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-[#1A3D5D]">📞 Phone Call</span>
                          <span className="ml-2 text-xs text-gray-500">- Callback service</span>
                        </div>
                        {formData.contactMethod.includes("phone") && (
                          <div className="bg-white border border-gray-300 rounded-md p-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Your Phone Number:</label>
                            <input
                              type="tel"
                              placeholder="07123 456789"
                              value={formData.phone}
                              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="contactMethod"
                        value="text"
                        checked={formData.contactMethod.includes("text")}
                        onChange={(e) => {
                          const method = e.target.value
                          setFormData((prev) => ({
                            ...prev,
                            contactMethod: e.target.checked
                              ? prev.contactMethod + (prev.contactMethod ? "," : "") + method
                              : prev.contactMethod.replace(new RegExp(`,?${method},?`), "").replace(/^,|,$/, ""),
                          }))
                        }}
                        className="mr-3 mt-1 text-[#1A3D5D] focus:ring-[#1A3D5D]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-[#1A3D5D]">💬 Text Message</span>
                          <span className="ml-2 text-xs text-gray-500">- Quick and discreet</span>
                        </div>
                        {formData.contactMethod.includes("text") && (
                          <div className="bg-white border border-gray-300 rounded-md p-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Your Mobile Number:</label>
                            <input
                              type="tel"
                              placeholder="07123 456789"
                              value={formData.textNumber}
                              onChange={(e) => setFormData((prev) => ({ ...prev, textNumber: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1A3D5D] mb-2">
                  When would you prefer us to respond?
                </label>
                <select
                  value={formData.responseTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, responseTime: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
                >
                  <option value="">Any time during business hours</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-6pm)</option>
                  <option value="specific">Specific time (please specify in message)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1A3D5D] mb-2">
                {isInvoiceRequest ? "Invoice Details *" : "Message *"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder={
                  isInvoiceRequest
                    ? "Please provide details about the service you need invoiced and the amount if known..."
                    : "Please provide as much information you are comfortable with or simply request us to contact you back"
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D5D] focus:border-transparent"
              ></textarea>
            </div>

            {!isInvoiceRequest && (
              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-medium text-[#1A3D5D] mb-4">Brief Assessment (Optional)</h3>
                <p className="text-sm text-gray-600 mb-6">
                  These questions help us understand your situation better and prepare for our conversation. All
                  responses are confidential.
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A3D5D] mb-3">is your level of use...</label>
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
                      <span>1 - Not at all</span>
                      <span className="font-medium text-[#1A3D5D]">{formData.concernLevel}</span>
                      <span>10 - Significantly</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
                    How much do you think those closest to you would notice or be concerned if they knew the full
                    picture?
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
                      <span>1 - Not at all</span>
                      <span className="font-medium text-[#1A3D5D]">{formData.urgencyLevel}</span>
                      <span>10 - Very concerned</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
                    How important is it to you to make a change?
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
                      <span>1 - Not important</span>
                      <span className="font-medium text-[#1A3D5D]">{formData.comfortLevel}</span>
                      <span>10 - Very important</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
                    How ready do you feel to take the first step?
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
                      <span>1 - Not ready</span>
                      <span className="font-medium text-[#1A3D5D]">{formData.impactLevel}</span>
                      <span>10 - Very ready</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A3D5D] mb-3">
                    How confident are you that support could help?
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
                      <span>1 - Not confident</span>
                      <span className="font-medium text-[#1A3D5D]">{formData.readinessLevel}</span>
                      <span>10 - Very confident</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {submitMessage && (
              <div
                className={`p-4 rounded-lg ${
                  submitMessage.includes("error") || submitMessage.includes("Sorry")
                    ? "bg-red-50 border border-red-200 text-red-700"
                    : "bg-green-50 border border-green-200 text-green-700"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1A3D5D] text-white px-8 py-4 rounded-lg hover:bg-[#1A3D5D]/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : isInvoiceRequest ? "Request Invoice" : "Send Confidential Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
