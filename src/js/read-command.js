const { PREFIX, NOT_ALLOWED_MESSAGE, WRONG_PLACE_MESSAGE } = require("../config.json");

module.exports = (bot, aliases, permission, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases];
    }

    bot.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return;
        if (message.channel.type === 'dm') message.channel.send(WRONG_PLACE_MESSAGE);

        const { content } = message;

        aliases.forEach(alias => {
            const command = `${PREFIX}${alias}`;
            let isCommandStarted = content.startsWith(`${command} `);
            let isContentACommand = content === command;
            let isAllowed = permission && message.member.hasPermission(permission);

            if ((isAllowed || !permission) && (isContentACommand || isCommandStarted)) {
                console.log(`Running command ${command}`);
                callback(message);
            } else if (permission && !isAllowed) {
                message.channel.send(NOT_ALLOWED_MESSAGE);
            }
        })
    })
};