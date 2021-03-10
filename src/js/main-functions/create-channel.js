// Base functions
const formatText = require("../base-functions/format-text");
// Nano functions
const replaceArgsCommand = require("../nano-functions/replace-args-command");
const splitArgs = require("../nano-functions/split-args");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const { SEPARATOR_ARGS, ARGUMENTS_MISSING_MESSAGE, ARGUMENT_INCORRECT } = require("../../config.json");

module.exports = (bot, message, commandsCreateChannel, typeChannel) => {
    try {
        let content = replaceArgsCommand(message, commandsCreateChannel);
        let name = '';
        let parent = '';

        name = content;

        if (content && content.includes(SEPARATOR_ARGS)) {
            content = splitArgs(content);
            name = content[0];
            parent = content[1];

            if (!name || !parent) {
                message.channel.send(formatText(ARGUMENTS_MISSING_MESSAGE, 'addBold'));
                resolved = true;
                return;
            }

            let category = bot.channels.cache.filter((channel) => channel.type === 'category' && channel.id === parent);

            if (!category.toJSON().length) {
                message.channel.send(formatText(ARGUMENT_INCORRECT, 'addBold'));
                resolved = true;
                message.delete();
                return;
            }
        }


        if (name) {
            message.guild.channels
                .create(name, {
                    type: typeChannel
                })
                .then((channel) => {
                    if (parent) {
                        channel.setParent(parent);
                    }
                })
        } else {
            message.channel.send(formatText(ARGUMENTS_MISSING_MESSAGE, 'addBold'));
        }

        message.delete();
    } catch (e) {
        reactInternalError(message, 'create-channel.js', e);
    }
}