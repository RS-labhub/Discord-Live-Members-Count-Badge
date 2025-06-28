const axios = require('axios');
const { makeBadge } = require('badge-maker');

module.exports = async (req, res) => {
  const guildId = req.query.guildId;

  if (!guildId) {
    return res.status(400).send('Missing guildId');
  }

  try {
    const token = process.env.DISCORD_BOT_TOKEN;
    if (!token) throw new Error('Bot token missing');

    const r = await axios.get(
      `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${token}`
        }
      }
    );

    const count = r?.data?.approximate_member_count;
    if (!count || isNaN(count)) throw new Error('Invalid member count');

    const svg = makeBadge({
      label: 'Discord Members',
      message: `${count}`,
      color: '7289DA'
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    return res.send(svg);
  } catch (err) {
    console.error('Badge error:', err?.response?.data || err.message);

    const errorSvg = makeBadge({
      label: 'Discord Members',
      message: 'error',
      color: 'red'
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    return res.send(errorSvg);
  }
};
