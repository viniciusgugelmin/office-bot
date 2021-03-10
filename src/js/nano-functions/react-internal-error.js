// Base functions
const formatText = require("../base-functions/format-text");
// Config
const { INTERNAL_ERROR } = require("../../config.json");

module.exports = (message, file, e) => {
    console.log(`(ERROR - ${file})`, e)
    message.channel.send(formatText(INTERNAL_ERROR, 'addBold'));
    message.delete();
};