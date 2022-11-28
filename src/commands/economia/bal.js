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
        //var userdbatt = await <model>>.findOne({ '_id': `${interaction.user.id}` })
        console.log(interaction.user.db)
		await interaction.reply({ content: `Aqui vem suas coins`});
	}
}