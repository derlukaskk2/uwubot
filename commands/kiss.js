const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
  name: "kiss",
  aliases: ["Kiss"]
}

exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("Du musst jemanden pingen damit es geht uwu");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.reply("No kissing unless you're my Dev :<")
    if (message.mentions.users.first().id == message.author.id) return message.reply("ich weiß nicht ob das möglich ist")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply("B-Baka, it's not like I like it or anything >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("UwU Bot")
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`${message.author.username} küsst ${message.mentions.users.first().username} >:3`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Kiss", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
