const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
  name: "poke",
  aliases: ["Poke"]
}


exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("du musst jemanden pingen silly");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:497742636439044096>');
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke")
    .catch(e => {
      if(e) {
        message.channel.send("Oops, something broke...")
        console.log(e)
      }
    })
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`${message.mentions.users.first().username}, you got poked by ${message.author.username}`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Poke", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};

