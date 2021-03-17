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

    if (!_.isNaN(number) && numberAux === 0) {
        numberAux = number;
        message.channel.send(formatText(numberAux, 'addBold'));

        callback(numberAux);
        return;
    }

    if (!_.isNaN(number)) {
        let numberToString = number < 0 ? ` - (${number})` : ` - ${number}`;
        message.channel.send(formatText(numberAux + numberToString + ' = ' + (numberAux - number), 'addBold'));
        numberAux -= number;

        if (numberAux === 0) {
            message.channel.send(formatText('Your number has reached 0, the next number will be read as positive!', 'addBold'));
        }

        callback(numberAux);
    }
}