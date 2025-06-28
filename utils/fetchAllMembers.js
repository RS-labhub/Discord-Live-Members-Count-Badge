const axios = require('axios');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const fetchAllMembers = async (guildId) => {
    let after = '0';
    let members = [];
    let keepFetching = true;

    while (keepFetching) {
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
        }
    }

    return members;
};

module.exports = fetchAllMembers;
