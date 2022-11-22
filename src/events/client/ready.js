const Event = require('../../structures/Event')
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = class extends Event {
  constructor(client){
    super(client, {
      name: 'ready'
    })
  }
  run = async () => {
    this.client.user.setStatus('idle');
    console.log(`Bot ${this.client.user.username} logado com sucesso em ${this.client.guilds.cache.size} servidores.`)
    this.client.registryCommands()
    await this.client.connectToDatabase()
    let canal = this.client.channels.cache.get("1044394863648571432")
    if (!canal) return console.log("X Não foi possivel achar o canal!")
  
  
    joinVoiceChannel({
    channelId: canal.id,
    guildId: canal.guild.id,
    adapterCreator: canal.guild.voiceAdapterCreator,
  });
  }
  
}