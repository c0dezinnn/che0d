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
            name: 'capivara',
            description: 'Veja uma curiosidade e uma imagem de capivaras',
            options: []
        })
    }

    run = async (interaction) => {

        const wait = require('util').promisify(setTimeout);

        try {
            const fetch = require('node-fetch');
            await fetch(`https://api.capybara-api.xyz/v1/image/random`)
                .then(data => data.json())
            }catch (err) {
                console.log(err)
              await interaction.deferReply();
              await wait(3000);
                interaction.editReply({content: `Opa essa conta com esse nick não foi encontrada! caso ela seja de pirata não havera como ver ela.`})
            }

    }
}
