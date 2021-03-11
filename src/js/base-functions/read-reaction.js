// Base functions
const formatText = require("./format-text");
// Config
const { NOT_ALLOWED_MESSAGE } = require("../../config.json");

module.exports = (bot, message, _emoji, reactions, permissionNeeded, callback) => {
    const reaction = reactions.filter((reaction) => _emoji.name.startsWith(reaction));

    if (reaction[0]) {
        const isAllowed = permissionNeeded && message.member.hasPermission(permissionNeeded);

        if (!permissionNeeded || isAllowed) {
            console.log(`Reading reaction ${_emoji.name}`);
            callback(_emoji);
        } else {
            message.channel.send(formatText(NOT_ALLOWED_MESSAGE, 'addBold'));
        }
    }
}