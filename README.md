# Discord Live Members Count Bot For GitHub Readme Badge

This is a simple Node.js-based API that allows you to show live member statistics of your Discord server directly in your GitHub README using Shields.io badges.

It supports:

* Total members (users + bots)
* Human members only
* Bot members only

## Features

* Uses the Discord API with full pagination to fetch all server members
* Separates human users and bots for more granular badges
* Outputs Shields.io-compatible JSON endpoints
* Easily deployable to platforms like Vercel, Render, or Railway

## API Endpoints

All endpoints return badge-compatible JSON in Shields.io's `schemaVersion: 1` format.

### `/discord-members`

Returns the number of human (non-bot) members.

[![members](https://sturdy-engine-56qwx6rg65j3v9gx-3000.app.github.dev/api/discord-members?guildId=1179245642770559067)](https://discord.gg/MhZn5Nc39h)


### `/discord-bots`

Returns the number of bot accounts in the server.

[![bots](https://img.shields.io/endpoint?url=https://discord-live-members-count-bot.vercel.app/api/discord-bots?guildId=1179245642770559067)](https://discord.gg/YOUR_INVITE)


### `/discord-total`

Returns both human and bot counts in a single badge.

[![total](https://img.shields.io/endpoint?url=https://discord-live-members-count-bot.vercel.app/api/discord-total?guildId=1179245642770559067)](https://discord.gg/YOUR_INVITE)


## Shields.io Badge Usage

Embed the following in your GitHub README:

```md
[![Users](https://img.shields.io/endpoint?url=https://your-domain.com/discord-members)](https://discord.gg/yourinvite)
[![Bots](https://img.shields.io/endpoint?url=https://your-domain.com/discord-bots)](https://discord.gg/yourinvite)
[![Total Members](https://img.shields.io/endpoint?url=https://your-domain.com/discord-total)](https://discord.gg/yourinvite)
```

Replace:

* `your-domain.com` with your actual deployed backend URL
* `yourinvite` with your Discord server invite code

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

## Setup Instructions

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```env
DISCORD_BOT_TOKEN=your_discord_bot_token
GUILD_ID=your_discord_server_id
```

4. Start the server locally:

```bash
node index.js
```

## Deployment

You can deploy this server to any Node.js-compatible hosting service. Common options include:

* [Vercel](https://vercel.com/)
* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Glitch](https://glitch.com/)

Make sure to add the required environment variables during setup.

## License

MIT License
