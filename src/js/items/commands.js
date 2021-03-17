module.exports = [
    {commands: ['help'], description: 'Show commands list'},
    {commands: ['serverinfo', 'sinfo'], description: 'Show server info'},
    {commands: ['createvoicechannel', 'cvc'], description: 'Create voice channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['createtextchannel', 'ctc'], description: 'Create text channel', arguments: '\<\channel-name>+<category-id> \n required+n-required'},
    {commands: ['clearchannel', 'cc'], description: 'Clear channel'},
    {commands: ['kick'], description: 'Kick member', arguments: '\<\@member> \n required'},
    {commands: ['ban'], description: 'Ban member', arguments: '\<\@member> \n required'},
    {commands: ['ping'], description: 'Pong!'},
    {commands: ['sum'], description: 'Sum'},
    {commands: ['sub'], description: 'Sub'},
    {commands: ['okay', 'ok'], description: 'Normalize jobs and variables, stop summing...'}
]

