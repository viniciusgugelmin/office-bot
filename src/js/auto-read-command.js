const readCommand = require("./read-command");
const { PREFIX, ARGUMENTS_MISSING_MESSAGE } = require("../config.json");

const replaceArgsCommand = (message, commands) => {
    const usedCommand = commands.filter((command) => {
        if (message.content.includes(command)) return command;
    });

    const messageReplaced = message.content.replace(`${PREFIX}${usedCommand} `, '');

    if (messageReplaced.includes(`${PREFIX}${usedCommand}`)) return;
    return messageReplaced;
};

module.exports = (bot) => {
    // Command: 'ping'
    // Response: 'Pong!'
    const commandsPong = 'ping';
    readCommand(bot, commandsPong, '', message => {
        message.channel.send('Pong!');
    });

    // Command: ['cc', 'clearchannel']
    // Action: Clear text channel
    const commandsClearTextChannel = ['cc', 'clearchannel'];
    readCommand(bot, commandsClearTextChannel, 'ADMINISTRATOR', message => {
        message.channel.messages.fetch().then((messages) => {
            message.channel.bulkDelete(messages);
        });
    });

    // Command: ['createtextchannel', 'createtxtchannel']
    // Action: Create text channel
    const commandsCreateTextChannel = ['createtextchannel', 'createtxtchannel'];
    readCommand(bot, commandsCreateTextChannel, 'ADMINISTRATOR', (message) => {
        const name = replaceArgsCommand(message, commandsCreateTextChannel);

        if (name) {
            message.guild.channels
                .create(name, {
                    type: 'text'
                })
                .then((channel) => {})
        } else {
            message.channel.send(ARGUMENTS_MISSING_MESSAGE);
        }

        message.delete();
    });

    // Command: ['createvoicechannel', 'createvcchannel']
    // Action: Create voice channel
    const commandsCreateVoiceChannel = ['createvoicechannel', 'createvcchannel'];
    readCommand(bot, commandsCreateVoiceChannel, 'ADMINISTRATOR', (message) => {
        const name = replaceArgsCommand(message, commandsCreateVoiceChannel);

        if (name) {
            message.guild.channels
                .create(name, {
                    type: 'voice'
                })
                .then((channel) => {})
        } else {
            message.channel.send(ARGUMENTS_MISSING_MESSAGE);
        }

        message.delete();
    });
}