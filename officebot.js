// Items
const activities = require("./src/js/items/activities");
// Auto functions
const autoActivity = require("./src/js/auto-functions/auto-activity");
const autoReadCommand = require("./src/js/auto-functions/auto-read-command");
const autoReadReactions = require("./src/js/auto-functions/auto-read-reactions");
// Main functions
const dontAllowBot = require("./src/js/main-functions/dont-allow-bot");
// Config
const { BOT_TOKEN} = require("./src/config.json");
const discord = require("discord.js");
const bot = new discord.Client();

bot.on('ready', () => {
    let allowed = dontAllowBot();

    if (allowed) {
        autoActivity(bot, activities);
        autoReadCommand(bot);
        autoReadReactions(bot);
    } else {
        autoActivity(bot, ['ERROR']);
    }
});

bot.login(BOT_TOKEN);