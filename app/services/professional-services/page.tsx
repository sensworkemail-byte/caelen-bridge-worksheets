import Link from "next/link"
import { X, Phone } from "lucide-react"

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
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

      <section className="py-12 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A3D5D] mb-6 text-balance">Professional Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Training programs and workplace partnerships to support organisations in addressing substance-related
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1A3D5D] mb-4">Workplace Support Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Help your organisation create a supportive environment for employees facing substance-related challenges
              while maintaining productivity and workplace safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-[#1A3D5D] mb-6">Training Programs</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Manager Training</h4>
                  <p className="text-gray-600 text-base">
                    Equip supervisors and managers with the skills to recognise signs of substance use concerns, conduct
                    supportive conversations, and connect employees with appropriate resources.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Employee Awareness</h4>
                  <p className="text-gray-600 text-base">
                    Educational sessions that reduce stigma, increase awareness of available support, and promote a
                    culture of wellness and recovery in the workplace.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Policy Development</h4>
                  <p className="text-gray-600 text-base">
                    Assistance in developing compassionate, effective workplace policies that balance support for
                    employees with business needs and legal requirements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#1A3D5D] mb-6">Consultation Services</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Employee Assistance Programs</h4>
                  <p className="text-gray-600 text-base">
                    Design and implementation of comprehensive EAP services that include substance use support, mental
                    health resources, and family assistance programs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Crisis Response</h4>
                  <p className="text-gray-600 text-base">
                    Immediate consultation and support during workplace incidents involving substance use, including
                    safety protocols and employee support strategies.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-[#1A3D5D] mb-3">Return-to-Work Support</h4>
                  <p className="text-gray-600 text-base">
                    Guidance for supporting employees returning to work after treatment, including accommodation
                    strategies and ongoing monitoring approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Corporate Offices</h3>
                <p className="text-gray-600 text-base">
                  Professional services firms, financial institutions, and corporate environments.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-base">
                  Industrial facilities, construction companies, and safety-sensitive environments.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A3D5D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1A3D5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-[#1A3D5D] mb-2">Healthcare</h3>
                <p className="text-gray-600 text-base">
                  Hospitals, clinics, and healthcare organisations supporting staff wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-6">Benefits for Your Organisation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Reduced Absenteeism</h4>
                      <p className="text-gray-600 text-base">
                        Early intervention and support reduce time away from work.
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Improved Safety</h4>
                      <p className="text-gray-600 text-base">
                        Proactive approach to substance-related safety concerns.
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Enhanced Productivity</h4>
                      <p className="text-gray-600 text-base">Supported employees are more engaged and productive.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Positive Culture</h4>
                      <p className="text-gray-600 text-base">
                        Foster a supportive, wellness-focused workplace environment.
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Legal Compliance</h4>
                      <p className="text-gray-600 text-base">
                        Ensure policies meet legal requirements and best practices.
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium text-[#1A3D5D]">Cost Savings</h4>
                      <p className="text-gray-600 text-base">
                        Reduce costs associated with turnover, accidents, and lost productivity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-light text-[#1A3D5D] mb-4">Ready to Support Your Team?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how professional services can benefit your organisation and create a customized approach
              that fits your workplace culture and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#1A3D5D] text-white px-8 py-3 rounded-lg hover:bg-[#1A3D5D] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:08006546848"
                className="border-2 border-[#1A3D5D] text-[#1A3D5D] px-8 py-3 rounded-lg hover:bg-[#1A3D5D] hover:text-white transition-colors"
              >
                Call: 0800 654 6848
              </Link>
            </div>
          </div>
        </div>
      </section>

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
