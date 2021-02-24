// Nano functions
const addReactions = require("../nano-functions/add-reactions");

module.exports = async (message, reactions) => {
    const fetched = await message.channel.messages.fetch({limit:1});

    if (fetched && fetched.first()) {
        addReactions(fetched.first(), reactions);
    }
};