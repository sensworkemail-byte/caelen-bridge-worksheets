"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function IndividualSupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="block">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1A3D5D] hover:text-[#1A3D5D]/80 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#1A3D5D] hover:text-[#1A3D5D]/80 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-[#1A3D5D] hover:text-[#1A3D5D]/80 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#1A3D5D] hover:text-[#1A3D5D]/80 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Phone */}
              <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center mr-2">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">0800 654 6848</span>
              </span>
              {/* Close Button */}
              <Link
                href="/services"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close and return to Services"
              >
                <svg className="h-6 w-6 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A3D5D] mb-6 text-balance">One to One Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Personalised, confidential support tailored to your individual recovery journey and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">What Is One to One Support?</h2>
              <p className="text-gray-600 mb-6">
                Our one-to-one support provides personalised guidance through your recovery journey. Working closely
                with you, we develop strategies and coping mechanisms tailored to your specific needs, circumstances,
                and goals.
              </p>

              <div className="bg-gray-600 text-white p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Confidential Environment</h3>
                <p className="text-gray-200 text-sm mb-3">
                  No referrals. No shared records. Sessions are private and can take place in-person, by phone, or
                  through secure video.
                </p>
                <p className="text-gray-200 text-sm mb-3">
                  In-person sessions are available within Sussex, a map of our coverage is shown below.
                </p>
                <p className="text-gray-200 text-sm">
                  For clients outside the area, sessions are arranged virtually or by telephone, with frequency tailored
                  to individual needs.
                </p>
              </div>
            </div>

            {/* Right Column - Key Benefits */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-[#1A3D5D] mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Completely confidential and non-judgmental environment
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personalised approach based on your unique situation
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Flexible scheduling to fit around your commitments
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ongoing support throughout your recovery journey
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Clear, practical strategies that can be applied day-to-day
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#1A3D5D] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Option of in-person sessions within Sussex or secure virtual support wherever you are
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works Section - Enhanced Visual Design */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <h2 className="text-3xl font-light text-[#1A3D5D] mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-medium text-[#1A3D5D] mb-3">Initial Consultation</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We begin with a comprehensive assessment to understand your needs, goals, and current situation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-medium text-[#1A3D5D] mb-3">Personalised Plan</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Together, we develop a tailored support plan that addresses your specific challenges and objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D] text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-medium text-[#1A3D5D] mb-3">Ongoing Sessions</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Regular one-to-one sessions provide continuous support, guidance, and adjustment of strategies as
                  needed.
                </p>
              </div>
            </div>
          </div>

          {/* Coverage Map Section - Enhanced Visual Design */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6 text-center">In-Person Sessions Within Sussex</h2>
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <img
                    src="/sussex-coverage-map.png"
                    alt="Coverage map showing Sussex service area with blue boundary outline"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">
                    Coverage area for in-person sessions within Sussex
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section - Enhanced Visual Design */}
          <div className="bg-gradient-to-r from-[#1A3D5D] to-[#2A4D6D] text-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-light mb-6">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                Take the first step towards positive change with personalised support designed around your needs.
                Contact us today to arrange your initial consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#1A3D5D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-center font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Start Journey
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1A3D5D] transition-all duration-200 text-center font-medium"
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Caelen Bridge. Professional substance support services. All consultations are confidential.
          </p>
        </div>
      </footer>
    </div>
  )
}
