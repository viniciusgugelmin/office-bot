// Items
const commands = require("../items/commands");
// Base functions
const readCommand = require("../base-functions/read-command");
const formatText = require("../base-functions/format-text");
// Main functions
const dontAllowAutoReadCommand = require("../main-functions/dont-allow-auto-read-command");
const dontAllowOtherJobs = require("../main-functions/dont-allow-other-jobs");
const createHelp = require("../main-functions/create-help");
const createServerInfo = require("../main-functions/create-server-info");
const createChannel = require("../main-functions/create-channel");
const moderateMember = require("../main-functions/moderate-member");
const createSum = require("../main-functions/create-sum");
const createClearChannel = require("../main-functions/create-clear-channel");
const createPing = require("../main-functions/create-ping");
// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const addReactions = require("../nano-functions/add-reactions");
const addReactionsLastMessage = require("../nano-functions/add-reactions-last-message");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const { PREFIX, WRONG_PLACE_MESSAGE, INTERNAL_ERROR } = require("../../config.json");
const _ = require("lodash");

// Environment
let defaultJob = 'normal';
let typeOfJob = defaultJob;

let stringAux = '';
let numberAux = 0;
let arrayAux = [];
let objectAux = {};

module.exports = (bot) => {
    bot.on('message', message => {
        const allowedNormalJob = dontAllowAutoReadCommand(message);
        const allowedOtherJobs = dontAllowOtherJobs(message);

        if (allowedNormalJob) {
            let resolved = false;
            let index = 0;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, '', message => {
                    createHelp(bot, message, commands);
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, '', message => {
                    createServerInfo(bot, message);
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, 'ADMINISTRATOR', (message) => {
                    createChannel(bot, message, commands[index].commands, 'voice');
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, 'ADMINISTRATOR', (message) => {
                    createChannel(bot, message, commands[index].commands, 'text');
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, 'ADMINISTRATOR', message => {
                    createClearChannel(message);
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, '', message => {
                    moderateMember(bot, message, 'KICK_MEMBERS', 'kick');
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, 'ADMINISTRATOR', message => {
                    moderateMember(bot, message, 'BAN_MEMBERS', 'ban');
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                readCommand(bot, message, commands[index].commands, '', message => {
                    createPing(message);
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                const commandsSum = commands[index].commands;
                readCommand(bot, message, commandsSum, '', message => {
                    numberAux = 0;
                    typeOfJob = 'sum';
                    message.channel.send(formatText('Job:', 'addBold') + ' sum');
                    resolved = true;
                });
            }

            index++;
            if (!resolved) {
                const commandsOkay = commands[index].commands;
                readCommand(bot, message, commandsOkay, '', message => {
                    message.channel.send(formatText('Job:', 'addBold') + ' normal');
                    stringAux = '';
                    numberAux = 0;
                    arrayAux = [];
                    objectAux = {};
                    typeOfJob = defaultJob;
                    resolved = true;
                });
            }
        } else if (allowedOtherJobs) {
            switch (typeOfJob) {
                case 'sum':
                    createSum(bot, message, numberAux, number => {
                        numberAux = number;
                    });
                    break;
            }
        }
    });
}