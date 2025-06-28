const axios = require('axios');

module.exports = async (req, res) => {
  const { makeBadge } = await import('badge-maker');

  const guildId = req.query.guildId;
  if (!guildId) return res.status(400).send('Missing guildId');

  const discordLogoBase64 =
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuMTQgOTYuMzYiPjxwYXRoIGZpbGw9IiM3Mjg5REEiIGQ9Ik0xMDcuMjgsOC41QTEwNS45NCwxMDUuOTQsMCwwLDAsODEuMzMsMGE3My4xOSw3My4xOSwwLDAsMC0zLjU4LDcuMzEsOTkuMjQsOTkuMjQsMCwwLDAsMjguNiwxMC44Niw3My40OCw3My40OCwwLDAsMCw0NC44LDBBMSwxLDAwLDAsMCw0NC44LDBBMSwxLDAsMCwwLDE4Ljg2LDguNUExMTAuNDUsMTEwLjQ1LDAsMCwwLDAsODYuNDdB MTA2LjM4LDEwNi4zOCwwLDAsMCwzMiw5Ljg5QTc3Ljc4LDc3Ljc4LDAsMCwwLDM5LDg2LjU4YTY3Ljg1LDY3Ljg1LDAsMCwxLTExLTUuMjdjLjkzLS42OCwxLjgyLTEuMzksMi42Ni0yLjE0YTcwLjQsNzAuNCwwLDAsMCw2MS44NywwYy44Ni43NSwxLjc1LDEuNDYsMi42NiwyLjE0YT Y3LjgxLDY3LjgxLDAsMCwxLTExLDUuMjdBNzc uNzYsNzcuNzYsMCwwLDAsNjAsODYuMzZhMTA2LjI1LDEwNi4yNSwwLDAsMCwzMi05Ljg5QTEwLjQ3LDExMC40NywwLDAsMCwxMDcuMjgsOC41Wk00Mi40NSw2NS40NGMtNi4yNSwwLTExLjM0LTUuNzEtMTEuMzQtMTIuNzRTMzYuMi wzOS45Niw0Mi40NSwzOS45NnMxMS4zNCw1LjcxLDExLjM0LDEyLjc0UzQ4LjcsNjUuNDQsNDIuNDUsNjUuNDRaTTg0LjY5LDY1LjQ0Yy02LjI1LDAtMTEuMzQtNS43MS0xMS4zNC0xMi43NFM3OC40NCwzOS45Niw4NC42OSwzOS45NnMxMS4zNCw1LjcxLDExLjM0LDEyLjc0UzkwLjk0LDY1LjQ0LDg0LjY5LDY1LjQ0WiIvPjwvc3ZnPg==';

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
    res.setHeader('Cache-Control', 'public, max-age=300');
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
