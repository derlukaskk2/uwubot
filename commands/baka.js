const Discord = require('discord.js')
const superagent = require('superagent');
module.exports.config = {
  name: "baka",
  aliases: ["Baka",]
}
exports.run = async (client, message, args, tools) => {
  message.delete();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/baka");
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("Baka")
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Bakas", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
