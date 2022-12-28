const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton} = require('discord.js')
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
            description: 'The king joya',
            options: []
        })
    }

    run = async (interaction) => {
        
    }
	}