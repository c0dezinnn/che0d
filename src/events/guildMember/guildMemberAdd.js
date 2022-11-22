const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'guildMemberAdd'
        })
    }

    run = async (member) => {
      if(member.guild.id == '957769863311548426')
 member.roles.add("957803071956729937").then(console.log('Role added: ' + member.id));
      
        const guildDB = await this.client.db.guilds.findById(member.guild.id)

        if (guildDB?.welcome) {
            const welcomeChannel = member.guild.channels.cache.get(guildDB.welcome.channel)
          const welcomemessage = guildDB.welcome.welcomemsg

            welcomeChannel?.send(`${member.toString()}, ${welcomemessage}`)
        }
    }
}