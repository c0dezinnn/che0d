const Command = require('../../structures/Command')

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'mcskin',
            description: 'veja e baixe a skin de alguem do minecraft(somente original)',
            options: [
                {
                type: 'STRING',
                name:'nick',
                description: 'Nome do jogador',
                required: true,
                }
            ]
        })
    }
    run = async (interaction) => {
        const playername = interaction.options.getString('nick')

        const wait = require('util').promisify(setTimeout);

        try {
            const fetch = require('node-fetch');
            await fetch(`https://api.capybara-api.xyz/v1/image/random`)
                .then(data => data.json())
                
                .then(async images => {
                  await interaction.deferReply();
            await wait(3000);
            interaction.editReply({content: `${images.image_urls.original}`})
            if(!images) {
              console.log("imagem não existe!")
            }
            })
            } catch (err) {
                console.log(err)
              await interaction.deferReply();
              await wait(3000);
                interaction.editReply({content: `Algo deu errado...`})
            }
            }
	}