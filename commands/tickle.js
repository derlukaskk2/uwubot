const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.config = {
  name: "tickle",
  aliases: ["Tickle", "kitzeln", "Kitzeln"]
}

exports.run = async (client, message, args, tools) => {
  message.delete();
    if (!message.mentions.users.first()) return message.reply("Du jemanden pingen silly");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('You can\'t tickle him. He will explode on impact!');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu das kitzelt")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setTitle(`${message.mentions.users.first().username}, du wurdest von ${message.author.username} gekitzelt`)
    .setImage(body.url) 
    .setTimestamp()
    .setFooter("UwU Bot » Tickle", 'https://i.imgur.com/F6ufQNB.jpg');
    message.channel.send({embed})
};
