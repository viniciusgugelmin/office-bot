const { PREFIX } = require("../config.json");

module.exports = (bot, triggerText, replyText) => {
    bot.on('message', message => {
        let isTextMessage = message.channel.type === 'text';
        let isTriggerText = message.content.toLowerCase() === PREFIX + triggerText.toLowerCase();

        if (isTextMessage && isTriggerText) {
            message.author.send(replyText);
        }
    });
}