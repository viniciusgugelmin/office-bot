module.exports = (message, reactions) => {
    while (reactions.length > 0) {
        message.react(reactions[0]);
        reactions.shift();
    }
};
