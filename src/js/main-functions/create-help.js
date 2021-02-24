// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const addReactionsLastMessage = require ("../nano-functions/add-reactions-last-message");
// Config
const { PREFIX } = require("../../config.json");
const _ = require("lodash");

module.exports = (bot, message, commands) => {
    let fields = _.cloneDeep(commands);

    fields.forEach((field) => {
        field.name = field.commands.toString().replace(',', ', ');
        delete field.commands;
        field.value = field.description + (field.arguments ? '\n ..................................... \n' + field.arguments : '');
        delete field.description;
        delete field.arguments
    });

    message.channel.send(createMessageEmbed(`Commands list (${PREFIX}command)`, message.guild.iconURL(), fields));

    _.delay(() => addReactionsLastMessage(message, ['⬅', '➡']), 750);
}