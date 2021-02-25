// Items
const activities = require("./src/js/items/activities");
// Auto functions
const autoActivity = require("./src/js/auto-functions/auto-activity");
const autoReadCommand = require("./src/js/auto-functions/auto-read-command");
// Main functions
const dontAllowBot = require("./src/js/main-functions/dont-allow-bot");
// Config
const { BOT_TOKEN} = require("./src/config.json");
const discord = require("discord.js");
const bot = new discord.Client();

bot.on('ready', () => {
    const allowed = dontAllowBot;

    if (allowed) {
        autoActivity(bot, activities);
        autoReadCommand(bot);
    } else {
        autoActivity(bot, ['ERROR']);
    }
});

bot.login(BOT_TOKEN);