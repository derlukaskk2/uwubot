const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
    name: "spank",
    aliases: ["Spank"]
  }
exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to spank them");
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    if(message.mentions.users.first().id === "407594859575246849") return message.reply('You can\'t spank my Dady baka.');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`${message.mentions.users.first().username}, you got spanked in da butt by ${message.author.username} >:3`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Spank", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
