// Nano functions
const createMessageEmbed = require("../nano-functions/create-message-embed");
// Models
const MessageModel = require("../../model/MessageModel");
// Config
const { CHANNEL } = require("../../config.json")

module.exports = (bot) => {
    setTimeout(() => {
        var messages = 0;
        var sendingMessages = false;
        var getNotSentMessages = () => {
            sendingMessages = true;

            MessageModel.findAll()
                .then(function(data) {
                    data.forEach(
                        (message) => {
                            try {
                                _message = message.dataValues;

                                bot.channels.fetch(CHANNEL.ID)
                                    .then(channel => {
                                        channel.send(createMessageEmbed(_message.author, '', _message.createdAt, _message.content))
                                    });

                                MessageModel.destroy({
                                    where: {
                                        id: _message.id
                                    }
                                })
                            } catch (e) {
                                // TO DO
                            }
                        }
                    )

                    sendingMessages = false;
                });
        };

        /* Initial search */
        MessageModel.count({
            col: 'id'
        })
            .then(function(count) {
                messages = count;
                getNotSentMessages();
            });

        /* Auto search */
        setInterval(() => {
            if (!sendingMessages) {
                console.log('Check if has not sent messages')
                MessageModel.count({
                    col: 'id'
                })
                    .then(function(count) {
                        if (count > messages) {
                            getNotSentMessages();
                            messages = count;
                        }
                    });
            }
        }, 10000);

    }, 1000);
}