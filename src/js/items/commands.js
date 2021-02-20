module.exports = [
    {commands: ['help'], description: 'Show commands list'},
    {commands: ['createvoicechannel', 'cvc'], description: 'Create voice channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['createtextchannel', 'ctc'], description: 'Create text channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['cc', 'clearchannel'], description: 'Clear text'},
    {commands: ['ping'], description: 'Pong!'},
]

