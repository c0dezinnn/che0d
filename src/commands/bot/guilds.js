const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton} = require('discord.js')
const { InteractionResponseTypes } = require('discord.js/typings/enums')
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
            name: 'guilds',
            description: 'seu pai',
            options: []
        })
    }

    run = async (interaction) => {

if(interaction.user.id === "700157765053841438") {

        await interaction.reply({ content: `${interaction.user.toString()}, estou em ${this.client.guilds.cache.size} servidores nesse momento`});
} else {
    Interaction.reply("Só a equipe pode usar isto")
}
    }

}