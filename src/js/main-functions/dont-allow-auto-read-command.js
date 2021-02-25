// Base functions
const formatText = require("../base-functions/format-text");
// Config
const { PREFIX, WRONG_PLACE_MESSAGE } = require("../../config.json");

module.exports = (message) => {
    if (!message.content.startsWith(PREFIX)) return false;
    if (message.author.bot) return false;
    if (message.channel.type === 'dm') {
        message.author.send(formatText(WRONG_PLACE_MESSAGE, 'addBold'))
        return false;
    }

    return true;
};