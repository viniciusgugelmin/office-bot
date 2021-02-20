const createMessageEmbed = require("../nano-functions/create-message-embed");
const { PREFIX } = require("../../config.json");

module.exports = (bot, message, commands, _) => {
    let fields = _.cloneDeep(commands);

    fields.forEach((field) => {
        field.name = field.commands.toString().replace(',', ', ');
        delete field.commands;
        field.value = field.description + (field.arguments ? '\n ..................................... \n' + field.arguments : '');
        delete field.description;
        delete field.arguments
    });

    message.channel.send(createMessageEmbed(`Commands list (${PREFIX}command)`, message.guild.iconURL(), fields));
    message.delete();
}