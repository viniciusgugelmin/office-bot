// Nano functions
const addReactions = require("./add-reactions");
const reactInternalError = require("./react-internal-error");

module.exports = async (message, reactions) => {
    try {
        const fetched = await message.channel.messages.fetch({limit:1});

        if (fetched && fetched.first()) {
            addReactions(fetched.first(), reactions);
        }
    } catch (e) {
        reactInternalError(message, 'add-reactions-last-message.js', e);
    }
};