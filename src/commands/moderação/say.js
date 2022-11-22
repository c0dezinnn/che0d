const Command = require('../../structures/Command')
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      description: 'Faz o bot enviar alguma mensagem.',
      options: [
        {
          name: 'mensagem',
          type: 'STRING',
          description: 'A mensagem que será enviada',
          required: true
        }
      ]
    })
  }

  run = async (interaction) => {
    if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: "Você não tem permissão para usar esse comando", ephemeral: true })

    const channels = interaction.guild.channels.cache
      .filter(c => c.type === 'GUILD_TEXT' && c.permissionsFor(this.client.user.id).has(['SEND_MESSAGES', 'EMBED_LINKS']) && c.permissionsFor(interaction.user.id).has(['SEND_MESSAGES']))

    if (!channels.size) return interaction.reply({ content: "Não consigo enviar mensagem em nenhum canal do servidor!", ephemeral: true })

    const actionRow = new MessageActionRow()
      .addComponents([
        new MessageSelectMenu()
          .setCustomId('channelSelect')
          .setPlaceholder('Escolha um canal')
          .addOptions(
            channels
              .map(c => {
                return {
                  label: c.name,
                  value: c.id
                }
              })
          )
      ])
    const reply = await interaction.reply({
      content: "Selecione o canal no menu abaixo!",
      components: [actionRow],
      fetchReply: true
    })
    const filter = (i) => i.user.id === interaction.user.id
    const collector = reply.createMessageComponentCollector({ filter, max: 1, time: (3 * 60000) })

    collector.on('collect', (i) => {
      const idCanal = i.values[0]
      const canal = interaction.guild.channels.cache.get(idCanal)

      const texto = interaction.options.getString('mensagem')

      const embed = new MessageEmbed()
        .setTitle(`Uma mensagem foi enviada neste canal.`)
        .setDescription(texto)
        .setColor('#0000ff')
        .setFooter({
          text: `Enviado por ${interaction.user.username}`
        })
        .setTimestamp()

      canal.send({ embeds: [embed] })
        .then(() => interaction.editReply({ content: `Mensagem enviada com sucesso no canal ${canal.toString()}.`, components: [] }))
        .catch(() => interaction.editReply({ content: `ERRO | Erro ao tentar enviar a mensagem no canal.`, components: [] }))
    })

    collector.on('end', (collected, reason) => {
      if (reason === 'time') interaction.editReply({ content: 'O tempo para informar o canal se esgotou!', components: [] })
    })
  }
}

module.exports
/*
  const texto = interaction.options.getString('mensagem')

const embed = new MessageEmbed()
.setTitle(`Uma mensagem enviada nesse canal`)
.setDescription(texto)
.setColor('#0000ff')
.setFooter({
  text: `Mensagem enviada por ${interaction.user.username}!`
})
.setTimestamp()

  canal.send({ embeds: [embed] })
  .then(() => interaction.reply({content: "Mensagem enviada com sucesso!", ephemeral: true}))
  .catch(() => interaction.reply({content: "Erro ao tentar enviar a mensagem no canal, eu tenho permissão?", ephemeral: true}))
  */
