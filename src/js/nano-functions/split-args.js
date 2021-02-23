// Config
const { SEPARATOR_ARGS } = require("../../config.json");

module.exports = (args) => {
    return arrayArgs = args.split(SEPARATOR_ARGS);
}