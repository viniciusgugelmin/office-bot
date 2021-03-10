// Nano functions
const reactInternalError = require("./react-internal-error");

module.exports = (message, reactions) => {
    try {
        while (reactions.length > 0) {
            message.react(reactions[0]);
            reactions.shift();
        }
    } catch (e) {
        reactInternalError(message, 'add-reaction.js', e);
    }
};
