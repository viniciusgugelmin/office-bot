// Config
const _ = require("lodash");

module.exports = (commands, start, end) => {
    let fields = _.cloneDeep(commands).slice(start, end);

    fields.forEach((field) => {
        field.name = field.commands.toString().replace(',', ', ');
        delete field.commands;
        field.value = field.description + (field.arguments ? '\n ..................................... \n' + field.arguments : '');
        delete field.description;
        delete field.arguments
    });

    return fields;
}