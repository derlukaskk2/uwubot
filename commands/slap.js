const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
    name: "slap",
    aliases: ["Slap"]
  }

exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("Du musst jemanden pingen silly");
    if(message.mentions.users.first().id === "407594859575246849") return message.reply('You can\'t hurt him you pleblord.');
    if (message.mentions.users.first().id == client.user.id && message.author.id === "242263403001937920"){
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");
      
      const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random()*16777215).toString(16))
      .setTitle(`No u! slaps${message.mentions.users.first().username}`)
      .setImage(body.url) 
      .setFooter(`By DerLukas ${customisation.ownername}`);
      return message.channel.send({embed})
    }else if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920"){
      return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU **owwie**")
    }
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`OwO, ${message.mentions.users.first().username} u got slappt by ${message.author.username}`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Slap", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};