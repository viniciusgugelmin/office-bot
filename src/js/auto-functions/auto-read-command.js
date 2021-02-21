const commands = require("../items/commands");
const readCommand = require("../base-functions/read-command");
const formatText = require("../base-functions/format-text");
const createMessageEmbed = require("../nano-functions/create-message-embed");
const createHelp = require("../main-functions/create-help");
const createServerInfo = require("../main-functions/create-server-info");
const createChannel = require("../main-functions/create-channel");
const addReactions = require("../nano-functions/add-reactions");
const { PREFIX, WRONG_PLACE_MESSAGE } = require("../../config.json");

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
            // Command: ['help']
            // Description: Show commands list
            const commandsHelp = commands[index].commands;
            readCommand(bot, message, commandsHelp, '', message => {
                createHelp(bot, message, commands, _);
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['serverinfo', 'sinfo']
            // Description: 'Show server info'
            const commandsServerInfo = commands[index].commands;
            readCommand(bot, message, commandsServerInfo, '', message => {
                createServerInfo(bot, message, _);
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['createvoicechannel', 'cvc']
            // Description: Create voice channel
            // Arguments: <channel-name>+<category-id>
            const commandsCreateVoiceChannel = commands[index].commands;
            readCommand(bot, message, commandsCreateVoiceChannel, 'ADMINISTRATOR', (message) => {
                createChannel(bot, message, commandsCreateVoiceChannel, 'voice');
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['createtextchannel', 'ctc']
            // Description: Create text channel
            // Arguments: <channel-name>+<category-id>
            const commandsCreateTextChannel = commands[index].commands;
            readCommand(bot, message, commandsCreateTextChannel, 'ADMINISTRATOR', (message) => {
                createChannel(bot, message, commandsCreateTextChannel, 'text');
                resolved = true;
            });
        }

        index++;
        if (!resolved) {
            // Command: ['clearchannel', 'cc']
            // Description: Clear channel
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
            // Command: ['ping']
            // Description: 'Pong!'
            const commandsPong = commands[index].commands;
            readCommand(bot, message, commandsPong, '', message => {
                addReactions(message, ['🏓']);
                message.channel.send(formatText('Pong!', 'addItalic'));
                resolved = true;
            });
        }
    });
}