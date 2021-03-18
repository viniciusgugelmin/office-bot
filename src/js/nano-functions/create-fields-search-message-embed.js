// Config
const _ = require("lodash");

module.exports = (href, start, end) => {
    let fields = _.cloneDeep(href).slice(start, end);

    fields.forEach((field) => {
        field.name = field.title;
        field.value = field.link;
    });

    return fields;
}