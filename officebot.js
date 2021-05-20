// Items
const activities = require("./src/js/items/activities");
// Auto functions
const autoActivity = require("./src/js/auto-functions/auto-activity");
const autoReadCommand = require("./src/js/auto-functions/auto-read-command");
const autoReadReactions = require("./src/js/auto-functions/auto-read-reactions");
const autoCheckMessages = require("./src/js/auto-functions/auto-check-messages");
// Main functions
const dontAllowBot = require("./src/js/main-functions/dont-allow-bot");
// Database connection
const syncConnection = require("./src/database/sync");
// Config
const { BOT_TOKEN } = require("./src/config.json");
const discord = require("discord.js");
const bot = new discord.Client();

bot.on('ready', () => {
    let allowed = dontAllowBot();

    if (allowed) {
        //syncConnection();

        autoActivity(bot, activities);
        autoReadCommand(bot);
        autoReadReactions(bot);
        //autoCheckMessages(bot);
    } else {
        autoActivity(bot, ['ERROR']);
    }
});

bot.login(BOT_TOKEN);