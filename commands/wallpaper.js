const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
	name: "wallpaper",
	aliases: ["Wallpaper"]
  }


exports.run = async (client, message, args, tools) => {
  message.delete();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    if(!message.channel.nsfw) return message.reply("NSFW ist nicht aktiviert");
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Wallpaper", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};

