const discord = require("discord.js");

module.exports.run = async(Client, message, args) =>{

    

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var muteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!muteUser) return message.reply("Kan de gebruiker niet vinden.");

    if (!args[0]) return message.reply("Gelieve een reden op te geven.");

    var reason = args.slice(1).join(" ");  

    var muteEmbed = new discord.MessageEmbed()
     .setColor("#a52a2a")
     .setTimestamp()
     .setTitle("Person Muted!")
     .setThumbnail("https://cdn.discordapp.com/attachments/714563453091577928/726059761333829652/317367-2001---action2.png")
     .setDescription(`** Muted person:** ${muteUser} (${muteUser.id})
     **Muted By:** ${message.author}
     **Reason: ** ${reason}`);

    var muteRole = message.guild.roles.cache.get('727620005080072242');
    if(!muteRole) return message.channel.send("can't find the role Muted")

    await(muteUser.roles.add(muteRole.id));
    message.reply(muteEmbed)
   
}

module.exports.help = {
    name: "mute"
}