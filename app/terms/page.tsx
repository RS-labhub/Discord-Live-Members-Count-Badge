"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function TermsOfService() {
  const lastUpdated = "August 17, 2026"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                <img src="/discord.svg" alt="Discord Logo" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Discord Badge</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Home
              </Link>
              <Link
                href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge"
                target="_blank"
                className="text-slate-600 hover:text-slate-900"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Service</h1>
                  <p className="text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
                </div>

                <p>
                  Welcome to Discord Live Members Count Badge ("the Service", "we", "our", or "us"). By using our
                  website, bot, or badge API, you agree to these Terms of Service. If you do not agree, please do not use
                  the Service.
                </p>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">1. Description of Service</h2>
                  <p>
                    The Service provides real-time Discord member count badges (SVG images) that can be embedded in
                    GitHub READMEs, websites, and other documents. Badges display the total member count, human-only
                    count, or bot-only count for a Discord server you own or administer.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">2. Eligibility and Use</h2>
                  <p>
                    You may only generate badges for Discord servers that you own or are authorized to manage. To use the
                    Service, you must invite our bot to your server and enable the required settings. You agree to use the
                    Service in compliance with Discord's{" "}
                    <Link
                      href="https://discord.com/terms"
                      target="_blank"
                      className="text-[#5865F2] hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service"
                      target="_blank"
                      className="text-[#5865F2] hover:underline"
                    >
                      Developer Terms of Service
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">3. Acceptable Use</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use the Service for any unlawful, harmful, or abusive purpose.</li>
                    <li>Attempt to overload, disrupt, or reverse engineer the Service or its infrastructure.</li>
                    <li>Use automated scripts to abuse the badge API beyond reasonable use.</li>
                    <li>Misrepresent data or use the Service to deceive others.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">4. Availability</h2>
                  <p>
                    The Service is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted
                    availability, accuracy of member counts, or that the Service will be error-free. Member counts are
                    cached for up to five minutes and may not reflect real-time changes instantly.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">5. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or
                    consequential damages arising from your use of, or inability to use, the Service. The Service is a
                    free, open-source project provided without warranty of any kind.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">6. Open Source</h2>
                  <p>
                    The Service is open source and released under the MIT License. You are free to self-host and modify
                    the code in accordance with the license terms available in our{" "}
                    <Link
                      href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge"
                      target="_blank"
                      className="text-[#5865F2] hover:underline"
                    >
                      GitHub repository
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">7. Changes to These Terms</h2>
                  <p>
                    We may update these Terms from time to time. Continued use of the Service after changes are posted
                    constitutes acceptance of the revised Terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
                  <p>
                    If you have questions about these Terms, contact us at{" "}
                    <a
                      href="mailto:specialrohansharma200@gmail.com"
                      className="text-[#5865F2] hover:underline"
                    >
                      specialrohansharma200@gmail.com
                    </a>
                    .
                  </p>
                </section>

                <div className="pt-4">
                  <Link
                    href="/privacy"
                    className="text-[#5865F2] hover:underline"
                  >
                    View our Privacy Policy →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
