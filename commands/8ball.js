const Discord = require("discord.js");
module.exports.config = {
	name: "8ball",
	aliases: ["askme",]
  }

exports.run = async (bot, message, args) => {
  message.delete();
	if(!args[0]) return message.reply("Bitte frag was Richtiges");
    let replies = [
		'Nö',
		'Woher soll ich das bitte wissen?',
		'Ja',
		'Computer sagt nein',
    'Cmputer sagt ja',
    'Vieleicht',
    'Das würde ich so nicht sagen',
    'lass mich damit in ruhe',
    'ich mach da nicht mit',
    'warum?',
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("Askme")
	.setColor(Math.floor(Math.random()*16777215).toString(16))
    .addField("Frage:", question)
	.addField("Antwort:", replies[result])
  .setFooter("UwU Bot » Askme", 'https://i.imgur.com/F6ufQNB.jpg');

    message.channel.send({embed});
}
