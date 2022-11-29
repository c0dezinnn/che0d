const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton, MessageEmbed} = require('discord.js')
const row = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
                .setStyle('LINK')
                .setLabel('Vote por aqui')
                .setURL('https://top.gg/bot/1043726610936889425/vote')
        ]
    )


module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            description: 'Limpe o chat',
            options: [
                {
                    type: 'NUMBER',
                    name: 'quantidade',
                    description: 'Quantidade de mensagens que você deseja apagar',
                    required: true
                }
            ]
        })
    }

    run = async (interaction) => {
        let numero = interaction.options.getNumber('quantidade')

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else

        if (parseInt(numero) > 99 || parseInt(numero) <= 0) {
            return interaction.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription(`> **Digite uma quantidade de** \`1 - 99\`**.**`)
                    .setColor('RANDOM')
                ], ephemeral: true
            })
        } else {

        interaction.channel.bulkDelete(parseInt(numero))

        let embed = new MessageEmbed()
            .setDescription(`> ♻️ Limpeza concluida`)
            .setTimestamp()
            .setFooter({ text: `Limpado por: ${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
            .setColor('RANDOM')

        interaction.reply({ embeds: [embed] }).then(() => {
            setTimeout(() => {
                interaction.deleteReply()
            }, 5000)
        })


    }

}
}