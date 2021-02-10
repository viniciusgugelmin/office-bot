const config = require("./src/config.json");
const autoActivity = require("./src/js/auto-activity");
const autoReadCommand = require("./src/js/auto-read-command");
const editMessage = require("./src/js/edit-message");
const sendPrivateMessage = require("./src/js/send-private-message");

const discord = require("discord.js");
const bot = new discord.Client();

bot.on('ready', () => {
    autoActivity(bot);
    autoReadCommand(bot);
});

bot.login(config.BOT_TOKEN);