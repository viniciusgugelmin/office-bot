const commands = require("../items/commands");
const readCommand = require("../base-functions/read-command");
const formatText = require("../base-functions/format-text");
const replaceArgsCommand = require("../nano-functions/replace-args-command");
const createMessageEmbed = require("../nano-functions/create-message-embed");
const splitArgs = require("../nano-functions/split-args");
const { PREFIX, SEPARATOR_ARGS, ARGUMENTS_MISSING_MESSAGE, WRONG_PLACE_MESSAGE, ARGUMENT_INCORRECT } = require("../../config.json");

const _ = require("lodash");

module.exports = (bot) => {
    bot.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return;
        if (message.channel.type === 'dm') {
            message.author.send(formatText(WRONG_PLACE_MESSAGE, 'addBold'))
            return;
        }

        let resolved = false;
        let index = 0;
        if (!resolved) {
            // Command: 'help'
            // Action: Show commands list
            const commandsHelp = commands[index].commands;
            readCommand(bot, message, commandsHelp, '', message => {
                let fields = _.cloneDeep(commands);

                fields.forEach((field) => {
                    field.name = field.commands.toString();
                    delete field.commands;
                    field.value = field.description;
                    delete field.description;
                });

                message.channel.send(createMessageEmbed('Commands list', message.guild.iconURL(), fields));
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: 'ping'
            // Response: 'Pong!'
            const commandsPong = commands[index].commands;
            readCommand(bot, message, commandsPong, '', message => {
                message.channel.send(formatText('Pong!', 'addItalic'));
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['cc', 'clearchannel']
            // Action: Clear text channel
            const commandsClearTextChannel = commands[index].commands;
            readCommand(bot, message, commandsClearTextChannel, 'ADMINISTRATOR', message => {
                message.channel.messages.fetch().then((messages) => {
                    message.channel.bulkDelete(messages);
                });
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['createtextchannel', 'createtxtchannel']
            // Action: Create text channel
            const commandsCreateTextChannel = commands[index].commands;
            readCommand(bot, message, commandsCreateTextChannel, 'ADMINISTRATOR', (message) => {
                let content = replaceArgsCommand(message, commandsCreateTextChannel);
                let name = '';
                let parent = '';

                name = content;

                if (content.includes(SEPARATOR_ARGS)) {
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
                            type: 'text'
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
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['createvoicechannel', 'createvcchannel']
            // Action: Create voice channel
            const commandsCreateVoiceChannel = commands[index].commands;
            readCommand(bot, message, commandsCreateVoiceChannel, 'ADMINISTRATOR', (message) => {
                let content = replaceArgsCommand(message, commandsCreateVoiceChannel);
                let name = '';
                let parent = '';

                name = content;

                if (content.includes(SEPARATOR_ARGS)) {
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
                            type: 'voice'
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
                resolved = true;
            });
        }
    });
}