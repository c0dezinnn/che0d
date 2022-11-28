const Command = require('../../structures/Command')
const { PIX } = require('gpix/dist');
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'buybalance',
            description: 'Compre ssfjhasfCOINS',
            requireDatabase: true,
            options: []
        })
    }

    run = async (interaction) => {
    (async () => {

        let pix = PIX.static()
        .setReceiverName('Lucas Casabona Braga')
        .setReceiverCity('Guarulhos')
        .setKey('whoc0deis@gmail.com')
        .setIdentificator(`${interaction.user.username}`) // optional
        .setDescription(`COMPRA DE COINS POR ${interaction.user.username}`) // optional
        .isUniqueTransaction(true) // optional
        .setAmount(0.50) // optional
    
    
        if(await pix.saveQRCodeFile(`./${interaction.user.id}qrcode.png`)) {
            const fs = require('fs')
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('imagepixsend')
                    .setLabel('Comprovante')
                    .setStyle('PRIMARY'),
            );
            console.log('success in saving static QR-code')
            const qrcodefile = fs.readFileSync(`${interaction.user.id}qrcode.png`)
            await interaction.reply({ content: `Aqui está`, files: [qrcodefile], components: [row], ephemeral: true});
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
            await delay(7000)
            fs.unlinkSync(`${interaction.user.id}qrcode.png`)
            
            
        } else {
            console.log('error saving QR-code')
        }
    })();

	}
}