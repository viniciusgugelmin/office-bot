// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const _ = require("lodash");

module.exports = (bot, message) => {
    try {
        const { region, memberCount, owner, afkTimeout } = message.guild;

        let fields = [
            {
                name: 'Owner',
                value: owner
            },
            {
                name: 'Region',
                value: _.capitalize(region)
            },
            {
                name: 'Members',
                value: memberCount
            },
            {
                name: 'AFK Timeout',
                value: `${afkTimeout / 60} min`
            }
        ];

        message.channel.send(createMessageEmbed(`Server info`, fields));
        message.delete();

    } catch (e) {
        reactInternalError(message, 'create-server-info.js', e);
    }
}