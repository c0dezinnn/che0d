const Command = require('../../structures/Command')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'config',
      description: 'Configuração do bot',
      requireDatabase: true,
      options:[
        {
          type: 'SUB_COMMAND_GROUP',
          name: 'welcome',
          description: 'Configuração de boas vindas',
          options: [
            {
              type: 'SUB_COMMAND',
              name: 'canal_entrada',
              description: 'configurar o canal onde será enviada',
              options: [
                {
                  type: 'CHANNEL',
                  name: 'canal',
                  description: 'canal de texto onde será enviada!',
                  required: true
                }
              ]
            },
            {
              type: 'SUB_COMMAND',
              name: 'mensagem_entrada',
              description: 'Configurar a mensagem que sera enviada',
              options: [
                {
                  type: 'STRING',
                  name: 'mensagem',
                  description: 'Mensagem que sera enviada',
                  required: true
                }
              ]
            }
          ]
        }
      ]
    })
  }

  run = (interaction) => {
  if (!interaction.member.permissions.has('MANAGE_GUILD')) return interaction.reply({ content: 'Você não tem permissão para utilizar este comando!', ephemeral: true })

        const subCommandGroup = interaction.options.getSubcommandGroup()
        const subCommand = interaction.options.getSubcommand()

        require(`../../subCommands/config/${subCommandGroup}/${subCommand}`)(this.client, interaction)
  }
}