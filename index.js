    require('dotenv').config()

const Client = require('./src/structures/Client')
const website = require('./src/website/index')
const pings = require('./urob.js')
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



client.login(process.env.BOT_TOKEN)