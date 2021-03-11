// Items
const help = require("../items/help");
// Nano functions
const createFieldsHelpMessageEmbed = require("../nano-functions/create-fields-help-message-embed");
const createMessageEmbed = require("../nano-functions/create-message-embed");
const addReactionsLastMessage = require ("../nano-functions/add-reactions-last-message");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const { PREFIX } = require("../../config.json");
const _ = require("lodash");

module.exports = (bot, message, commands) => {
    try {
        let fields = createFieldsHelpMessageEmbed(commands, 0, help.maxFieldsPage);
        let footer = '1/' + Math.ceil(commands.length/fields.length);

        message.channel.send(createMessageEmbed(help.title, fields, footer));

        _.delay(() => addReactionsLastMessage(message, ['⬅', '➡']), 200);
        _.delay(() => message.delete(), 200);
    } catch (e) {
        reactInternalError(message, 'create-help.js', e);
    }
}