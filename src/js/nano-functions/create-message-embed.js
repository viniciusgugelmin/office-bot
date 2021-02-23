// Config
const { MessageEmbed } = require("discord.js");

module.exports = (title, icon, fields) => {
    return new MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Office Bot', 'https://i.imgur.com/ZOKp8LH.png', 'https://github.com/viniciusgugelmin/office-bot')
        .setURL('https://github.com/viniciusgugelmin/office-bot')
        .setTitle(title)
        .addFields(fields)
}