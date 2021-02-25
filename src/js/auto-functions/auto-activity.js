module.exports = (bot, activities) => {
    let i = 0;

    setInterval(() => {
        bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: "WATCHING"
        })
    }, 5000);
}