"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NumberedBadge } from "@/components/ui/numbered-badge"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const HomePage = () => {
  const showTrustIndicators = process.env.NEXT_PUBLIC_SHOW_TRUST_INDICATORS !== "false"
  const showServices = process.env.NEXT_PUBLIC_SHOW_SERVICES !== "false"
  const showProcess = process.env.NEXT_PUBLIC_SHOW_PROCESS !== "false"
  const showCTA = process.env.NEXT_PUBLIC_SHOW_CTA !== "false"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="block">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-48 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors font-medium">
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

            {/* Phone Number */}
            <div className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">0800 654 6848</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${inter.className} text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance`}>
            Private Alcohol & Drug Support
          </h1>
          <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Specialist support for individuals and families, delivered with complete discretion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-form" scroll={false}>
              <Button className="bg-[#1A3D5D] hover:bg-[#0f2a42] text-white px-8 py-3 text-lg rounded-full shadow-md transition-all duration-300 ease-in-out">
                Confidential Consultation
              </Button>
            </Link>
            <Link href="/contact-phone" scroll={false}>
              <Button
                variant="outline"
                className="border-[#1A3D5D] text-[#1A3D5D] hover:bg-gray-50 hover:text-[#1A3D5D] px-8 py-3 text-lg rounded-full bg-transparent shadow-md transition-all duration-300 ease-in-out"
              >
                Call When Ready
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      {showServices && (
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#1A3D5D] mb-4 text-center">Our Services</h2>
            <p className="text-xl text-gray-700 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
              From early reflection to ongoing development, explore the full range of services designed around your
              needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col bg-white shadow-md border-l-4 border-l-[#1A3D5D]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">One to One Support</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  A private space to talk openly about your situation and explore the options available.
                </p>
                <ul className="text-sm text-gray-600 mb-8 space-y-2 min-h-[4.5rem]">
                  <li>• Share concerns without pressure or judgement</li>
                  <li>• Identify options that feel realistic for you</li>
                  <li>• Guidance built on long-standing professional experience</li>
                </ul>
                <Link href="/services/individual-support">
                  <Button className="bg-[#1A3D5D] hover:bg-[#0f2a42] text-white px-8 py-3 text-lg rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col bg-white shadow-md border-l-4 border-l-[#1A3D5D]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alcohol Home Detox</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Alcohol home detox with medical liaison and structured oversight throughout the process.
                </p>
                <ul className="text-sm text-gray-600 mb-8 space-y-2 min-h-[4.5rem]">
                  <li>• Coordination with medical professionals involved in the detox</li>
                  <li>• Post-detox planning and ongoing recovery support</li>
                  <li>• Private alternative to residential detox facilities</li>
                </ul>
                <Link href="/services/community-detox">
                  <Button className="bg-[#1A3D5D] hover:bg-[#0f2a42] text-white px-8 py-3 text-lg rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col bg-white shadow-md border-l-4 border-l-[#1A3D5D]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Support</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Support for families and partners affected by substance use, providing guidance and perspective
                  through the process.
                </p>
                <ul className="text-sm text-gray-600 mb-8 space-y-2 min-h-[4.5rem]">
                  <li>• Practical strategies to reduce strain at home</li>
                  <li>• Education about substance use and its impact</li>
                  <li>• Guidance on supportive but safe boundaries</li>
                </ul>
                <Link href="/services/family-support">
                  <Button className="bg-[#1A3D5D] hover:bg-[#0f2a42] text-white px-8 py-3 text-lg rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {showProcess && (
        <section className="py-8 px-6 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#1A3D5D] mb-12 text-center">How We Work</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto mb-6">
                  <NumberedBadge number={1} size="sm" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Contact</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  An initial conversation to understand your situation and outline potential options
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto mb-6">
                  <NumberedBadge number={2} size="sm" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tailored Plan</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  Develop a support approach that fits your lifestyle and personal circumstances
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto mb-6">
                  <NumberedBadge number={3} size="sm" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  Regular guidance and adjustments as your needs evolve over time
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      {showTrustIndicators && (
        <section className="py-8 px-6 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-1 bg-[#1A3D5D] mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Discretion</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  No referrals, no shared records, no clinical paperwork. Your privacy is our priority.
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-1 bg-[#1A3D5D] mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Experienced Practitioners</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  Qualified substance misuse practitioners with over 40 years of combined experience.
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1A3D5D] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-1 bg-[#1A3D5D] mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tailored Support</h3>
                <p className="text-gray-700 leading-relaxed min-h-[3rem] flex items-center justify-center">
                  One-to-one guidance designed around your lifestyle, schedule, and circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Discreet CTA */}
      {showCTA && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#1A3D5D] mb-6">Start with a conversation...</h2>
            <p className="text-gray-700 mb-16 text-lg leading-relaxed">
              Leave us a message and we'll call you back to discuss your options in complete confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact-phone" scroll={false}>
                <Button className="bg-[#1A3D5D] hover:bg-[#0f2a42] text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out">
                  Call When Ready: 0800 654 6848
                </Button>
              </Link>
              <Link href="/contact-form" scroll={false}>
                <Button
                  variant="outline"
                  className="border-[#1A3D5D] text-[#1A3D5D] hover:bg-[#1A3D5D] hover:text-white px-8 py-3 rounded-full bg-transparent shadow-md transition-all duration-300 ease-in-out"
                >
                  Send Confidential Message
                </Button>
              </Link>
            </div>
            <div className="text-gray-600 text-sm">
              <p className="font-semibold mb-1">Available Monday-Friday, 9am-6pm</p>
              <p>We aim to respond within 24 hours during business days</p>
            </div>
          </div>
        </section>
      )}

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

export default HomePage
