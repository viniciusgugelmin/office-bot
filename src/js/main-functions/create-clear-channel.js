// Nano functions
const reactInternalError = require("../nano-functions/react-internal-error");

module.exports = (message) => {
    try {
        message.channel.messages.fetch().then((messages) => {
            message.channel.bulkDelete(messages);
        });
    } catch (e) {
        reactInternalError(message, 'create-clear-channel.js', e);
    }
}