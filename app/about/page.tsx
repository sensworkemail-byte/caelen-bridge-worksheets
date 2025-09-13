"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="block">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-48 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Contact
              </Link>
            </nav>
            <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">0800 654 6848</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance">About Caelen Bridge</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">Why us & how we work</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md border-l-4 border-[#1A3D5D]">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Caelen provides specialist one-to-one services with complete confidentiality and a clear, professional
                approach. Our experience spans decades of helping individuals and families address alcohol and drug
                concerns in a way that fits their circumstances.
              </p>
            </div>

            {/* Team Description */}
            <div className="text-center bg-#f8f9fa p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our team includes respected practitioners with extensive backgrounds across specialist services,
                healthcare, and training. This combined expertise allows us to offer guidance that is both practical and
                reliable.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-[#1A3D5D]">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                To provide approaches that work — removing barriers and focusing on what makes progress possible.
              </p>
            </div>

            {/* Approach */}
            <div className="bg-#f8f9fa p-10 rounded-lg shadow-md -mt-6">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Approach</h2>
              <ul className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A3D5D]">
                  <span className="bg-[#1A3D5D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <span>Evidence-based methods that are proven to work</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A3D5D]">
                  <span className="bg-[#1A3D5D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <span>Flexible scheduling around your commitments</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A3D5D]">
                  <span className="bg-[#1A3D5D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <span>Complete confidentiality with no shared records</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A3D5D]">
                  <span className="bg-[#1A3D5D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <span>Progress tracking that feels meaningful to you</span>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white border-l-4 border-[#1A3D5D] p-10 shadow-lg rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team have supported hundreds of people in addressing alcohol and drug use with clarity and respect.
                We understand the pressures people face and are committed to providing discreet, reliable input that can
                lead to meaningful change.
              </p>
            </div>

            {/* Professional Credentials */}
            <div className="text-center border-t-2 border-[#1A3D5D] pt-20 bg-#f8f9fa p-10 rounded-lg shadow-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ap-logo-vrkeY41O68ZNaAmBun2BVYyjxmkTPo.webp"
                alt="Addiction Professionals Registration Body and Network - Advanced Practitioner Members"
                className="mx-auto h-24 w-auto opacity-75"
              />
              <p className="text-sm text-gray-600 mt-4 font-semibold">Advanced Practitioner Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Considering your options?</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every journey begins with a single conversation. I'm here to provide the support and guidance you need, when
            you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact#contact-form"
              className="bg-[#1A3D5D] text-white px-10 py-4 rounded-lg hover:bg-[#0f2a42] transition-all duration-300 ease-in-out shadow-lg font-semibold"
            >
              Explore a Confidential Consultation
            </Link>
            <Link
              href="tel:08006546848"
              className="border-2 border-[#1A3D5D] text-[#1A3D5D] px-10 py-4 rounded-lg hover:bg-[#1A3D5D] hover:text-white transition-colors shadow-md font-semibold"
            >
              Call to Discuss: 0800 654 6848
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
                  className="block text-gray-600 hover:text-[#1A3D5D] transition-colors"
                >
                  Individual Support
                </Link>
                <Link
                  href="/services/family-support"
                  className="block text-gray-600 hover:text-[#1A3D5D] transition-colors"
                >
                  Family Support
                </Link>
                <Link
                  href="/services/community-detox"
                  className="block text-gray-600 hover:text-[#1A3D5D] transition-colors"
                >
                  Alcohol Home Detox
                </Link>
                <Link href="/services/training" className="block text-gray-600 hover:text-[#1A3D5D] transition-colors">
                  Training
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Information</h4>
              <div className="space-y-1">
                <Link href="/about" className="block text-gray-600 hover:text-[#1A3D5D] transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-600 hover:text-[#1A3D5D] transition-colors">
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
