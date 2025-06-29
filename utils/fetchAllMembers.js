const axios = require('axios');
const Redis = require('ioredis');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const REDIS_URL = process.env.REDIS_URL;
const CACHE_TTL = parseInt(process.env.CACHE_TTL || '300');

let redis;
try {
  redis = new Redis(REDIS_URL, {
    maxRetriesPerRequest: 2,
    connectTimeout: 3000,
  });

  redis.on('error', (err) => {
    console.warn('[Redis] Connection error:', err.message);
  });
} catch (err) {
  console.warn('[Redis] Failed to initialize:', err.message);
  redis = null;
}

const fetchAllMembers = async (guildId) => {
  const cacheKey = `guild:${guildId}:members`;

  // Try fetching from Redis cache first
  if (redis) {
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        console.log(`[Cache] HIT for ${guildId}`);
        return JSON.parse(cached);
      } else {
        console.log(`[Cache] MISS for ${guildId}`);
      }
    } catch (err) {
      console.warn(`[Cache] Redis error on GET: ${err.message}`);
    }
  }

  console.log(`[Discord API] Fetching members for guild ${guildId}...`);
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
        await new Promise((r) => setTimeout(r, 100)); // Small delay to respect rate limits
      }
    } catch (err) {
      if (err.response?.status === 429) {
        const retryAfter = err.response.data?.retry_after || 1;
        console.warn(`[Rate Limit] Retrying in ${retryAfter} seconds...`);
        await new Promise((r) => setTimeout(r, retryAfter * 1000));
        continue;
      }

      console.error('[Discord API] Error fetching members:', err.message);
      throw err;
    }
  }

  // Try to cache the result
  if (redis) {
    try {
      await redis.set(cacheKey, JSON.stringify(members), 'EX', CACHE_TTL);
      console.log(`[Cache] SET key ${cacheKey} (TTL ${CACHE_TTL}s)`);
    } catch (err) {
      console.warn(`[Cache] Redis error on SET: ${err.message}`);
    }
  }

  return members;
};

module.exports = fetchAllMembers;
