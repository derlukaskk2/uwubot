const Discord = require('discord.js')
const superagent = require('superagent');
module.exports.config = {
  name: "pussy",
  aliases: ["Pussy",]
}
exports.run = async (client, message, args, tools) => {
  message.delete();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/pussy");
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("Pussy")
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Pussy", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
