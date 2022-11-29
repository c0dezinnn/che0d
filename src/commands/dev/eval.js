const Command = require('../../structures/Command')
const {MessageActionRow, MessageButton, MessageEmbed} = require('discord.js')
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
            name: 'eval',
            description: 'Usado pelo meu desenvolvedor',
            options: [
                {
                    type: 'STRING',
                    name: 'code',
                    description: "O codigo que deseja executar",
                    required: true,
                }
            ]
        })
    }

    run = async (interaction) => {
        if(interaction.user.id != "700157765053841438"){
            interaction.reply({
              content: `${interaction.author} Você não tem permissão para fazer isso!`,
              ephemeral: true
              })
            } else {
              
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    
    try {
      let code = interaction.options.getString('code')
        
       
        for(let i = 0;i <= 3000;i++) {// o msg.s vem daq
           code=code.replace('&msg', 'message')
           code=code.replace('&send', 'interaction.channel.send')
           code=code.replace('&react', 'message.react')
           code=code.replace('&reply', 'message.reply')
          code=code.replace("process.env.TOKEN", "'for int token = secret'")
          code=code.replace("client.token", "'for int token = secret'")
          
        }
        //if()
        
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
      const resultado = new MessageEmbed()
      .setColor('BLUE')
      .setTitle('Comando executado com sucesso!')
      .setDescription(`\ \ \`\`\`xl\n${clean(evaled)}\n\`\`\``)
    
    interaction.reply({
      content: "aq",
       embeds: [resultado],
       ephemeral: true
       });
      } catch (err) {
        const erro = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('Aprende a programar antes de colocar comando que não existe p - p')
        .setDescription(`\ \ \`\`\`xl\n${clean(err)}\n\`\`\``)
        interaction.reply({
          content: "erro", 
          embeds: [erro],
          ephemeral: true
          });
    }
    }

}
}