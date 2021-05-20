# Changelog

## [1.0.0] - 2021-02-10
### Added
- Auto activity
- Auto read command
- Read command
- Edit message
- Send private message

#### Prefix
- `!`

#### Commands added
- `'ping'` 'Pong!'
- `['cc', 'clearchannel']` Clear text channel
- `['createtextchannel', 'createtxtchannel']` Create text channel
- `['createvoicechannel', 'createvcchannel']` Create voice channel

## [1.1.0] - 2021-02-11
### Added 
- Lodash
- New directory organization
  - auto-functions
    - auto-activity
    - auto-read-command
  - base-functions
    - edit-message
    - format-text
    - read-command
    - send-private-message
  - items
    - commands
  - nano-functions
    - create-message-embed
    - replace-args-command
    - split-args

#### Commands added
- `'help'` Show commands list

### Modified

#### Prefix
- `$`

## [1.2.0] - 2021-02-24
### Added
- Main functions
  - Create channel
  - Create help
  - Create server info
  - Moderate member
- Reaction to $ping command
- Requires comments
- Help message reaction
- Add reactions to last message (nano-function)
- Procfile
- Server start

#### Commands added
- `'serverinfo'` Show server info
- `'kick'` Kick member
- `'ban'` Ban member

## [1.2.1] - 2021-03-11
### Added
- Don't allow auto read command (main-function)
- Don't allow bot (main-function)
- Activities (items)
- Internal error message
- Auto read reactions (auto-functions)
- Paginate (main-functions)

#### Commands added
- `'sum'` Sum
- `['okay', 'ok']` Normalize jobs and variables, stop summing...

#### Prefix DM
- `!`

## [1.2.2] - 2021-03-17
### Added
- Sub (main-function)
- Search google (main-function)

#### Commands added
- `'sub'` Sub
- `['google', 'g']` Google search

## [1.3] - 2021-05-20
### Added
- MySQL connection
- Auto check messages from database