"use client"

import Link from "next/link"
import { X, Phone, GraduationCap } from "lucide-react"
import { useEffect } from "react"

export default function TrainingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px] shadow-sm">
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
              {/* Phone Number */}
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-lg mx-auto">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance">Professional Training</h1>
          <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Comprehensive training programs for healthcare professionals, frontline staff, and organisations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-4 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Training Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3D5D] mb-6">Training Overview</h2>
            <p className="text-base text-gray-600 mb-6">
              Our training provides organisations, teams, and individuals with a clear understanding of substance use
              and practical ways to respond. Whether you work in social care, health, education, housing, or simply want
              to improve awareness in your workplace, our sessions are designed to meet your needs.
            </p>
            <p className="text-base text-gray-600 mb-4">Training is available as:</p>
            <ul className="text-base text-gray-600 space-y-2 mb-6">
              <li>
                • <strong>2-hour awareness sessions</strong> – concise introductions.
              </li>
              <li>
                • <strong>Half-day workshops</strong> – interactive with discussion and activities.
              </li>
              <li>
                • <strong>Full-day training</strong> – in-depth, practice-focused learning.
              </li>
              <li>
                • <strong>Bespoke programmes</strong> – tailored content created with notice.
              </li>
            </ul>
          </section>

          {/* Training Menu */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3D5D] mb-6">Training Menu</h2>

            <div className="space-y-8">
              {/* Drug & Alcohol Awareness */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">1️⃣ Drug & Alcohol Awareness</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Clear overview of drugs and alcohol: myths, facts, and realities.</li>
                  <li>• How substances affect the body and mind.</li>
                  <li>• Recognising signs and risks in everyday settings.</li>
                  <li>
                    • Option to expand into specific drug modules (opioids, cocaine, cannabis, prescription misuse).
                  </li>
                </ul>
              </div>

              {/* The Brain & Substance Use */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">2️⃣ The Brain & Substance Use</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• How the brain adapts to drug and alcohol use.</li>
                  <li>• Why dependence develops and how cravings work.</li>
                  <li>• Neurological basis of relapse and recovery.</li>
                  <li>• Practical insights for staff and non-specialists.</li>
                </ul>
              </div>

              {/* Recovery Support */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">3️⃣ Recovery Support</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• What recovery means in different contexts.</li>
                  <li>• Everyday interventions anyone can use — you don't need to be a specialist.</li>
                  <li>• Supporting motivation and resilience.</li>
                  <li>• Pathways into treatment and community resources.</li>
                </ul>
              </div>

              {/* Harm Minimisation */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">4️⃣ Harm Minimisation</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• What harm minimisation really is and how it works in practice.</li>
                  <li>• Safer use principles and overdose prevention.</li>
                  <li>• Naloxone awareness and risk reduction.</li>
                  <li>• Balancing harm reduction with recovery goals.</li>
                </ul>
              </div>

              {/* Ethics, Values & Boundaries */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">5️⃣ Ethics, Values & Boundaries</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Working with addiction in a values-driven way.</li>
                  <li>• Navigating ethical dilemmas and moral challenges.</li>
                  <li>• Boundaries to protect staff and service users.</li>
                  <li>• Bridging the gap between professional standards and real-world practice.</li>
                </ul>
              </div>

              {/* Flexible Add-Ons */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1A3D5D] mb-4">Flexible Add-Ons</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Adapted content for schools, housing, healthcare, or workplaces.</li>
                  <li>• Bespoke training developed around organisational needs.</li>
                  <li>• Combination programmes (e.g. awareness + recovery + ethics in one day).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Training Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3D5D] mb-6">Our Approach</h2>
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <div className="w-16 h-16 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A3D5D] mb-2">Evidence-Based</h3>
                  <p className="text-base text-gray-600">built on research and best practice.</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <div className="w-16 h-16 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A3D5D] mb-2">Realistic</h3>
                  <p className="text-base text-gray-600">informed by decades of frontline experience.</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <div className="w-16 h-16 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A3D5D] mb-2">Interactive</h3>
                  <p className="text-base text-gray-600">discussion, case studies, and applied learning.</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <div className="w-16 h-16 bg-[#1A3D5D] rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A3D5D] mb-2">Supportive</h3>
                  <p className="text-base text-gray-600">ongoing guidance and resources after training.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-[#1A3D5D] mb-6">Get Started with Training</h2>
            <p className="text-base text-gray-600 mb-8">
              <Link href="/contact" className="text-[#1A3D5D] hover:text-blue-800 underline">
                Contact us
              </Link>{" "}
              to discuss your organisation's needs and build the right training package.
            </p>
          </section>
        </div>
      </main>

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
