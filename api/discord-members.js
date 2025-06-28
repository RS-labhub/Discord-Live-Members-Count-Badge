const axios = require('axios');

module.exports = async (req, res) => {
  const { makeBadge } = await import('badge-maker');

  const guildId = req.query.guildId;
  if (!guildId) return res.status(400).send('Missing guildId');

  // Discord logo (white on transparent background, base64 encoded SVG)
  const discordLogoBase64 =
    'PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNNDIuOTM1IDQwLjI0NmMtMi4zNjcgMS4xMTUtNC44ODIgMi4wMDUtNy41ODIgMi42MTEtMS4xNzYuMDI3LTEuNjE3LTEuNTQyLTEuNjE3LTEuNTQycy4yMTUtMS4yMTUgLjQwMy0yLjA2MWMyLjg3NC0uNjQ0IDUuNDEtMS41NDUgNy43OC0yLjY2NSAxLjA5My0uNTQxIDIuMDYxLS45NzkgMi44OS0xLjQzLjA3MSAxLjM1LjExIDIuNjk4LjExIDQuMDUxIDAgLjQyMi0uMDI2Ljg0My0uMDcyIDEuMjU3LS42OTkuMzY2LTEuNDY1LjcwNi0yLjI5OCAxLjAyNnoiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjI3LjQzOSIgcj0iMi4yNSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iMjcuNDM5IiByPSIyLjI1Ii8+PHBhdGggZD0iTTMyIDRjMTUuNDY5IDAgMjggMTIuNTMxIDI4IDI4UzQ3LjQ2OSw2MCAzMiw2MCA0LDQ3LjQ2OSA0LDMyUzE2LjUzMSw0IDMyLDRaIiBmaWxsPSJub25lIi8+PC9nPjwvc3ZnPg==';

  try {
    const r = await axios.get(
      `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );

    const svg = makeBadge({
      label: 'Members',
      message: `${r.data.approximate_member_count}`,
      color: '7289DA',
      labelColor: '555',
      style: 'flat',
      logoBase64: `data:image/svg+xml;base64,${discordLogoBase64}`,
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=300'); // cache for 5 mins
    res.send(svg);
  } catch (err) {
    console.error(err);

    const errorSvg = makeBadge({
      label: 'Members',
      message: 'error',
      color: 'red',
      style: 'flat',
      logoBase64: `data:image/svg+xml;base64,${discordLogoBase64}`,
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.send(errorSvg);
  }
};
