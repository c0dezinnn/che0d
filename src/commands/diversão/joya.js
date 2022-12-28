const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton} = require('discord.js')
const fs = require('fs')
const row = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
                .setStyle('LINK')
                .setLabel('Reportar erro')
                .setURL('https://github.com/c0dezinnn/che0d/issues/new')
        ]
    )


module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'joya',
            description: 'the king joya',
            options: []
        })
    }

    run = async (interaction) => {
        const wait = require('util').promisify(setTimeout);
        const joya = fs.readFileSync(`./imgs/joya.png`)
        await interaction.deferReply();
        await wait(2000);
        interaction.editReply({files: [joya]})
    }
	}