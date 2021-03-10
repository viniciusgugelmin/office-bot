// Base functions
const formatText = require("../base-functions/format-text");
// Nano functions
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const { NOT_ALLOWED_MESSAGE, ARGUMENTS_MISSING_MESSAGE } = require("../../config.json");

module.exports = (bot, message, permissionType, action) => {
    const { member, mentions } = message;

    try {
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission(permissionType)
        ) {
            const target = mentions.users.first();
            if (target && target.id !== message.author.id && target.id !== bot.user.id) {
                const targetMember = message.guild.members.cache.get(target.id);
                const tag = `<@${targetMember.user.id}>`;
                let messageToSend = '';

                switch (action) {
                    case 'kick':
                        targetMember.kick();
                        messageToSend = ' has been kicked';
                        break;
                    case 'ban':
                        targetMember.ban();
                        messageToSend = ' has been banned';
                        break;
                }

                if (messageToSend) {
                    message.channel.send(formatText(tag + messageToSend, 'addBold'));
                    message.delete();
                }
            } else if (!target) {
                message.channel.send(formatText(ARGUMENTS_MISSING_MESSAGE, 'addBold'));
            } else if (target.id === message.author.id || target.id === bot.user.id) {
                message.channel.send(formatText(NOT_ALLOWED_MESSAGE, 'addBold'));
            }
        } else {
            message.channel.send(formatText(NOT_ALLOWED_MESSAGE, 'addBold'));
        }
    } catch (e) {
        reactInternalError(message, 'moderate-member.js', e);
    }
}