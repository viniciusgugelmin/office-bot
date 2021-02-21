module.exports = [
    {commands: ['help'], description: 'Show commands list'},
    {commands: ['serverinfo', 'sinfo'], description: 'Show server info'},
    {commands: ['createvoicechannel', 'cvc'], description: 'Create voice channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['createtextchannel', 'ctc'], description: 'Create text channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['clearchannel', 'cc'], description: 'Clear channel'},
    {commands: ['ping'], description: 'Pong!'},
]

