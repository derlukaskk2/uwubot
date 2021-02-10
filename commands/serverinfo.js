const Discord = require('discord.js');
module.exports.config = {
	name: "serverinfo",
	aliases: ["Serverinfo"]
  }


function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = (client, message, args) => {
    message.delete();
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.cache.size;
    }

    const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("ID", message.guild.id, true)
  .addField("Owner", `「⛓𝙉𝙤𝙧𝙖⛓」#8564`, true)
  .addField("Region", region[message.guild.region], true)
  .addField("User Count", message.guild.memberCount, true)
  .addField("Member Count", message.guild.members.cache.filter(m => !m.user.bot).size, true)
  .addField("Bot Count", message.guild.members.cache.filter(m => m.user.bot).size, true)
  .addField("AFK Timeout", message.guild.afkTimeout / 60 + ' minutes', true)
  .addField("Roles", message.guild.roles.cache.size, true)
  .addField("Channels", message.guild.channels.cache.size, true)
  .addField("Emojis", `${emojis}/100`, true)
  .addField("Verification Level", message.guild.verificationLevel, true)
  .setColor(Math.floor(Math.random()*16777215))
  .setTimestamp()
  .setFooter("UwU Bot » ServerInfo", 'https://i.imgur.com/F6ufQNB.jpg');
  message.channel.send({embed});
}
