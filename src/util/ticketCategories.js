const { MessageButton, MessageEmbed } = require('discord.js')
/*
    {
        button: MessageButton,
        embed: MessageEmbed,
        name: String,
        id: String
    }
*/

module.exports = [
    {
        button: new MessageButton().setCustomId(`openTicket-1046833233154818129`).setLabel(`Suporte do bot`).setEmoji('🛒').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Seja bem vindo ao suporte'),
        name: 'suportebot',
        id: '1046833233154818129',
        staffRole: '1046621307980234852'
    },
    {
        button: new MessageButton().setCustomId(`openTicket-1046834458034192484`).setLabel(`Suporte do servidor`).setEmoji('📞').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Bem vindo ao suporte'),
        name: 'suporteservidor',
        id: '1046834458034192484',
        staffRole: '1046621307980234852'
    }
]