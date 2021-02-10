const { BOT_NAME } = require("../config.json");

const addReactions = (message, reactions) => {
    message.react(reactions[0]);
    reactions.shift();
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750)
    }
};

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