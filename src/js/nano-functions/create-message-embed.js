// Nano functions
const reactInternalError = require("./react-internal-error");
// Config
const { MessageEmbed } = require("discord.js");

module.exports = (title = '', fields = '', footer = '', description = '', image = '', url = '') => {
    try {
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Office Bot', 'https://i.imgur.com/ZOKp8LH.png', 'https://github.com/viniciusgugelmin/office-bot')
            .setURL(url || 'https://github.com/viniciusgugelmin/office-bot')

        if (title) {
            embed.setTitle(title);
        }

        if (fields) {
            embed.addFields(fields);
        }

        if (footer) {
            embed.setFooter(footer);
        }

        if (description) {
            embed.setDescription(description);
        }

        if (image) {
            embed.setImage(image)
        }

        return embed;
    } catch (e) {
        reactInternalError(message, 'create-message-embed.js', e);
    }
}