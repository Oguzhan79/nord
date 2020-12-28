const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(); 

    const permsembed = new discord.RichEmbed()
	
	permsembed.setTitle("OEPS!")
	permsembed.setColor("#ff0000")
	permsembed.setDescription("Je Hebt Niet De Juiste Permissions Haal Iemand Anders Erbij Met De Permissies | You Don't Have The Right Permissions Get Someone Else With The Permissions")
	permsembed.setFooter("©NL/EN FiveM Shop")
	permsembed.setTimestamp();

    var splitser = "//";

    if(args[0] == null){

        var userMesagge = new discord.RichEmbed()
        .setTitle("Hoe?")
        .setColor("00ee00")
        .setDescription(`Om een update te maken moet je dit typen: \n -mededeling Bericht`);

        return message.channel.send(userMesagge);

    }

    args = args.join(" ").split(splitser);


    var options = {

        bericht: args[0] || "Geen inhoud opgegeven",

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
    .setTitle("Mededeling!")
    .setColor("#3700ff")
	.setAuthor(message.author.username , message.author.avatarURL)
	.setThumbnail("https://www.google.com/search?q=fivem+logo&sxsrf=ALeKk03y3oHcfD6LkHrscdvtRXVhSmGWpQ:1604745963084&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn2dXIoPDsAhXOqaQKHWWyA_IQ_AUoAXoECAQQAw&biw=1920&bih=979#imgrc=69VjpWT89GwZ4M")
    .setDescription(`\n\n ${options.bericht} \n\n **FiveM Shop**`)
    .setFooter("©NL/EN FiveM Shop", "https://www.google.com/search?q=fivem+logo&sxsrf=ALeKk03y3oHcfD6LkHrscdvtRXVhSmGWpQ:1604745963084&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn2dXIoPDsAhXOqaQKHWWyA_IQ_AUoAXoECAQQAw&biw=1920&bih=979#imgrc=69VjpWT89GwZ4M")
    .setTimestamp();

    var anncementChannel = message.guild.channels.find(`name`, `📥invites`);
    if(!anncementChannel) return message.channel.send("Kan het kanaal niet vinden");
    

    anncementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "mededeling"
}