const Event = require('../../structures/Event')
const { MessageEmbed } = require('discord.js')
const request = require('request')
const fs = require('fs')
module.exports = class extends Event {
  constructor(client){
    super(client, {
      name: 'interactionCreate'
    })
  }
  run = async (interaction) => {

if(interaction.isButton()) {

  if(interaction.customId == "imagepixsend") {
    const embed = new MessageEmbed()
  .setTitle(`Favor envie o seu comprovante de pagamento`)
  .setDescription(`Como faço o envio???\nApenas envie a imagem, relaxa eu apago logo depois que você enviar(você tem 5 minutos para enviar!) \nAVISO: Não envie a foto em sites de foto como prtsc, etc. Envie diretamente pelo discord\nApós o envio aguarde de 1 a 48 horas para receber o beneficio(pode ser até menos!)`)
  .setColor('DARK_BLUE')
  .setTimestamp();
    interaction.reply({ content: `Aqui vem o monstro`, embeds: [embed], ephemeral: true });

    const msg_filter = (m) => m.author.id === interaction.user.id
interaction.channel.awaitMessages({ filter: msg_filter, max: 1 })
  .then((collected) => {
    const urlimage = collected.first().attachments.first().url

    this.client.channels.cache.get(`1046494974306439301`).send(`${urlimage} <@${interaction.user.id}>`)
    })
  
}

}

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