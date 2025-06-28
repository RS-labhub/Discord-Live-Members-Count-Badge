const fetchAllMembers = require('../utils/fetchAllMembers');

module.exports = async (req, res) => {
    const guildId = req.query.guildId;
    if (!guildId) return res.status(400).json({ error: 'Missing guildId param' });

    try {
        const members = await fetchAllMembers(guildId);
        const botCount = members.filter((m) => m.user.bot).length;
        const humanCount = members.length - botCount;

        return res.json({
            schemaVersion: 1,
            label: 'Total Members',
            message: `${humanCount} users, ${botCount} bots`,
            color: 'blue',
            logo: 'discord',
        });
    } catch (err) {
        console.error(err);
        return res.json({
            schemaVersion: 1,
            label: 'Total Members',
            message: 'error',
            color: 'red',
        });
    }
};
