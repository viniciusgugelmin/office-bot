// Base functions
const readReaction = require("../base-functions/read-reaction");
// Main functions
const dontAllowAutoReadReaction = require("../main-functions/dont-allow-auto-read-reaction");
const paginate = require("../main-functions/paginate");

module.exports = (bot) => {
    bot.on('messageReactionAdd', messageReaction => {
        const allowedNormalJob = dontAllowAutoReadReaction(messageReaction);

        if (allowedNormalJob) {
            const {message, _emoji} = messageReaction;

            let resolved = false;
            let index = 0;
            if (!resolved) {
                readReaction(bot, message, _emoji, ['⬅', '➡'], '', reaction => {
                    paginate(bot, message, reaction, messageReaction.users.cache.last());
                    resolved = true;
                });
            }
        }
    });
};

//console.log(message.embeds[0])
/*
if (_emoji.name.startsWith('⬅') || _emoji.name.startsWith('➡')) {
                if (message.embeds[0].title === help.title) {
                    let page = message.embeds[0].footer.text.split('/');
                    let _commands = message.embeds[0].fields;
                    let footer = '';

                    if (_emoji.name.startsWith('➡') && page[0] < page[1]) {
                        // get next line of commands
                        let nextPageNumber = parseFloat(page[0]) + 1;
                        let nextPageStartCommands = (nextPageNumber - 1) * help.maxFieldsPage;
                        let maxFieldsNextPage = nextPageStartCommands + help.maxFieldsPage;
                        footer = nextPageNumber + `/${page[1]}`;
                        _commands = createFieldsHelpMessageEmbed(commands, nextPageStartCommands, maxFieldsNextPage)
                    } else if (_emoji.name.startsWith('➡') && page[0] === page[1]) {
                        // get first line of commands
                        footer = `1/${page[1]}`;
                        _commands = createFieldsHelpMessageEmbed(commands, 0, help.maxFieldsPage)
                    } else if (_emoji.name.startsWith('⬅') && page[0] > 1) {
                        // get previous line of commands
                        let previousPageNumber = parseFloat(page[0]) - 1;
                        let previousPageStartCommands = (previousPageNumber - 1) * help.maxFieldsPage;
                        let maxFieldsPreviousPage = previousPageStartCommands + help.maxFieldsPage;
                        footer = previousPageNumber + `/${page[1]}`;
                        _commands = createFieldsHelpMessageEmbed(commands, previousPageStartCommands, maxFieldsPreviousPage)
                    } else if (_emoji.name.startsWith('⬅') && page[0] == 1) {
                        // get last line of commands
                        let lastPageNumber = parseFloat(page[1]);
                        let lastPageStartCommands = (lastPageNumber * help.maxFieldsPage) - help.maxFieldsPage;
                        let maxFieldsLastPage = lastPageStartCommands + 1 + help.maxFieldsPage;
                        footer = `${page[1]}/${page[1]}`;
                        _commands = createFieldsHelpMessageEmbed(commands, lastPageStartCommands, maxFieldsLastPage)
                    }

                    if (footer) {
                        let embed = createMessageEmbed(help.title, _commands, footer);
                        editMessage(bot, message.channel.id, message.id, embed);
                    }
                }
            }
 */