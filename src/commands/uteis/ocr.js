const Command = require('../../structures/Command')
const request = require('request')
const fs = require('fs')
module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'ocr',
      description: 'pegue o texto de uma imagem',
      options: [
        {
            name: 'imagem',
            required: true,
            description: 'imagem para virar texto',
            type: 'ATTACHMENT',
        }
      ]
    })
  }

  run = async (interaction) => {
    const wait = require('util').promisify(setTimeout);
    const image = interaction.options.getAttachment('imagem')
    const imageURL = image.url
    const imagename = `${interaction.user.id}ocrimage.png`
    request(imageURL).pipe(fs.createWriteStream(imagename));
    await interaction.deferReply();
    await wait(3000);
    interaction.editReply({content: `Ainda em desenvolvimento`})
  }
}
