// Nano functions
const reactInternalError = require("./react-internal-error");
// Config
const { PREFIX } = require("../../config.json");

module.exports =  (message, commands) => {
    try {
        const usedCommand = commands.filter((command) => {
            if (message.content.includes(command)) return command;
        });

        const messageReplaced = message.content.replace(`${PREFIX}${usedCommand} `, '');

        if (messageReplaced.includes(`${PREFIX}${usedCommand}`)) return;
        return messageReplaced;
    } catch (e) {
        reactInternalError(message, 'replace-args-command.js', e);
    }
};

