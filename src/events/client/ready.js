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
    let activities = [
      `${this.client.guilds.cache.size} servidores`,
      `${this.client.users.cache.size} usuarios`,
      `Criado pelo C0de#6969`
  ],
  i = 0;
  setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "WATCHING" //WATCHING, LISTENING, PLAYING, STREAMING
  }), 10000);// Defina o tempo do bot em mi
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
  setInterval(() => {
    const { AutoPoster } = require('topgg-autoposter')

  const ap = AutoPoster(process.env.topggtoken, this.client)
  
  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })
  }, 100000)

  }
  
}