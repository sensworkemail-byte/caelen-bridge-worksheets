"use client"
import { useEffect } from "react"
import Link from "next/link"
import { X, Phone, Users } from "lucide-react"
import { NumberedBadge } from "@/components/ui/numbered-badge"

export default function FamilySupportPage() {
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
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-40 w-auto" />
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
              <span className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center mr-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">0800 654 6848</span>
              </span>
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
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-md">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A3D5D] mb-6 text-balance">Family Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Guidance for families navigating the challenges that arise when a loved one is using alcohol or drugs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-light text-[#1A3D5D] mb-6">Supporting the Whole Family</h2>
              <p className="text-gray-600 mb-4">
                When substance use touches one family member, it affects everyone. We provide confidential guidance to
                help you understand what's happening, strengthen communication, and find approaches that protect your
                own wellbeing while supporting your loved one.
              </p>
              <p className="text-gray-600">
                Our approach recognises that every family situation is unique. Support is tailored to your
                circumstances, providing practical strategies while respecting family relationships and the need for
                discretion.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-[#1A3D5D] mb-4">What We Address</h3>
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
                  Communication strategies that reduce conflict
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
                  Setting healthy boundaries and expectations
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
                  Understanding substance use and its impact on families
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
                  Self-care and resilience for family members
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-[#1A3D5D] rounded-lg p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-8 text-center">Our Family Support Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <NumberedBadge number={1} size="md" className="mx-auto mb-4" />
                <h3 className="font-medium text-[#1A3D5D] mb-3">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">
                  A confidential conversation to understand your family's situation and identify support needs.
                </p>
              </div>
              <div className="text-center">
                <NumberedBadge number={2} size="md" className="mx-auto mb-4" />
                <h3 className="font-medium text-[#1A3D5D] mb-3">Tailored Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Development of practical strategies for communication, boundaries, and family wellbeing.
                </p>
              </div>
              <div className="text-center">
                <NumberedBadge number={3} size="md" className="mx-auto mb-4" />
                <h3 className="font-medium text-[#1A3D5D] mb-3">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">
                  Regular sessions to put strategies into practice and adapt to changing circumstances.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">Support Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-[#1A3D5D] mb-3">Individual Family Counseling</h3>
                <p className="text-gray-600 text-base mb-4">
                  One-on-one sessions for family members to process their experiences, develop coping strategies, and
                  learn effective communication techniques.
                </p>
                <h3 className="font-medium text-[#1A3D5D] mb-3">Family Sessions</h3>
                <p className="text-gray-600 text-base">
                  Guided family meetings to improve communication, address conflicts, and work together toward positive
                  changes and healing.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#1A3D5D] mb-3">Educational Workshops</h3>
                <p className="text-gray-600 text-base mb-4">
                  Learn about addiction, recovery, and family dynamics through structured educational sessions designed
                  to increase understanding and reduce stigma.
                </p>
                <h3 className="font-medium text-[#1A3D5D] mb-3">Crisis Support</h3>
                <p className="text-gray-600 text-base">
                  Immediate guidance during difficult situations, including safety planning and connecting with
                  additional resources when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">Common Concerns We Address</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-[#1A3D5D] mb-3">"How do I help without enabling?"</h3>
                <p className="text-gray-600 text-base mb-4">
                  Learn the difference between support and enabling, and develop strategies that encourage positive
                  change while maintaining healthy boundaries.
                </p>
                <h3 className="font-medium text-[#1A3D5D] mb-3">
                  "How do I look after myself while supporting someone else?"
                </h3>
                <p className="text-gray-600 text-base">
                  Self-care isn't selfish—it's essential. Learn practical strategies for maintaining your own well-being
                  while supporting your loved one.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#1A3D5D] mb-3">"How do I set and hold boundaries?"</h3>
                <p className="text-gray-600 text-base mb-4">
                  Understand how to establish clear, healthy boundaries that protect your wellbeing while maintaining
                  supportive relationships with your loved one.
                </p>
                <h3 className="font-medium text-[#1A3D5D] mb-3">"When should I seek outside help?"</h3>
                <p className="text-gray-600 text-base">
                  Understand when family support services can be most helpful and how to access appropriate resources
                  for your specific situation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">Getting Started</h2>
            <p className="text-gray-600 mb-6">
              Family support begins with a confidential consultation where we discuss your situation and explore how
              best to support you. You don't have to manage this alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                scroll={false}
                className="bg-[#1A3D5D] text-white px-6 py-3 rounded-lg hover:bg-[#1A3D5D] transition-colors text-center"
              >
                Schedule Family Consultation
              </Link>
              <Link
                href="tel:08006546848"
                className="border-2 border-[#1A3D5D] text-[#1A3D5D] px-6 py-3 rounded-lg hover:bg-[#1A3D5D] hover:text-white transition-colors text-center"
              >
                Call for Support: 0800 654 6848
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Caelen Bridge. Professional substance support services. All consultations are confidential.
          </p>
        </div>
      </footer>
    </div>
  )
}
