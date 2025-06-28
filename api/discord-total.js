const axios = require('axios');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const guildId = req.query.guildId;
  const token = process.env.DISCORD_BOT_TOKEN;

  if (!guildId || !token) {
    return res.redirect('https://img.shields.io/badge/Discord-error-red?logo=discord&style=for-the-badge');
  }

  try {
    let after = '0';
    let members = [];
    let hasMore = true;

    while (hasMore) {
      const response = await axios.get(`https://discord.com/api/v10/guilds/${guildId}/members`, {
        headers: { Authorization: `Bot ${token}` },
        params: { limit: 1000, after },
      });

      members.push(...response.data);
      if (response.data.length < 1000) hasMore = false;
      else after = response.data.at(-1).user.id;
    }

    const bots = members.filter(m => m.user.bot).length;
    const users = members.length - bots;
    const badgeURL = `https://img.shields.io/badge/Discord-${encodeURIComponent(`${users}+${bots}`)}-7289DA?logo=discord&logoColor=white&style=for-the-badge`;

    return res.redirect(badgeURL);
  } catch (e) {
    console.error(e.message || e);
    return res.redirect('https://img.shields.io/badge/Discord-error-red?logo=discord&style=for-the-badge');
  }
}
