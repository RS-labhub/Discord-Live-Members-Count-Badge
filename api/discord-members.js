const fetchAllMembers = require('../utils/fetchAllMembers');

module.exports = async (req, res) => {
    const guildId = req.query.guildId;
    if (!guildId) return res.status(400).json({ error: 'Missing guildId param' });

    try {
        const members = await fetchAllMembers(guildId);
        const humanCount = members.filter((m) => !m.user.bot).length;

        return res.json({
            schemaVersion: 1,
            label: 'Discord Members',
            message: `${humanCount}`,
            color: '7289DA',
            logo: 'discord',
        });
    } catch (err) {
        console.error(err);
        return res.json({
            schemaVersion: 1,
            label: 'Discord Members',
            message: 'error',
            color: 'red',
        });
    }
};
