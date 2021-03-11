// Items
const help = require("../items/help");
const commands = require("../items/commands");
// Base functions
const editMessage = require("../base-functions/edit-message");
// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
const createFieldsHelpMessageEmbed = require("../nano-functions/create-fields-help-message-embed");
const reactInternalError = require("../nano-functions/react-internal-error");
// Config
const _ = require("lodash");

module.exports = (bot, message, _emoji, user) => {
    try {
        if (message.embeds[0] && message.embeds[0].title === help.title) {
            let page = message.embeds[0].footer.text.split('/');
            let _commands = message.embeds[0].fields;
            let footer = '';

            if (_emoji.name.startsWith('➡') && page[0] < page[1]) {
                // get commands' next line
                let nextPageNumber = parseFloat(page[0]) + 1;
                let nextPageStartCommands = (nextPageNumber - 1) * help.maxFieldsPage;
                let maxFieldsNextPage = nextPageStartCommands + help.maxFieldsPage;
                footer = nextPageNumber + `/${page[1]}`;
                _commands = createFieldsHelpMessageEmbed(commands, nextPageStartCommands, maxFieldsNextPage)
            } else if (_emoji.name.startsWith('➡') && page[0] === page[1]) {
                // get commands' first line
                footer = `1/${page[1]}`;
                _commands = createFieldsHelpMessageEmbed(commands, 0, help.maxFieldsPage)
            } else if (_emoji.name.startsWith('⬅') && page[0] > 1) {
                // get commands' previous line
                let previousPageNumber = parseFloat(page[0]) - 1;
                let previousPageStartCommands = (previousPageNumber - 1) * help.maxFieldsPage;
                let maxFieldsPreviousPage = previousPageStartCommands + help.maxFieldsPage;
                footer = previousPageNumber + `/${page[1]}`;
                _commands = createFieldsHelpMessageEmbed(commands, previousPageStartCommands, maxFieldsPreviousPage)
            } else if (_emoji.name.startsWith('⬅') && page[0] == 1) {
                // get commands' last line
                let lastPageNumber = parseFloat(page[1]);
                let lastPageStartCommands = (lastPageNumber * help.maxFieldsPage) - help.maxFieldsPage;
                let maxFieldsLastPage = lastPageStartCommands + 1 + help.maxFieldsPage;
                footer = `${page[1]}/${page[1]}`;
                _commands = createFieldsHelpMessageEmbed(commands, lastPageStartCommands, maxFieldsLastPage)
            }

            if (footer)  {
                message.reactions.cache.forEach(messageReaction => messageReaction.users.remove(user.id));
                let embed = createMessageEmbed(help.title, _commands, footer);
                editMessage(bot, message.channel.id, message.id, embed);
            }
        }
    } catch (e) {
        reactInternalError(message, 'paginate.js', e);
    }
}