// Base functions
const formatText = require("./format-text");
// Config
const { PREFIX, NOT_ALLOWED_MESSAGE } = require("../../config.json");

module.exports = (bot, message, aliases, permissionNeeded, callback) => {
    const { content } = message;
    const alias = aliases.filter((alias) => alias === content.slice(PREFIX.length) || content.slice(PREFIX.length).startsWith(`${alias} `));

    if (alias[0]) {
        const command = `${PREFIX}${alias[0]}`;
        const isAllowed = permissionNeeded && message.member.hasPermission(permissionNeeded);

        if (!permissionNeeded || isAllowed) {
            console.log(`Running command ${command}`);
            callback(message);
        } else {
            message.channel.send(formatText(NOT_ALLOWED_MESSAGE, 'addBold'));
        }
    }
};