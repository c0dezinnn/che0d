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
        button: new MessageButton().setCustomId(`openTicket-1057488572950794350`).setLabel(`Denuncias`).setEmoji('💥').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Seja bem vindo ao ticket de denuncias'),
        name: 'denuncias',
        id: '1057823219589070898',
        staffRole: '835221457159847977'
    },
    {
        button: new MessageButton().setCustomId(`openTicket-1057488623949328415`).setLabel(`Suporte do servidor`).setEmoji('💌').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Bem vindo ao suporte'),
        name: 'suporteservidor',
        id: '1057823274328932502',
        staffRole: '835221457159847977'
    }
]