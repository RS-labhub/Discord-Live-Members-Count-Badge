"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Code,
  Copy,
  ExternalLink,
  Zap,
  Users,
  Bot,
  Activity,
  CheckCircle,
  GitBranch,
  Server,
  ArrowLeft,
  Settings,
  Shield,
  Github,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';
import Footer from "@/components/footer"

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState("")

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const endpoints = [
    {
      path: "/api/discord-members",
      description: "Returns human members count only",
      icon: <Users className="w-4 h-4" />,
      color: "bg-blue-500",
      example: "https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=1179245642770559067",
    },
    {
      path: "/api/discord-bots",
      description: "Returns bot members count only",
      icon: <Bot className="w-4 h-4" />,
      color: "bg-green-500",
      example: "https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=1179245642770559067",
    },
    {
      path: "/api/discord-total",
      description: "Returns total count with breakdown",
      icon: <Activity className="w-4 h-4" />,
      color: "bg-purple-500",
      example: "https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=1179245642770559067",
    },
  ]

  const deploymentOptions = [
    {
      name: "Vercel",
      description: "Deploy with one click to Vercel",
      icon: "▲",
      color: "bg-black",
      url: "https://vercel.com/new/clone",
    },
    {
      name: "Railway",
      description: "Deploy to Railway with ease",
      icon: "🚂",
      color: "bg-purple-600",
      url: "https://railway.app",
    },
    {
      name: "Render",
      description: "Free hosting on Render",
      icon: "🎨",
      color: "bg-green-600",
      url: "https://render.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                  <img
                    src="/discord.svg"
                    alt="Discord Logo"
                    className="w-3 h-3 md:w-5 md:h-5"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Discord Badge</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link
                href="https://rohan-sharma-portfolio.vercel.app/"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 hidden md:block text-sm"
              >
                Dev Portfolio
              </Link>
              <Link href="https://dev.to/rohan_sharma/heres-how-i-created-a-real-time-discord-badge-for-github-readme-4adg" target="_blank" className="text-slate-600 hover:text-slate-900 hidden md:block text-sm">
                Blog
              </Link>
              <Link href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge" className="text-slate-600 hover:text-slate-900">
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-2">
            <Code className="w-3 h-3 mr-1" />
            Documentation
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
            Discord Badge <span className="text-[#5865F2]">API Documentation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Complete guide to integrating live Discord member count badges into your projects
          </p>
        </div>

        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="quickstart" className="text-xs md:text-sm px-2 py-2">
              Quick Start
            </TabsTrigger>
            <TabsTrigger value="setup" className="text-xs md:text-sm px-2 py-2">
              Setup Guide
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="text-xs md:text-sm px-2 py-2">
              API Reference
            </TabsTrigger>
            <TabsTrigger value="examples" className="text-xs md:text-sm px-2 py-2">
              Examples
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-2xl">
                  <Zap className="w-6 h-6 text-[#5865F2]" />
                  <span>Getting Started</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Get your Discord badges up and running in under 5 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4">
                  <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">Add Bot to Your Server</h3>
                    <p className="text-slate-600 mb-3 text-sm md:text-base">
                      Invite our bot to your Discord server with the required permissions.
                    </p>
                    <Link
                      href="https://discord.com/oauth2/authorize?client_id=1388440480102092860&permissions=1040&integration_type=0&scope=bot"
                      target="_blank"
                    >
                      <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752C4] w-full md:w-auto">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Add Bot
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4">
                  <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">Enable Server Widget</h3>
                    <p className="text-slate-600 text-sm md:text-base">
                      Go to Server Settings → Engagement → Enable Server Widget to allow public member count access.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4">
                  <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">Copy Your Server ID</h3>
                    <p className="text-slate-600 mb-3 text-sm md:text-base">
                      Find your Server ID in the Server Widget settings and use it in the badge URLs.
                    </p>
                    <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs md:text-sm font-mono relative overflow-x-auto">
                      <code className="break-all">
                        {`[![Discord](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                        onClick={() =>
                          copyToClipboard(
                            `[![Discord](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`,
                            "quickstart",
                          )
                        }
                      >
                        {copiedCode === "quickstart" ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-2xl">
                  <Settings className="w-5 h-5 text-[#5865F2]" />
                  <span>Detailed Setup Guide</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Step-by-step instructions with screenshots
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8">
                {/* Step 1: Bot Authorization */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">1. Add Bot to Your Discord Server</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Click the authorization link and select your server to add our bot.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Image
                      src="/auth.png?height=300&width=500&text=Discord Bot Authorization Screenshot"
                      alt="Discord bot authorization"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="mx-auto rounded-lg border h-auto w-auto"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-3">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Required Permissions</h4>
                        <ul className="text-sm text-blue-700 mt-1 space-y-1">
                          <li>• View Channels </li>
                          <li>• Manage Channels </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Enable Server Widget */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">2. Enable Server Widget</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Navigate to your server settings and enable the server widget to allow public access to member
                    counts.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm md:text-base">Step 2.1: Open Server Settings</h4>
                      <img
                        src="/settings.png?height=200&width=300&text=Server Settings Menu"
                        alt="Server settings menu"
                        className="w-full rounded-lg border"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm md:text-base">Step 2.2: Navigate to Engagement</h4>
                      <Image
                        src="/engagement.png?height=200&width=300&text=Engagement Settings"
                        alt="Engagement settings"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full rounded-lg border h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm md:text-base">Step 2.3: Enable Server Widget</h4>
                    <Image
                      src="/widget.png?height=250&width=600&text=Server Widget Toggle"
                      alt="Server widget toggle"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full max-w-2xl rounded-lg border h-auto"
                    />
                  </div>
                </div>

                {/* Step 3: Get Server ID */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">3. Copy Your Server ID</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Once the server widget is enabled, you can copy your Server ID from the widget settings.
                  </p>
                  <Image
                    src="/serverID.png?height=200&width=500&text=Server ID Location"
                    alt="Server ID location"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-lg rounded-lg border h-auto"
                  />
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800">Pro Tip</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Your Server ID is a long number (usually 18-19 digits). Make sure to copy the entire ID
                          without any spaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <div className="grid gap-6">
              {endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                      <div
                        className={`w-8 h-8 ${endpoint.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {endpoint.icon}
                      </div>
                      <code className="text-sm md:text-lg break-all">{endpoint.path}</code>
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">{endpoint.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Parameters</h4>
                      <div className="bg-slate-50 p-3 rounded-lg space-y-2">
                        <div>
                          <code className="text-xs md:text-sm break-all">
                            <span className="text-blue-600">guildId</span>
                            <span className="text-slate-500"> (required)</span> - Your Discord server ID
                          </code>
                        </div>
                        <div>
                          <code className="text-xs md:text-sm break-all">
                            <span className="text-green-600">color</span>
                            <span className="text-slate-500"> (optional)</span> - Hex color without # (default: 7289DA)
                          </code>
                        </div>
                        <div>
                          <code className="text-xs md:text-sm break-all">
                            <span className="text-green-600">label</span>
                            <span className="text-slate-500"> (optional)</span> - Custom text label (default: varies by
                            endpoint)
                          </code>
                        </div>
                        <div>
                          <code className="text-xs md:text-sm break-all">
                            <span className="text-green-600">scale</span>
                            <span className="text-slate-500"> (optional)</span> - Size multiplier from 0.5 to 3.0
                            (default: 1)
                          </code>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Example URL</h4>
                      <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs md:text-sm font-mono relative overflow-x-auto">
                        <code className="break-all">{endpoint.example}</code>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                          onClick={() => copyToClipboard(endpoint.example, `endpoint-${index}`)}
                        >
                          {copiedCode === `endpoint-${index}` ? (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Live Preview</h4>
                      <div className="flex justify-center p-4 bg-slate-50 rounded-lg">
                        <img
                          src={endpoint.example || "/placeholder.svg"}
                          alt={`${endpoint.path} badge`}
                          className="h-5"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Response Format</h4>
                      <div className="bg-slate-50 p-3 rounded-lg text-sm">
                        <ul className="space-y-1 text-slate-600">
                          <li>
                            • <strong>Format:</strong> SVG image
                          </li>
                          <li>
                            • <strong>Cache:</strong> 5 minutes
                          </li>
                          <li>
                            • <strong>Content-Type:</strong> image/svg+xml
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                  <Server className="w-5 h-5 text-[#5865F2]" />
                  <span>Self-Hosting Options</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Deploy your own instance of the Discord Badge API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {deploymentOptions.map((option, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-6">
                        <div
                          className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center text-white text-xl mx-auto mb-4`}
                        >
                          {option.icon}
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{option.name}</h3>
                        <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Deploy
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Environment Variables</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Required configuration for self-hosting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-xs md:text-sm">DISCORD_BOT_TOKEN=your_bot_token_here</code>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Creating Your Own Bot</h4>
                  <ol className="text-sm text-amber-700 space-y-1">
                    <li>1. Go to Discord Developer Portal</li>
                    <li>2. Create a new application</li>
                    <li>3. Navigate to the Bot section</li>
                    <li>4. Create a bot and copy the token</li>
                    <li>5. Add the token to your environment variables</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                  <GitBranch className="w-5 h-5 text-[#5865F2]" />
                  <span>README Examples</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Copy-paste examples for your GitHub README
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Basic Usage</h3>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm font-mono relative overflow-x-auto">
                    <code className="break-all">
                      {`[![Discord](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `[![Discord](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`,
                          "basic",
                        )
                      }
                    >
                      {copiedCode === "basic" ? (
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Multiple Badges</h3>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm font-mono relative overflow-x-auto">
                    <code className="break-all whitespace-pre-wrap">
                      {`[![Discord Members](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)
[![Discord Bots](https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)
[![Discord Total](https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `[![Discord Members](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)
[![Discord Bots](https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)
[![Discord Total](https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)`,
                          "multiple",
                        )
                      }
                    >
                      {copiedCode === "multiple" ? (
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Customized Badges</h3>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm font-mono relative overflow-x-auto">
                    <code className="break-all whitespace-pre-wrap">
                      {`<!-- Green badge with custom label -->
[![Users](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID&color=27ae60&label=Users&scale=1.2)](https://discord.gg/your-invite)

<!-- Red bot count with larger scale -->
[![Bots](https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=YOUR_GUILD_ID&color=e74c3c&label=Bots&scale=1.5)](https://discord.gg/your-invite)

<!-- Purple total with custom styling -->
[![Total](https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=YOUR_GUILD_ID&color=9b59b6&label=Community&scale=0.8)](https://discord.gg/your-invite)`}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600 h-8 w-8 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `<!-- Green badge with custom label -->
[![Users](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=YOUR_GUILD_ID&color=27ae60&label=Users&scale=1.2)](https://discord.gg/your-invite)

<!-- Red bot count with larger scale -->
[![Bots](https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=YOUR_GUILD_ID&color=e74c3c&label=Bots&scale=1.5)](https://discord.gg/your-invite)

<!-- Purple total with custom styling -->
[![Total](https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=YOUR_GUILD_ID&color=9b59b6&label=Community&scale=0.8)](https://discord.gg/your-invite)`,
                          "customized",
                        )
                      }
                    >
                      {copiedCode === "customized" ? (
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Advanced README Layout</h3>
                  <div className="bg-slate-50 p-4 md:p-6 rounded-lg">
                    <div className="space-y-4">
                      <h4 className="text-lg md:text-xl font-bold">🚀 My Awesome Discord Server</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=1179245642770559067"
                          alt="Discord members"
                          className="h-5"
                        />
                        <img
                          src="https://discord-live-members-count-badge.vercel.app/api/discord-bots?guildId=1179245642770559067"
                          alt="Discord bots"
                          className="h-5"
                        />
                        <img
                          src="https://discord-live-members-count-badge.vercel.app/api/discord-total?guildId=1179245642770559067"
                          alt="Discord total"
                          className="h-5"
                        />
                      </div>
                      <p className="text-slate-600">Join our community and connect with other developers!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
