"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Users,
  Bot,
  Activity,
  Shield,
  Zap,
  Github,
  Copy,
  ExternalLink,
  Settings,
  CheckCircle,
  AlertCircle,
  Palette,
  Type,
  Maximize,
} from "lucide-react"

import Link from "next/link"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

export default function DiscordBadgeLanding() {
  const [guildId, setGuildId] = useState("")
  const [copiedBadge, setCopiedBadge] = useState("")
  const [inviteLink, setInviteLink] = useState("")
  const [showBadges, setShowBadges] = useState(false)

  // Playground state
  const [playgroundLabel, setPlaygroundLabel] = useState("Members")
  const [playgroundColor, setPlaygroundColor] = useState("5865F2")
  const [playgroundScale, setPlaygroundScale] = useState([1])
  const [selectedEndpoint, setSelectedEndpoint] = useState("discord-members")

  const copyToClipboard = (text: string, badgeType: string) => {
    navigator.clipboard.writeText(text)
    setCopiedBadge(badgeType)
    setTimeout(() => setCopiedBadge(""), 2000)
  }

  const badges = [
    {
      type: "members",
      label: "Human Members Only",
      icon: <Users className="w-4 h-4" />,
      endpoint: "discord-members",
      description: "Shows only human members count",
      color: "bg-blue-500",
    },
    {
      type: "bots",
      label: "Bot Members Only",
      icon: <Bot className="w-4 h-4" />,
      endpoint: "discord-bots",
      description: "Shows only bot members count",
      color: "bg-green-500",
    },
    {
      type: "total",
      label: "Total Members",
      icon: <Activity className="w-4 h-4" />,
      endpoint: "discord-total",
      description: "Shows both users and bots with breakdown",
      color: "bg-purple-500",
    },
  ]

  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Live member count with minimal API calls and smart caching",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Uses Discord API's with_counts=true for safe public access",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy to Embed",
      description: "Just add your Guild ID or Server Id to our one-liner code and that's it. You're done!",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Custom colors, labels, and scaling to match your project's style",
    },
  ]

  const colorPresets = [
    { name: "Discord", value: "5865F2" },
    { name: "Green", value: "27ae60" },
    { name: "Blue", value: "3498db" },
    { name: "Red", value: "e74c3c" },
    { name: "Orange", value: "f39c12" },
    { name: "Purple", value: "9b59b6" },
    { name: "Pink", value: "e91e63" },
    { name: "Teal", value: "1abc9c" },
  ]

  // Generate playground badge URL
  const playgroundGuildId = guildId || "1179245642770559067"
  const playgroundBadgeUrl = `https://discord-live-members-count-badge.vercel.app/api/${selectedEndpoint}?guildId=${playgroundGuildId}&color=${playgroundColor}&label=${encodeURIComponent(playgroundLabel)}&scale=${playgroundScale[0]}`
  const playgroundInvite = inviteLink || "https://discord.gg/bphreFK4NJ"
  const playgroundMarkdown = `[![${playgroundLabel}](${playgroundBadgeUrl})](${playgroundInvite})`

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                <img
                  src="/discord.svg"
                  alt="Discord Logo"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-bold">Discord Badge</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://rohan-sharma-portfolio.vercel.app/"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 hidden sm:block"
              >
                Dev Portfolio
              </Link>
              <Link href="/blog" target="_blank" className="text-slate-600 hover:text-slate-900 hidden sm:block">
                Blog
              </Link>
              <Link href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge" className="text-slate-600 hover:text-slate-900">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="/documentation">
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="mb-12">
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Live Discord Member Count
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Add Live Discord Member Count to Your <span className="text-[#5865F2] block md:inline">README</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Generate beautiful, real-time Discord member count badges for your GitHub repositories. Easy setup,
                multiple badge types, and full customization options.
              </p>
            </div>

            {/* Guild ID and Invite Link Inputs */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your Discord Server ID"
                    value={guildId}
                    onChange={(e) => setGuildId(e.target.value)}
                    className="w-full h-14 text-lg px-6"
                  />
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <span>Server Settings → Engagement → Enable Server Widget</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Input
                    placeholder="Discord Invite Link (optional)"
                    value={inviteLink}
                    onChange={(e) => setInviteLink(e.target.value)}
                    className="w-full h-14 text-lg px-6"
                  />
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <span>Used for clickable badges (e.g., discord.gg/yourserver)</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  if (guildId) {
                    setShowBadges(true)
                    document.getElementById("badges")?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                disabled={!guildId}
                className="w-full md:w-auto h-14 px-12 text-lg bg-[#5865F2] hover:bg-[#4752C4]"
              >
                Generate Badges
              </Button>
            </div>

            {/* Bot Authorization */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-amber-800 mb-2 text-lg">First, add our bot to your server</h3>
                  <p className="text-amber-700 mb-4">
                    Our bot needs to be in your server to fetch member counts. Click the button below to authorize it.
                  </p>
                  <Link
                    href="https://discord.com/oauth2/authorize?client_id=1388440480102092860&permissions=1040&integration_type=0&scope=bot"
                    target="_blank"
                  >
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4] h-12 px-6">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Add Bot to Server
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badge Playground */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Palette className="w-3 h-3 mr-1" />
                Badge Playground
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Customize Your Badge</h2>
              <p className="text-slate-600 text-sm md:text-base">
                Try different styles, colors, and labels to see how your badge will look
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              {/* Controls */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                    <Settings className="w-5 h-5" />
                    <span>Customization Options</span>
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Adjust the appearance of your Discord badge
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {/* Badge Type */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Badge Type</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {badges.map((badge) => (
                        <Button
                          key={badge.endpoint}
                          variant={selectedEndpoint === badge.endpoint ? "default" : "outline"}
                          onClick={() => setSelectedEndpoint(badge.endpoint)}
                          className="justify-start text-sm h-10"
                        >
                          <div className={`w-4 h-4 ${badge.color} rounded mr-2 flex items-center justify-center`}>
                            {badge.icon}
                          </div>
                          {badge.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium flex items-center space-x-2">
                      <Type className="w-4 h-4" />
                      <span>Custom Label</span>
                    </Label>
                    <Input
                      value={playgroundLabel}
                      onChange={(e) => setPlaygroundLabel(e.target.value)}
                      placeholder="Enter custom label"
                      className="h-10"
                    />
                  </div>

                  {/* Color */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium flex items-center space-x-2">
                      <Palette className="w-4 h-4" />
                      <span>Badge Color</span>
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      {colorPresets.map((preset) => (
                        <Button
                          key={preset.value}
                          variant="outline"
                          size="sm"
                          onClick={() => setPlaygroundColor(preset.value)}
                          className="h-10 p-2 text-xs"
                          style={{
                            backgroundColor: playgroundColor === preset.value ? `#${preset.value}20` : undefined,
                            borderColor: playgroundColor === preset.value ? `#${preset.value}` : undefined,
                          }}
                        >
                          <div
                            className="w-3 h-3 rounded mr-1 flex-shrink-0"
                            style={{ backgroundColor: `#${preset.value}` }}
                          />
                          <span className="truncate">{preset.name}</span>
                        </Button>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-sm text-slate-500 mt-2 flex-shrink-0">#</span>
                      <Input
                        value={playgroundColor}
                        onChange={(e) => setPlaygroundColor(e.target.value.replace("#", ""))}
                        placeholder="Custom hex color"
                        className="flex-1 h-10"
                      />
                    </div>
                  </div>

                  {/* Scale */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium flex items-center space-x-2">
                      <Maximize className="w-4 h-4" />
                      <span>Scale: {playgroundScale[0]}x</span>
                    </Label>
                    <Slider
                      value={playgroundScale}
                      onValueChange={setPlaygroundScale}
                      max={3}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>0.5x</span>
                      <span>3x</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      <p>You can make the size up to 10x in the URL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">Live Preview</CardTitle>
                  <CardDescription className="text-sm md:text-base">See how your customized badge looks</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 space-y-4 md:space-y-6">
                  {/* Badge Preview */}
                  <div className="flex justify-center p-6 md:p-8 bg-slate-50 rounded-lg">
                    <img
                      key={playgroundBadgeUrl}
                      src={playgroundBadgeUrl || "/placeholder.svg"}
                      alt="Custom badge preview"
                      className="max-w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=20&width=120&text=Preview`
                      }}
                    />
                  </div>

                  {/* Generated URL */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Badge URL</Label>
                    <div className="relative">
                      <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                        <code className="break-all">{playgroundBadgeUrl}</code>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                        onClick={() => copyToClipboard(playgroundBadgeUrl, "playground-url")}
                      >
                        {copiedBadge === "playground-url" ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Markdown Code */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Markdown Code</Label>
                    <div className="relative">
                      <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                        <code className="break-all">{playgroundMarkdown}</code>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                        onClick={() => copyToClipboard(playgroundMarkdown, "playground-markdown")}
                      >
                        {copiedBadge === "playground-markdown" ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Parameters Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">Available Parameters</h4>
                    <ul className="text-xs md:text-sm text-blue-700 space-y-1">
                      <li>
                        • <code>color</code> - Hex color without # (e.g., 5865F2)
                      </li>
                      <li>
                        • <code>label</code> - Custom text label
                      </li>
                      <li>
                        • <code>scale</code> - Size multiplier (0.5 to 3.0)
                      </li>
                    </ul>
                  </div>

                  {/* Sticky Note */}
                  <div className="mt-auto text-xs text-slate-500 pt-4 border-t border-slate-200">
                    <p>
                      Sometimes, it takes some time to render. Either wait or embed the code directly in your README.
                      Also, if you're getting any errors, for bots and total members then ignore them and keep refreshing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Features */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#5865F2]/5 to-purple-500/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-3 h-3 mr-1" />
                Powerful Features
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Developers <span className="text-[#5865F2]">Love</span> Discord Badge?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Built by developers, for developers. Our badge service combines reliability, performance, and ease of use
                to give you the best Discord integration experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#5865F2] to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#5865F2] mb-2">3</div>
                <div className="text-sm text-slate-600">Bades</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#5865F2] mb-2">{"~"}2-5s</div>
                <div className="text-sm text-slate-600">Rendering Time</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#5865F2] mb-2">Custom</div>
                <div className="text-sm text-slate-600">Optional Params Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#5865F2] mb-2">24/7</div>
                <div className="text-sm text-slate-600">Discord Live Stats</div>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Instructions */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Setup</h2>
              <p className="text-slate-600">Get your Discord badges up and running in minutes</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Add Bot to Your Server</h3>
                  <p className="text-slate-600">
                    Click the "Add Bot to Server" button above and authorize our bot with the required permissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Enable Server Widget</h3>
                  <p className="text-slate-600">
                    Go to Server Settings → Engagement → Enable Server Widget. This allows public access to member counts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Get Your Server ID</h3>
                  <p className="text-slate-600">
                    Copy your Server ID from the Server Widget settings and paste it in the input field above.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Copy & Paste</h3>
                  <p className="text-slate-600">
                    Generate your badges, copy the markdown code, and paste it into your README file.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Example */}
        <section id="documentation" className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-pink-100">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                <Activity className="w-4 h-4 mr-2" />
                Live Demo
              </Badge>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-900 mb-6">See it in Action</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Click on each badge type to see the live demo and copy the code for your README
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "discord-members",
                  label: "Discord Members",
                  description: "Human members only - excludes bots from the count",
                  icon: <Users className="w-6 h-6" />,
                  color: "bg-blue-500",
                  guildId: "1179245642770559067",
                  invite: "bphreFK4NJ",
                },
                {
                  type: "discord-total",
                  label: "Discord Total Members",
                  description: "Total members with detailed breakdown of users and bots",
                  icon: <Activity className="w-6 h-6" />,
                  color: "bg-purple-500",
                  guildId: "1179245642770559067",
                  invite: "bphreFK4NJ",
                },
                {
                  type: "discord-bots",
                  label: "Discord Bots",
                  description: "Bot members only - shows only automated accounts",
                  icon: <Bot className="w-6 h-6" />,
                  color: "bg-green-500",
                  guildId: "1179245642770559067",
                  invite: "bphreFK4NJ",
                },
              ].map((demo, index) => {
                const demoUrl = `https://discord-live-members-count-badge.vercel.app/api/${demo.type}?guildId=${demo.guildId}`
                const demoCode = `[![${demo.label.toLowerCase()}](${demoUrl})](https://discord.gg/${demo.invite})`

                return (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-[#5865F2]/20 h-full"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`w-12 h-12 ${demo.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        >
                          {demo.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl text-left">{demo.label}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-left text-base leading-relaxed min-h-[3rem] flex items-center">
                        {demo.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Live Badge */}
                      <div className="flex justify-center p-6 bg-slate-50 rounded-xl">
                        <img
                          src={demoUrl || "/placeholder.svg"}
                          alt={`${demo.label} badge`}
                          className="h-6 md:h-8"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=32&width=160&text=${demo.label}`
                          }}
                        />
                      </div>

                      {/* Code */}
                      <div className="relative">
                        <div className="bg-slate-900 text-slate-100 p-4 md:p-6 rounded-xl text-sm md:text-base font-mono overflow-x-auto min-h-[120px] flex items-center">
                          <code className="break-all">{demoCode}</code>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-3 right-3 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                          onClick={() => copyToClipboard(demoCode, `demo-${index}`)}
                        >
                          {copiedBadge === `demo-${index}` ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        <Analytics />
      </div>
    </>
  )
}
