// Models (must declare everyone)
const MessageModel = require("../model/MessageModel");
// Config
const connection = require('./connection');

module.exports = () => {
    console.log("%c---- SYNCING DATABASE ----", "color: red; font-family: sans-serif; font-size: 3em; font-weight: bolder; text-shadow: #000 1px 1px;");

    let sync = async () => {
        try {
            const result = await connection.sync();
            console.log(result);
            console.log("%c---- END SYNC ----", "color: red; font-family: sans-serif; font-size: 3em; font-weight: bolder; text-shadow: #000 1px 1px;");
        } catch (error) {
            console.log(error);
        }
    };

    return sync();
}