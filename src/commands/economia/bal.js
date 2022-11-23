const Command = require('../../structures/Command')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'balance',
            description: 'Veja sua quantidade de ssfjhasfCOINS',
            requireDatabase: true,
            options: []
        })
    }
    run = async (interaction) => {
        console.log(interaction.user.db.infos)
		await interaction.reply({ content: `Aqui vem suas coins`});
	}
}