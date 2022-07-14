# gm-bot-round12

## Vision:

This application will allow users to select specific channels/users and send them a "GM" message whenever the user opens Discord.

## Steps:

- [x] Figure out how to send messages via webhooks in Discord
- [ ] Figure out how to send messages to individual users with webhooks
- [ ] Create code for webhook to be triggered upon event
- [ ] Figure out how to code Discord being opened as the event
- [ ] Add database (MongoDB) for storing user/channel IDs
- [ ] Integrate database so that Vercel listens for when Discord is open and when it is, calls the Discord webhook to pull the user/channel IDs from the database and sends the "GM" message to them
- [ ] Create front end UI
