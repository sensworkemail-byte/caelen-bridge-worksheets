"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <Link href="/contact" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <div className="flex items-center">
              <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">0800 654 6848</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance">Connect With Us</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred way to get in touch. We're here to support you with complete confidentiality.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <div className="text-center p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Leave a confidential message and a professional counselor will call you back for support and guidance.
              </p>
              <Link
                href="/contact-phone"
                className="bg-[#1A3D5D] text-white px-6 py-3 rounded-lg hover:bg-[#0f2a42] transition-colors inline-block"
              >
                Call Options
              </Link>
            </div>

            {/* Send Message */}
            <div className="text-center p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">Send Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out our secure contact form and we'll respond within 24 hours during business days.
              </p>
              <Link
                href="/contact-form#send-message"
                className="bg-[#1A3D5D] text-white px-6 py-3 rounded-lg hover:bg-[#0f2a42] transition-colors inline-block"
              >
                Send Message
              </Link>
            </div>

            {/* Email */}
            <div className="text-center p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Send us a message using our encrypted email system for complete privacy and confidentiality.
              </p>
              <div className="space-y-2">
                <div className="font-semibold text-[#1A3D5D]">contact@caelen.co.uk</div>
                <div className="text-sm text-gray-500">General inquiries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-l-4 border-[#1A3D5D] p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h3>
            <div className="space-y-2 text-gray-800">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Weekend and evening appointments:</span>
                <span>By arrangement only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-16 w-auto mb-4" />
              <p className="text-gray-600 mb-4">
                Professional, confidential support for individuals and families affected by substance use.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0800 654 6848</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>contact@caelen.co.uk</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/individual-support" className="text-gray-600 hover:text-[#1A3D5D]">
                    Individual Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/family-support" className="text-gray-600 hover:text-[#1A3D5D]">
                    Family Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/alcohol-home-detox" className="text-gray-600 hover:text-[#1A3D5D]">
                    Alcohol Home Detox
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="text-gray-600 hover:text-[#1A3D5D]">
                    Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Information</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#1A3D5D]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#1A3D5D]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Caelen Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
