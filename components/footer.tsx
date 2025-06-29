"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white px-4 pt-8 pb-2 mb-0">
            <div className="container mx-auto max-w-4xl space-y-6">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-[#5865F2] rounded-lg flex items-center justify-center">
                            <img
                                src="/discord.svg"
                                alt="Discord Logo"
                                className="w-4 h-4"
                            />
                        </div>
                        <span className="font-semibold">Discord Badge</span>
                    </div>

                    <div className="flex items-center space-x-5 text-sm">
                        <Link
                            href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge"
                            target="_blank"
                            className="text-slate-400 hover:text-white"
                        >
                            Github
                        </Link>
                        <Link
                            href="https://rohan-sharma-portfolio.vercel.app/"
                            target="_blank"
                            className="text-slate-400 hover:text-white"
                        >
                            Portfolio
                        </Link>
                        <Link href="/" target="_blank" className="text-slate-400 hover:text-white">
                            Blog
                        </Link>
                        <Link href="/documentation" className="text-slate-400 hover:text-white">
                            Documentation
                        </Link>
                        <a
                            href="mailto:specialrohansharma200@gmail.com"
                            className="text-slate-400 hover:text-white"
                        >
                            Contact
                        </a>
                    </div>

                    <div className="text-sm text-slate-400 text-center md:text-right">
                        Made with ❤️ by{" "}
                        <Link
                            href="https://rohan-sharma-portfolio.vercel.app/"
                            target="_blank"
                            className="text-[#5865F2] hover:text-white"
                        >
                            Rohan Sharma
                        </Link>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center text-sm text-slate-400">
                    For demonstration purposes, we used stats from{" "}
                    <Link
                        href="https://llmware.ai"
                        target="_blank"
                        className="text-[#5865F2] hover:text-white"
                    >
                        LLMWare
                    </Link>
                    's Discord Server.
                </div>
            </div>
        </footer>
    )
}
