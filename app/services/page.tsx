"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-48 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-4">Service Options</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From early reflection to ongoing development, explore the full range of confidential services and training
            we provide.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* One to One Support */}
            <Link href="/services/individual-support">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 w-full cursor-pointer h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-12 h-12 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1A3D5D] mb-3">One to One Support</h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      Confidential individual sessions focused on personal goals, challenges, and sustainable change
                      strategies.
                    </p>
                    <Button className="bg-[#1A3D5D] hover:bg-[#1A3D5D] text-white px-8 py-3 text-lg rounded-full w-full shadow-md mt-auto">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Alcohol Home Detox */}
            <Link href="/services/community-detox">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 w-full cursor-pointer h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-12 h-12 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1A3D5D] mb-3">Alcohol Home Detox</h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      Professional medical and psychological support for safe, supervised detox in the comfort of your
                      own home.
                    </p>
                    <Button className="bg-[#1A3D5D] hover:bg-[#1A3D5D] text-white px-8 py-3 text-lg rounded-full w-full shadow-md mt-auto">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Family Support */}
            <Link href="/services/family-support">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 w-full cursor-pointer h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-12 h-12 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1A3D5D] mb-3">Family Support</h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      Guidance and resources for families affected by addiction, including communication strategies and
                      boundary setting.
                    </p>
                    <Button className="bg-[#1A3D5D] hover:bg-[#1A3D5D] text-white px-8 py-3 text-lg rounded-full w-full shadow-md mt-auto">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Training */}
            <Link href="/services/training">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 w-full cursor-pointer h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="w-12 h-12 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1A3D5D] mb-3">Training</h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      Professional development and training programs for healthcare providers and support professionals.
                    </p>
                    <Button className="bg-[#1A3D5D] hover:bg-[#1A3D5D] text-white px-8 py-3 text-lg rounded-full w-full shadow-md mt-auto">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-24 w-auto mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, confidential support for individuals and families affected by addiction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Contact</h4>
              <p className="text-gray-600">0800 654 6848</p>
              <p className="text-gray-600">contact@caelen.co.uk</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Services</h4>
              <div className="space-y-1">
                <Link
                  href="/services/individual-support"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Individual Support
                </Link>
                <Link
                  href="/services/family-support"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Family Support
                </Link>
                <Link
                  href="/services/community-detox"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Alcohol Home Detox
                </Link>
                <Link href="/services/training" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  Training
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Information</h4>
              <div className="space-y-1">
                <Link href="/about" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2025 Caelen Bridge. All rights reserved. | We aim to respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
