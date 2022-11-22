module.exports = (client, interaction) => {
    const mensagem = interaction.options.getString('mensagem')

    interaction.guild.db.welcome = { welcomemsg: mensagem }

    interaction.guild.db.save()

    interaction.reply({ content: 'Perfeito sera essa a mensagem enviada quando alguem entrar!', ephemeral: true })
}