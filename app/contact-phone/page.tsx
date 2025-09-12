"use client"

import Link from "next/link"
import { Phone, X } from "lucide-react"
import { useEffect } from "react"

export default function ContactPhonePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance">Call When Ready</h1>
          <div className="text-4xl font-bold text-[#1A3D5D] mb-4">0800 654 6848</div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leave a confidential message and we'll call you back. Available Monday-Friday, 9am-6pm.
          </p>
        </div>
      </section>

      {/* Phone Information */}
      <section className="py-1 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg mb-4">
            <h2 className="text-2xl font-bold text-[#1A3D5D] mb-6 text-center">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3D5D] mb-2">Call Our Number</h3>
                  <p className="text-gray-600">
                    Call 0800 654 6848 and leave a confidential message. Please include your preferred callback time and
                    contact method.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3D5D] mb-2">We'll Call You Back</h3>
                  <p className="text-gray-600">
                    A member of our team will return your call within 24 hours during business days.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3D5D] mb-2">Confidential Conversation</h3>
                  <p className="text-gray-600">
                    Discuss your situation in complete confidence and explore your options for support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Callback Preferences */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">When would you prefer us to call back?</h3>
            <p className="text-gray-600 mb-6">
              Please let us know which time frame would work best for you when leaving your message:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg text-center hover:border-[#1A3D5D] transition-colors">
                <h4 className="font-medium text-[#1A3D5D] mb-2">Morning</h4>
                <p className="text-gray-600 text-sm">9:00 AM - 12:00 PM</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg text-center hover:border-[#1A3D5D] transition-colors">
                <h4 className="font-medium text-[#1A3D5D] mb-2">Afternoon</h4>
                <p className="text-gray-600 text-sm">12:00 PM - 5:00 PM</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg text-center hover:border-[#1A3D5D] transition-colors">
                <h4 className="font-medium text-[#1A3D5D] mb-2">Evening</h4>
                <p className="text-gray-600 text-sm">5:00 PM - 6:00 PM</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg text-center hover:border-[#1A3D5D] transition-colors">
                <h4 className="font-medium text-[#1A3D5D] mb-2">Weekend</h4>
                <p className="text-gray-600 text-sm">By arrangement only</p>
              </div>
            </div>
          </div>

          {/* Contact Return Preferences */}
          <div className="bg-gray-50 p-8 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">How would you prefer us to contact you?</h3>
            <p className="text-gray-600 mb-6">
              Please specify your preferred contact method when leaving your message and provide clear details:
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <Phone className="h-5 w-5 text-[#1A3D5D] mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-[#1A3D5D] mb-2">Phone Call</h4>
                  <p className="text-gray-600 text-sm">
                    Leave your phone number clearly and specify the best times to reach you. If we can't reach you
                    directly, we may leave a brief, discreet message.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-5 w-5 bg-[#1A3D5D] rounded text-white text-xs flex items-center justify-center mr-3 mt-1">
                  @
                </div>
                <div>
                  <h4 className="font-medium text-[#1A3D5D] mb-2">Email</h4>
                  <p className="text-gray-600 text-sm">
                    Provide your email address clearly. We'll send a confidential message to arrange a suitable time to
                    talk.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-5 w-5 bg-[#1A3D5D] rounded text-white text-xs flex items-center justify-center mr-3 mt-1">
                  T
                </div>
                <div>
                  <h4 className="font-medium text-[#1A3D5D] mb-2">Text Message</h4>
                  <p className="text-gray-600 text-sm">
                    Leave your mobile number clearly. We'll send a discreet text to arrange a callback time that works
                    for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#1A3D5D] rounded">
              <p className="text-sm text-[#1A3D5D]">
                <strong>Important:</strong> When leaving your message, please speak clearly and provide your contact
                details twice to ensure we can reach you. All messages are kept completely confidential.
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-4">Prefer to send a message instead?</p>
            <Link
              href="/contact-form"
              className="bg-[#1A3D5D] text-white px-6 py-3 rounded-lg hover:bg-[#0f2a42] transition-colors inline-block"
            >
              Send Confidential Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
