// Base functions
const formatText = require("../base-functions/format-text");
// Nano functions
const addReactions = require("../nano-functions/add-reactions");
const addReactionsLastMessage = require("../nano-functions/add-reactions-last-message");
// Config
const _ = require("lodash");

module.exports = (message) => {
    addReactions(message, ['🏓']);
    _.delay(() => message.channel.send(formatText(`Pong!`, 'addItalic')), 300);
    _.delay(() => addReactionsLastMessage(message, ['🏓']), 400);
}