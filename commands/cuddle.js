const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
  name: "cuddle",
  aliases: ["Cuddle"]
}
exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("You need to ping silly");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Aww! cuddles you ")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply(">///< cuddles dev-san")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setAuthor("UwU Bot")
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
    .setImage(body.url)
    .setTimestamp()
    .setFooter("UwU Bot » Cuddle", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
