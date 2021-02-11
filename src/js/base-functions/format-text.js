module.exports = (text, functionName) => {
    switch (functionName) {
        case 'addBold':
            return `**${text}**`;
        case 'addItalic':
            return `*${text}*`;
        default:
            return text;
    }
};
