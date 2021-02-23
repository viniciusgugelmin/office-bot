// Nano functions
const addReactions = require("../nano-functions/add-reactions");
// Config
const { BOT_NAME } = require("../../config.json");

module.exports = async (bot, idChannel, idMessage, text, reactions = []) => {
    const channel = await bot.channels.fetch(idChannel);

    channel.messages.fetch().then((messages) => {
        if (!idMessage || messages.size === 0) {
            channel.send(text).then(message => {
                addReactions(message, reactions);
            });
        } else {
            for (const message of messages) {
                let lastMessage = message[1];

                let isBotName = lastMessage.author.username === BOT_NAME;
                let isBotAuthor = lastMessage.author.bot;
                let isIdMessage = lastMessage.id === idMessage;

                if (isBotName && isBotAuthor && isIdMessage)  {
                    lastMessage.edit(text);
                    addReactions(lastMessage, reactions);
                }
            }
        }
    });
}