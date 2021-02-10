const Discord =  require('discord.js');
module.exports.config = {
  name: "avatar",
  aliases: [""]
}

exports.run = (client, message, args) => {
  messgae.delete();
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
    	.setColor(Math.floor(Math.random()*16777215).toString(16))
        .setTitle(`Avatar von ${message.mentions.users.first().username}:`)
        .setImage(`${avatar}`)
        message.channel.send({embed});
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random()*16777215).toString(16))
      .setTitle(`Avatar von ${message.author.username}:`)
      .setImage(`${avatar + "?size=2048"}`)
      .setFooter("UwU Bot » Avatar", 'https://i.imgur.com/F6ufQNB.jpg');
      message.channel.send({embed});
    }
}
