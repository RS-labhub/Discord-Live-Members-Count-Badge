const axios = require('axios');

module.exports = async (req, res) => {
  const { makeBadge } = await import('badge-maker');

  const guildId = req.query.guildId;
  if (!guildId) return res.status(400).send('Missing guildId');

  try {
    const r = await axios.get(
      `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      }
    );

    const svg = makeBadge({
      label: 'Members',
      message: `${r.data.approximate_member_count}`,
      color: '7289DA',
      logo: 'discord',
      labelColor: '555',
      style: 'flat'
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.send(svg);
  } catch (err) {
    console.error(err);

    const errorSvg = makeBadge({
      label: 'Members',
      message: 'error',
      color: 'red',
      logo: 'discord',
      style: 'flat'
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.send(errorSvg);
  }
};
