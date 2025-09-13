"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, Phone } from "lucide-react"
import { NumberedBadge } from "@/components/ui/numbered-badge"

export default function CommunityDetoxPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white" id="top">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="block">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-40 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
              {/* Phone */}
              <div className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center mr-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">0800 654 6848</span>
              </div>
              {/* Close Button */}
              <Link
                href="/services"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close and return to Services"
              >
                <X className="h-6 w-6 text-[#1A3D5D]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A3D5D] mb-6 text-balance">Alcohol Home Detox</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              A discreet, home-based alternative to inpatient detox, arranged through our trusted associate specialist
              nurse.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-light text-[#1A3D5D] mb-6">What is a Home Detox?</h2>
              <p className="text-gray-600 mb-4">
                Community detox provides medical supervision in the comfort of your own home, carried out by an
                experienced independent nurse. This allows you to avoid the disruption of residential treatment while
                ensuring professional oversight and safe withdrawal management.
              </p>
              <p className="text-gray-600 mb-4">
                During the process, both the patient and a chosen carer are supported directly, with guidance provided
                throughout to ensure safety and comfort.
              </p>
              <div className="bg-[#1A3D5D] text-white p-4 rounded-lg mt-6">
                <h3 className="text-lg font-medium mb-2">Service Area</h3>
                <p className="text-gray-100 text-sm">
                  This service is available within a 75-mile radius of Chichester, bringing experienced, discreet
                  support directly to your home when you need it most.
                </p>
              </div>
            </div>
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
                  Confidential and comfortable environment
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
                  Professional medical supervision at home
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
                  Cost-effective compared with inpatient options
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
                  Ability to stay connected to family and familiar surroundings
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
                  Daily nurse visits in the early stage of detox, plus a final check-in at completion
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
                  24-hour telephone support available throughout the detox
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <NumberedBadge number={1} size="md" />
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Initial Assessment</h3>
                <p className="text-gray-600 text-base">
                  A full medical assessment carried out by the associate nurse to confirm whether home detox is
                  appropriate. The detox process is explained clearly to both the patient and their carer at this stage.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <NumberedBadge number={2} size="md" />
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Personalised Plan</h3>
                <p className="text-gray-600 text-base">
                  The nurse designs and oversees a tailored detox schedule. Medication is issued daily to the carer,
                  alongside advice and support to ensure the detox proceeds safely.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <NumberedBadge number={3} size="md" />
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-base">
                  The nurse remains in contact throughout the detox with visits and check-ins, while Caelen provides
                  structured relapse-prevention and one-to-one support once the detox is complete.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">Is Alcohol Home Detox Right for You?</h2>
            <p className="text-gray-600 mb-6">
              Suitability is always determined by the nurse following a comprehensive medical assessment. If
              appropriate, this approach can offer privacy, familiarity, and professional oversight without entering a
              residential setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#1A3D5D] text-white px-6 py-3 rounded-lg hover:bg-[#0f2a42] transition-colors text-center"
              >
                Schedule Assessment
              </Link>
              <div className="border-2 border-[#1A3D5D] text-[#1A3D5D] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center cursor-default">
                Call: 0800 654 6848
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
