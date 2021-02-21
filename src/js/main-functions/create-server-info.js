const createMessageEmbed = require("../nano-functions/create-message-embed");

module.exports = (bot, message, _) => {
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

    message.channel.send(createMessageEmbed(`Server info`, message.guild.iconURL(), fields));
    message.delete();
}