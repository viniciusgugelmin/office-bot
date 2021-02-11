const { MessageEmbed } = require("discord.js");

module.exports = (title, icon, fields) => {
    return new MessageEmbed()
        .setTitle(title)
        .setThumbnail(icon)
        .addFields(fields)
}