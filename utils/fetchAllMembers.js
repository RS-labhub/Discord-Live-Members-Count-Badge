const axios = require('axios');
const Redis = require('ioredis');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const redis = new Redis(process.env.REDIS_URL);

const CACHE_TTL = 900;

const fetchAllMembers = async (guildId) => {
  const cacheKey = `guild:${guildId}:members`;
  const cached = await redis.get(cacheKey);

  if (cached) {
    console.log(`Cache hit for guild ${guildId}`);
    return JSON.parse(cached);
  }

  console.log(`Cache miss for guild ${guildId}, fetching from Discord API...`);

  let after = '0';
  let members = [];
  let keepFetching = true;

  while (keepFetching) {
    try {
      const res = await axios.get(
        `https://discord.com/api/v10/guilds/${guildId}/members`,
        {
          headers: {
            Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
          },
          params: {
            limit: 1000,
            after,
          },
        }
      );

      const batch = res.data;
      members = members.concat(batch);

      if (batch.length < 1000) {
        keepFetching = false;
      } else {
        after = batch[batch.length - 1].user.id;
        await new Promise((r) => setTimeout(r, 100));
      }
    } catch (err) {
      if (err.response?.status === 429) {
        const retryAfter = err.response.data?.retry_after || 1;
        console.warn(`Rate limited. Retrying after ${retryAfter} seconds...`);
        await new Promise((r) => setTimeout(r, retryAfter * 1000));
        continue;
      }

      throw err;
    }
  }

  // Cache result
  await redis.set(cacheKey, JSON.stringify(members), 'EX', CACHE_TTL);

  return members;
};

module.exports = fetchAllMembers;
