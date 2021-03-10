module.exports = (bot) => {
    bot.on('messageReactionAdd', message => {
        console.log(message._emoji)
    });
};