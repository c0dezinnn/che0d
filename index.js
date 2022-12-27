    require('dotenv').config()

const Client = require('./src/structures/Client')
const website = require('./src/website/index')
const client = new Client({
  intents: [
    'GUILDS',
'GUILD_MESSAGE_REACTIONS',
'GUILD_MESSAGES',
'GUILD_INVITES',
'GUILD_VOICE_STATES',
'GUILD_MEMBERS',
'GUILD_PRESENCES'
  ]
})

console.log("começou a saga do nuggets..")

client.login(process.env.BOT_TOKEN)