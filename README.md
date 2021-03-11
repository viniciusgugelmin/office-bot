<p align="center">
  <a href="https://github.com/viniciusgugelmin/office-bot">
    <img src="info/readme.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    office-bot&nbsp
    <img src="info/discord-logo.png" alt="discord-logo" width="20" height="20">
  </h3>
  <p align="center">
    Discord office bot
    <br />
    <a href="https://github.com/viniciusgugelmin/office-bot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!--
    <a href="https://github.com/viniciusgugelmin/office-bot">View Demo</a>
    ·
    -->
    <a href="https://github.com/viniciusgugelmin/office-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/viniciusgugelmin/office-bot/issues">Request Feature</a>
  </p>
</p>

## Commands list

| Command | Description | Arguments |
| ------- | ----------- | ------------------------ |
| `help` | Show commands list | - |
| `serverinfo`, `sinfo` | Show server info | - |
| `createvoicechannel`, `cvc` | Create voice channel | channel-name*+category-id |
| `createtextchannel`, `ctc` | Create text channel | channel-name*+category-id |
| `clearchannel`, `cc` | Clear channel | - |
| `kick` | Kick member | @member* |
| `ban` | Ban member | @member* |
| `ping` | Pong! | - |
| `sum` | Sum | - |
| `okay`, `ok` | Normalize jobs and variables, stop summing... | - |


<details open="open">
  <summary><h2 style="display: inline-block">Abstract</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul><li><a href="#usage">Usage</a></li></ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project

4fun project - Discord office bot


## Usage

First, you'll gonna run this 2 lines in order.
```
git clone https://github.com/viniciusgugelmin/office-bot.git
yarn install
```

To create the bot at Discord, follow the step 1 ("Configuring a Discord bot") [here](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js-pt).

Configure the "config.json" file.
```json
{
  "BOT_TOKEN": "You can get this token from the link above",
  "BOT_NAME": "The name must be equal to the bot at Discord",
  "PREFIX": "Choose a prefix...",
  "PREFIX_DM": "Choose a prefix (different than PREFIX)...",
  "SEPARATOR_ARGS": "Choose a separator...",
  "NOT_ALLOWED_MESSAGE": "Choose a message...",
  "WRONG_PLACE_MESSAGE": "Choose a message...",
  "ARGUMENTS_MISSING_MESSAGE": "Choose a message...",
  "ARGUMENT_INCORRECT": "Choose a message...",
  "INTERNAL_ERROR": "Choose a message..."
}
```
And you're going to have something like this...
```json
{
  "BOT_TOKEN": "12345678910111213141516171819",
  "BOT_NAME": "Office Bot",
  "PREFIX": "$",
  "PREFIX_DM": "!",
  "SEPARATOR_ARGS": "+",
  "NOT_ALLOWED_MESSAGE": "You do not have permission to use this command!",
  "WRONG_PLACE_MESSAGE": "This command can not be used in private!",
  "ARGUMENTS_MISSING_MESSAGE": "Arguments missing!",
  "ARGUMENT_INCORRECT": "Argument incorrect!",
  "INTERNAL_ERROR": "❌ An error occurred!"
}
```

To test the application, run this line.
```
node officebot.js
```


## Roadmap

See the [open issues](https://github.com/viniciusgugelmin/office-bot/issues) for a list of proposed features (and known issues).



## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<featureName>`)
3. Commit your Changes (`git commit -m '<Description of the feature added>'`)
4. Push to the Branch (`git push origin feature/<featureName>`)
5. Open a Pull Request



## Contact

Vinícius Kruchelski Gugelmin - vinigugelmin@gmail.com

Project Link: [https://github.com/viniciusgugelmin/office-bot](https://github.com/viniciusgugelmin/office-bot)
