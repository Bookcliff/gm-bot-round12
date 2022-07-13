const DiscordJS = require('discord.js');

require('dotenv').config();

const client = new DiscordJS.Client()

client.on('ready', () => {
    console.log('The bot is ready')
})

client.login(process.env.TOKEN)

