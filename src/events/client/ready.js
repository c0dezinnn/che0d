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
    let canalvoz = this.client.channels.cache.get("1046621344378400778")
    if (!canalvoz) return console.log("X Não foi possivel achar o canal!")
  
  
    joinVoiceChannel({
    channelId: canalvoz.id,
    guildId: canalvoz.guild.id,
    adapterCreator: canalvoz.guild.voiceAdapterCreator,
  });

  const { AutoPoster } = require('topgg-autoposter')

  const ap = AutoPoster(process.env.topggtoken, this.client)
  
  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })

  }
  
}