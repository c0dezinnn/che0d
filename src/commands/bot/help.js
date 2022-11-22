const Command = require('../../structures/Command')

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            description: 'Está com duvidas?',
            options: []
        })
    }
    run = async (interaction) => {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('ajuda!')
                    .setStyle('LINK')
                    .setURL("https://example.com"),
                    //.setEmoji('123456789012345678'),
			);
		await interaction.reply({ content: 'Aqui vem a ajuda!', components: [row] });
	}
}