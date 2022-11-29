const Event = require('../../structures/Event')
module.exports = class extends Event {
  constructor(client){
    super(client, {
      name: 'guildCreate'
    })
  }
  run = async (guild) => {
    console.log(guild.name)
}
}