const Command = require('../../structures/Command')

const moment = require("moment");
require("moment-duration-format");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            description: 'Quanto tempo estou online',
            options: []
        })
    }

    run = async (interaction) => {
        const duration = moment.duration(this.client.uptime).format(" D [dias], H [horas], m [min], s [segundos]");
        await interaction.reply({ content: `${duration}`});
    }

}