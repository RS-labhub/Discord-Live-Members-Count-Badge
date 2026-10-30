![banner](https://raw.githubusercontent.com/RS-labhub/Discord-Live-Members-Count-Badge/master/public/og-image.png)

# 🎯 Discord Live Members Count Badge

**Add beautiful, real-time Discord member count badges to your GitHub README**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Site](https://img.shields.io/badge/Live-Site-brightgreen.svg)](https://discord-live-members-count-badge.vercel.app)
[![Portfolio](https://img.shields.io/badge/Portfolio-Rohan_Sharma-blueviolet.svg)](https://rohan-sharma-portfolio.vercel.app)


## ✨ Features

- **🔄 Real-time Updates** - Live member count with smart caching (5-minute intervals)
- **👥 Multiple Badge Types** - Total members, human-only, or bot-only counts
- **🛡️ Safe & Secure** - Uses Discord API's `with_counts=true` for public access
- **⚡ Serverless Ready** - Deploy to Vercel, Railway, Render, or any platform
- **🎨 Fully Customizable** - Custom colors, labels, and scaling options
- **📱 Mobile Responsive** - Optimized playground interface for all devices
- **📦 Zero Config** - Just add your bot and start using

## 🎬 Project Showcase

| Preview             | Description        |
|---------------------|--------------------|
| [![YouTube Demo](https://raw.githubusercontent.com/RS-labhub/Discord-Live-Members-Count-Badge/master/public/thumbnail.png)](https://youtu.be/jSLE3u_2vag) | 🎬 **YouTube Demo**<br>Click the image to watch the full demo. |
| [![Blog Post](https://raw.githubusercontent.com/RS-labhub/Discord-Live-Members-Count-Badge/master/public/blogCover.png)](https://dev.to/rohan_sharma/heres-how-i-created-a-real-time-discord-badge-for-github-readme-4adg) | 📝 **Blog Post**<br>Read the blog for in-depth explanation. |

## 🚀 Quick Start

### 1. Add Bot to Your Server

First, invite our bot to your Discord server:

[**🤖 Add Bot to Server**](https://discord.com/oauth2/authorize?client_id=1388440480102092860&permissions=1040&integration_type=0&scope=bot)

### 2. Enable Server Widget

1. Go to your Discord server
2. Navigate to **Server Settings** → **Engagement**
3. Enable **Server Widget**
4. Copy your **Server ID**

Or follow this [documentation](https://discord-live-members-count-badge.vercel.app/documentation)

### 3. Use the Badges

Replace `YOUR_GUILD_ID` with your actual Discord server ID:

```markdown
<!- All members -->
[![Discord Members](https://live-members-count.rohansrma.me/api/discord-members?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)

<!-- Bot members only -->
[![Discord Bots](https://live-members-count.rohansrma.me/api/discord-bots?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)

<!-- Total members (users + bots) -->
[![Discord Total](https://live-members-count.rohansrma.me/api/discord-total?guildId=YOUR_GUILD_ID)](https://discord.gg/your-invite)
```

## 🎨 Customization Options

All endpoints support optional parameters for full customization:

### Available Parameters

- **`color`** (optional) - Hex color without # (default: 5865F2)
- **`label`** (optional) - Custom text label (default: varies by endpoint)
- **`scale`** (optional) - Size multiplier from 0.5 to 10.0 (default: 1)

### Customized Examples

```markdown
<!-- Green badge with custom label and larger scale -->
[![Users](https://live-members-count.rohansrma.me/api/discord-members?guildId=YOUR_GUILD_ID&color=27ae60&label=Users&scale=1.2)](https://discord.gg/your-invite)

<!-- Red bot count with custom styling -->
[![Bots](https://live-members-count.rohansrma.me/api/discord-bots?guildId=YOUR_GUILD_ID&color=e74c3c&label=Bots&scale=1.5)](https://discord.gg/your-invite)

<!-- Purple total with community branding -->
[![Community](https://live-members-count.rohansrma.me/api/discord-total?guildId=YOUR_GUILD_ID&color=9b59b6&label=Community&scale=0.8)](https://discord.gg/your-invite)
```

## 📊 API Endpoints

| Endpoint | Description | Default Label | Example |
|----------|-------------|---------------|---------|
| `/api/discord-members` | All members | "Members" | [![members](https://live-members-count.rohansrma.me/api/discord-members?guildId=1179245642770559067)](https://discord.gg/bphreFK4NJ) |
| `/api/discord-bots` | Bot members only | "Bots" | [![bots](https://live-members-count.rohansrma.me/api/discord-bots?guildId=1179245642770559067)](https://discord.gg/bphreFK4NJ) |
| `/api/discord-total` | Total members with breakdown | "Total Users" | [![total members](https://live-members-count.rohansrma.me/api/discord-total?guildId=1179245642770559067)](https://discord.gg/bphreFK4NJ) |

### Parameters

- **`guildId`** or **`serverId`** (required) - Your Discord server ID
- **`color`** (optional) - Hex color without # (e.g., 5865F2, 27ae60, e74c3c)
- **`label`** (optional) - Custom text label (e.g., "Users", "Community", "Members")
- **`scale`** (optional) - Size multiplier from 0.5 to 10.0 (e.g., 1.2, 0.8, 2.0)
- **Response Format** - SVG badge image
- **Cache Duration** - 5 minutes for optimal performance

## 🎮 Interactive Playground

Visit our [Badge Playground](https://live-members-count.rohansrma.me/) to:

- **🎨 Customize Colors** - Choose from presets or use custom hex colors
- **📝 Edit Labels** - Create custom text for your badges
- **📏 Adjust Scale** - Resize badges from 0.5x to 3x (up to 10x in URL)
- **📱 Mobile Friendly** - Fully responsive design for all devices
- **⚡ Live Preview** - See changes in real-time
- **📋 Copy & Paste** - Get ready-to-use markdown code

## Server Widget JSON API (for Online Members Only)
Discord provides a public widget API that exposes limited server data like online member count:

```
https://discord.com/api/guilds/YOUR_GUILD_ID/widget.json
```

Example (for a server with ID `117924XXXXXX0559067`):

```
https://discord.com/api/guilds/117924XXXXXX0559067/widget.json
```

This API is useful for basic stats and online presence but **only returns currently online users**, not the full member list.

To enable this:

1. Open your Discord server settings
2. Go to the **Widget** section
3. Toggle on **Enable Server Widget**

Note: this API is public and does not require authentication.

[![Only Online Members](https://img.shields.io/discord/1179245642770559067?logo=discord&logoColor=%23FFFFFF&label=Only%20Online%20Members&color=%236963ff)](https://discord.gg/MhZn5Nc39h)

```md
[![Only Online Members](https://img.shields.io/discord/YOUR_SERVER_ID?logo=discord&logoColor=%23FFFFFF&label=Only%20Online%20Members&color=%236963ff)](https://discord.gg/YOUR_INVITE_CODE)
```


## 🏗️ Project Structure

```
discord-live-members-badge/
├── app/
│   ├── api/
│   │   ├── discord-members/
│   │   │   └── route.js
│   │   ├── discord-bots/
│   │   │   └── route.js
│   │   └── discord-total/
│   │       └── route.js
│   ├── documentation/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx                 # Interactive playground
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   └── ui/                      # shadcn/ui components
├── lib/
├── utils/
│   └── fetchAllMembers.js       # Discord API utility
├── .env                         # Environment variables
└── ... (other config files)
```

## 🔧 Self-Hosting

### Prerequisites

- Node.js 18+ 
- Discord Bot Token
- Serverless platform account (Vercel, Railway, etc.)

### Environment Variables

Create a `.env` file:

```env
DISCORD_BOT_TOKEN=your_bot_token_here
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/discord-live-members-badge.git
cd discord-live-members-badge

# Install dependencies
npm install

# Set up environment variables
cp .env
# Add your DISCORD_BOT_TOKEN

# Start development server
npm run dev
```

### Testing

Test your badges locally:

```
http://localhost:3000/api/discord-members?guildId=YOUR_GUILD_ID&color=5865F2&label=Members&scale=1.2
```

## 🤖 Creating Your Own Bot

If you want to use your own Discord bot:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the **Bot** section
4. Create a bot and copy the token
5. Invite the bot to your server with these permissions:
   - View Channels
   - Manage Channels

### Bot Permissions

The bot needs minimal permissions:
- **View Channels** (1024)
- **Manage Channels** (16)

Total permission integer: `1040`

## 📈 Performance & Caching

- **Response Time**: < 500ms average
- **Cache Duration**: 5 minutes per guild
- **Rate Limiting**: Built-in Discord API rate limit handling
- **Uptime**: 99.9% availability
- **Mobile Optimized**: Responsive design for all devices

## 🎨 Color Presets

The playground includes these popular color presets:

- **Discord**: `5865F2` (Default Discord blue)
- **Green**: `27ae60` (Success/positive)
- **Blue**: `3498db` (Information)
- **Red**: `e74c3c` (Error/warning)
- **Orange**: `f39c12` (Warning)
- **Purple**: `9b59b6` (Creative)
- **Pink**: `e91e63` (Accent)
- **Teal**: `1abc9c` (Modern)

But yeah, you can add your custom color anytime.

## 📱 Mobile Responsiveness

The badge playground is fully optimized for mobile devices:

- **Responsive Grid**: Adapts to screen size (1 column on mobile, 2 on desktop)
- **Touch-Friendly**: Large buttons and inputs for mobile interaction
- **Optimized Layout**: Compact design for smaller screens
- **Readable Text**: Appropriate font sizes across devices

## 🛠️ Development

### API Response Format

All endpoints return SVG images with:
- **Content-Type**: `image/svg+xml`
- **Cache-Control**: `public, max-age=300` (5 minutes)
- **Error Handling**: Returns error badge on failure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/RS-labhub/Discord-Live-Members-Count-Badge/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- [badge-maker](https://www.npmjs.com/package/badge-maker) for beautiful badge generation
- [Discord for Developers](https://discord.com/developers) community for inspiration
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for responsive styling
- [LLMWare](https://llmware.ai) for allowing to show their Discord Server Stats.

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/RS-labhub/discord-live-members-badge/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/RS-labhub/discord-live-members-badge/discussions)
- 📧 **Email**: rs4101976@gmail.com
- 🌐 **Documentation**: [Live Documentation](https://live-members-count.rohansrma.me/documentation)

---

## Meet the Author

<img  src="https://raw.githubusercontent.com/RS-labhub/Radhika/master/public/Author.jpg" alt="Author">

<div align="center">

**Made with ❤️ by [Rohan Sharma](https://github.com/RS-labhub), driven by dreams of Radhika Sharma 🫰**

[⭐ Star this repo](https://github.com/RS-labhub/discord-live-members-badge) if you found it helpful!

</div>
