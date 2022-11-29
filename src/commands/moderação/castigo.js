const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton, MessageEmbed} = require('discord.js')
const ms = require('ms')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'castigo',
            description: 'deixe alguem de castigo',
            options: [
                {
                    name: "membro",
                    type: "USER",
                    description: "Mencione um usuário para ser punido.",
                    required: true
                    
                },
                {
                    name: "tempo",
                    type: "STRING",
                    description: "Coloque o tempo de duração do castigo em millesegundos.",
                    required: true
                    
                },
                {
                    name: "motivo",
                    type: "STRING",
                    description: "Coloque o motivo do castigo.",
                    required: true
                    
                }
            
            ],
        })
    }

    run = async (interaction) => {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.` })
        } else {

        let usuario = interaction.options.getUser("membro");

        let membro = interaction.guild.members.cache.get(usuario.id);
        let tempo = interaction.options.getString("tempo");
        let motivo = interaction.options.getString("motivo");

        let duracao = ms(tempo);

        if (!membro) {
            interaction.reply({ content: `O usuário não está no servidor.` })
        } else if (!duracao) {
            interaction.reply({ content: `Insira um tempo válido.` })
        } else {
            membro.timeout(duracao, motivo).then( () => {
                interaction.reply({ content: `O membro \`${membro.user.tag}\` foi punido por \`${tempo}\`, pelo motivo \`${motivo}\`.`, ephemeral: false })
            })
        }

    }

}
}