// Base functions
const formatText = require("../base-functions/format-text");
// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const addReactions = require("../nano-functions/add-reactions");
// Config
const _ = require("lodash");

module.exports = (bot, message, numberAux, callback) => {
    const { content } = message;
    let number = parseFloat(content);

    if (!_.isNaN(number)) {
        message.channel.send(formatText(`${numberAux} + ${number} = ` + (numberAux + number), 'addBold'));
        numberAux += number;

        callback(numberAux);
    }
}