const Command = require('../../structures/Command')

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            description: 'Me chame ao seu servidor',
            options: []
        })
    }
	run = async (interaction) => {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Click me!')
					.setStyle('LINK')
                    .setURL("https://bit.ly/eopinvite"),
                    //.setEmoji('123456789012345678'),
			);
		await interaction.reply({ content: 'Me adicione pelo o botão abaixo', ephemeral: true, components: [row] });
	}
}