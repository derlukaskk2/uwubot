const Discord = require('discord.js')
const superagent = require('superagent');
module.exports.config = {
  name: "blowjob",
  aliases: ["Blowjob", "blow", "Blow"]
}
exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("Du musst jemanden pingen damit es geht uwu");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "407594859575246849") return message.reply("Don't blojob my Dev B-Baka")
    if (message.mentions.users.first().id == message.author.id) return message.reply("ich weiß nicht ob das möglich ist")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply("B-Baka, it's not like I like it or anything >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/blowjob");
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("Blowjob")
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`${message.author.username} gib ${message.mentions.users.first().username} einen Blowjob`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Blowjob", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};

