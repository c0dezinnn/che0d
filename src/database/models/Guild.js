const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
    _id: String,
    configs: {
      prefix: String
    },    
    welcome: {
        channel: String,
        welcomemsg: String
    }
})

module.exports = model('guilds', guildSchema)