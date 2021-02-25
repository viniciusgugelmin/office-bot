// Config
const { PREFIX, PREFIX_DM} = require("../../config.json");

module.exports = () => {
    return PREFIX === PREFIX_DM || PREFIX.startsWith(PREFIX_DM) || PREFIX_DM.startsWith(PREFIX);
}