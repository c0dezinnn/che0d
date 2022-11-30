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
                
                .then(async images => {
                  await interaction.deferReply();
            await wait(1000);
            interaction.editReply({content: `${images.image_urls.original}`})
            if(!images) {
              console.log("imagem não existe!")
            }
            })
            } catch (err) {
                console.log(err)
              await interaction.deferReply();
              await wait(1000);
                interaction.editReply({content: `Algo deu errado, reporte o erro pelo botão abaixo`, components: [row]})
            }
            }
	}