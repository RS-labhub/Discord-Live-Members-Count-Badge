"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
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
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
                  <p className="text-sm text-slate-500 mt-2">Last updated: {lastUpdated}</p>
                </div>

                <p>
                  This Privacy Policy explains how Discord Live Members Count Badge ("the Service", "we", "our", or
                  "us") handles data when you use our bot, website, and badge API. We are committed to collecting as
                  little data as possible.
                </p>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">1. What Data We Access</h2>
                  <p>
                    When our bot is added to a Discord server, it uses the Discord API to read the server's member list
                    for the sole purpose of counting members. From each member we read only the account's bot flag (to
                    distinguish humans from bots) and the account ID used internally for pagination while counting. We do
                    not read message content, direct messages, or private communications.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">2. What We Store</h2>
                  <p>
                    We do not maintain a long-term database of individual users. To reduce API calls, we temporarily
                    cache the fetched member list for a Discord server for up to five minutes. After this cache expires,
                    the data is discarded. We do not sell, share, or use this data for any purpose other than generating
                    the count badge you requested.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">3. Presence Data</h2>
                  <p>
                    Where the Presence intent is used, presence status is read only in-memory to compute an aggregate
                    count (for example, the number of online members) at the moment a badge is requested. Presence data
                    is never stored off-platform, never associated with an individual, and never used beyond producing
                    that aggregate number.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">4. Public Badge Requests</h2>
                  <p>
                    Our badge API endpoints accept a Discord server (guild) ID as a URL parameter. Standard server logs
                    may temporarily record request metadata such as IP address and timestamp for security and abuse
                    prevention. These logs are not used to identify or profile individuals.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">5. Third-Party Services</h2>
                  <p>
                    The Service relies on the Discord API to retrieve member data and is hosted on Vercel. We also use
                    Vercel Analytics for aggregate, anonymized traffic statistics. These providers process data according
                    to their own privacy policies.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">6. Your Choices and Opt-Out</h2>
                  <p>
                    Because we only compute aggregate counts and do not store individual user data, no personal profile
                    of any member exists. A server administrator can stop all data access at any time by removing the bot
                    from the server, which immediately ends any member counting for that server.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">7. Data Security</h2>
                  <p>
                    Our bot token and credentials are stored as secure environment variables. Cached data is held in a
                    temporary store and automatically expires. We take reasonable measures to protect the limited data we
                    process.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">8. Children's Privacy</h2>
                  <p>
                    The Service is not directed at children under the age required by Discord's Terms of Service. We do
                    not knowingly collect personal information from anyone below that age.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">9. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated "Last updated" date.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-slate-900">10. Contact</h2>
                  <p>
                    If you have questions about this Privacy Policy or your data, contact us at{" "}
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
                  <Link href="/terms" className="text-[#5865F2] hover:underline">
                    View our Terms of Service →
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
