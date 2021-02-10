const {
    Client,
    Collection,
    MessageEmbed
  } = require('discord.js');
let Parser = require('rss-parser');
let parser = new Parser();
const fs = require('fs');
const index = require("./../index.js");
module.exports.config = {
  name: "about",
  aliases: ["info", "infos"]
}
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215).toString(16))
  .setAuthor("UwU Bot")
  .setThumbnail('https://i.imgur.com/F6ufQNB.jpg')
  .addFields(
    { name: 'Version', value: index.version, inline: true },
    { name: 'Developer', value: index.developers.join(",\n"), inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: 'CommandPrefix', value: index.prefix, inline: true },
  )
  .setTimestamp()
  .setFooter("UwU Bot » Informationen", 'https://i.imgur.com/F6ufQNB.jpg');
  msg.channel.send({embed});
};
