// Nano functions
const reactInternalError = require("./react-internal-error");
// Config
const { SEPARATOR_ARGS } = require("../../config.json");

module.exports = (args) => {
    try {
        return arrayArgs = args.split(SEPARATOR_ARGS);
    } catch (e) {
        reactInternalError(message, 'replace-args-command.js', e);
    }
}