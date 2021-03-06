// Base functions
const formatText = require("../base-functions/format-text");
// Nano functions
const replaceArgsCommand = require("../nano-functions/replace-args-command");
const createMessageEmbed = require("../nano-functions/create-message-embed");
const reactInternalError = require("../nano-functions/react-internal-error");
const createFieldsSearchMessageEmbed = require("../nano-functions/create-fields-search-message-embed");
// Config
const { GOOGLE_TOKEN, GOOGLE_ENGINE_TOKEN, ARGUMENTS_MISSING_MESSAGE } = require("../../config.json");
const request = require("node-superfetch");

module.exports = async (bot, message, commandsSearchGoogle) => {
    try {
        let query = replaceArgsCommand(message, commandsSearchGoogle);
        let result;

        if (!query) return message.channel.send(formatText(ARGUMENTS_MISSING_MESSAGE, 'addBold'));

        href = await search(query);
        if (!href) return message.channel.send((formatText('Unknown search.', 'addBold')));

        let title = href[0].title, fields = '',
            footer = 'Powered by Google • https://www.google.com/search?q= ' + query, description = href[0].snippet,
            image = href[0].pagemap && href[0].pagemap.cse_thumbnail ? href[0].pagemap.cse_thumbnail[0].src : null, url = href[0].link;

        fields = createFieldsSearchMessageEmbed(href, 1, 5);

        const embed = createMessageEmbed(title, fields, footer, description, image, url);

        return message.channel.send(embed);

        async function search(query) {
            const { body } = await request.get('https://www.googleapis.com/customsearch/v1').query({
                key: GOOGLE_TOKEN, cx: GOOGLE_ENGINE_TOKEN, safe: 'off', q: query
            });

            if (!body.items) return null;
            return body.items;
        }
    } catch (e) {
        reactInternalError(message, 'search-google.js', e);
    }
}