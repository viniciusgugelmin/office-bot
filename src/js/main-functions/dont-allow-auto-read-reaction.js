module.exports = (messageReaction) => {
    if (messageReaction.users.cache.last().bot) return false;

    return true;
}