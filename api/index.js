const { Client, Intents } = require('discord.js');

require('dotenv').config();

export default function handler(request, response) {

    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => {
    console.log('The bot is ready')
});

client.login(process.env.TOKEN);

    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }


