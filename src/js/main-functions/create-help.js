// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const addReactionsLastMessage = require ("../nano-functions/add-reactions-last-message");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const { PREFIX } = require("../../config.json");
const _ = require("lodash");

module.exports = (bot, message, commands) => {
    try {
        let fields = _.cloneDeep(commands);

        fields.forEach((field) => {
            field.name = field.commands.toString().replace(',', ', ');
            delete field.commands;
            field.value = field.description + (field.arguments ? '\n ..................................... \n' + field.arguments : '');
            delete field.description;
            delete field.arguments
        });

        message.channel.send(createMessageEmbed(`Commands list (${PREFIX}command)`, fields));

        _.delay(() => addReactionsLastMessage(message, ['⬅', '➡']), 200);
        _.delay(() => message.delete(), 200);
    } catch (e) {
        reactInternalError(message, 'create-help.js', e);
    }
}