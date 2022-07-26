const fetch = require("node-fetch");

module.exports = async (request, response) => {
  const message = {
    content: "GM",
    username: "Bot",
  };

  const getWebhook = await fetch(
    `https://discord.com/api/channels/${process.env.CHANNEL_ID}/webhooks`
  );

  const sendMessage = await fetch(
    `https://discord.com/api/webhooks/${process.env.CHANNEL_ID}/nVAuRueDlqSjLgMazEr5Uptg2IdNJqdzL4QzrPyQ3g-N9yZTXIcBh0BSK75XfeVEQ8ji`,
    {
      method: "POST",
      body: JSON.stringify({ message }),
    }
  );

  response.status(200).json({
    message,
  });
};

//Get webhook from discord (POST request); pull channel ID & token for POST request to execute w/message object; once the message is sent, DELETE req to delete the webhook.
