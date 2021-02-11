const { PREFIX } = require("../../config.json");

module.exports = (bot) => {
    let i = 0;

    setInterval(() => {
        let activities = [
            `${PREFIX}help`,
            `${bot.guilds.cache.reduce((num, guild) => num + guild.memberCount, 0)} users`
        ]

        bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: "WATCHING"
        })
    }, 10000);
}