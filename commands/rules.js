const discord = require("discord.js");
const botconfig = ("../botconfig.json");

module.exports.run = async (bot, message, args) =>{
	message.delete();
	
	const permsembed = new discord.RichEmbed()
	
	permsembed.setTitle("OEPS!")
	permsembed.setColor("#ff0000")
	permsembed.setTimestamp();

	const embed = new discord.RichEmbed()
    embed.setTitle("𝐂𝐚𝐩𝐨𝐧𝐳𝐞 𝐋𝐞𝐚𝐤𝐬 | 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧")
	embed.setColor("#fa2f3d")
	embed.setDescription("● No advertising of other servers. \n ● It is forbidden to excessively insult other users. \n ● Not being a peasant. \n ● Do not disturb people on the voice channels without their consent. \n ● No bindami spamming on voice channels. \n ● Posting content on channels incompatible with their purpose is prohibited. \n ● It is recommended to correctly use the commands on the channels intended for this.")
	embed.setThumbnail("https://cdn.discordapp.com/emojis/773283967632801813.gif?v=1")
	embed.setTimestamp();

message.channel.send(embed)
}
	

module.exports.help = {
	name: "rules"
}