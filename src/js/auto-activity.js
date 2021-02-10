const { PREFIX } = require("../config.json");

module.exports = (bot) => {
    let activities = [
        `${PREFIX}help`
    ]
    let i = 0;

    setInterval(() => bot.user.setActivity(`${activities[i++ %
    activities.length]}`, {
        type: "WATCHING"
    }), 3000);
}