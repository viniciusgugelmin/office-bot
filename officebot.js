const config = require("./src/config.json");
const autoActivity = require("./src/js/auto-functions/auto-activity");
const autoReadCommand = require("./src/js/auto-functions/auto-read-command");

const discord = require("discord.js");
const bot = new discord.Client();

bot.on('ready', () => {
    autoActivity(bot);
    autoReadCommand(bot);
});

bot.login(config.BOT_TOKEN);