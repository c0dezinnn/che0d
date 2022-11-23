const Event = require('../../structures/Event')

module.exports = class extends Event {
  constructor(client){
    super(client, {
      name: 'interactionCreate'
    })
  }
  run = async (interaction) => {
if(interaction.isCommand()){
  if (!interaction.guild) return
  
  const cmd = this.client.commands.find(c => c.name === interaction.commandName)

if (cmd) {
 if (cmd.requireDatabase) {
 interaction.guild.db =
 await this.client.db.guilds.findById(interaction.guild.id) ||
 new this.client.db.guilds({ _id: interaction.guild.id })
                
interaction.user.db =
await this.client.db.users.findById(interaction.user.id) || new this.client.db.users({ _id: interaction.user.id })
 }
 cmd.run(interaction)
  }
}
  }
}