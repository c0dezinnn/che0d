const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton} = require('discord.js')
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
            name: 'vote',
            description: 'vote em mim e ganhe beneficios(ainda sem)',
            options: []
        })
    }

    run = async (interaction) => {
        await interaction.reply({ content: `${interaction.user.toString()}, você pode votar facilmente clicando no botão`, components: [row], ephemeral: true});
    }

}