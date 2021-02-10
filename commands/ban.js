const Discord = require('discord.js');
module.exports.config = {
	name: "ban",
	aliases: ["Ban"]
  }

exports.run = (client, message, args) => {
  message.delete();
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Du musst jemanden pingen um diese person zu bannen silly').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.channel.send('I can\'t let you do that, self-harm is bad:facepalm:');
  if (user.id === client.user.id) return message.channel.send("You pleblord, how can you use a bot to ban itself?:joy:");
  if (message.mentions.users.first().id === "242263403001937920") return message.channel.send("You can't ban my Developer:wink:");
  if (reason.length < 1) reason = 'No reason supplied.';
  let botRolePossition = message.guild.member(client.user).roles.highest.position;
  let rolePosition = message.guild.member(user).roles.highest.position;
  let userRolePossition = message.member.roles.highest.position;
  if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Konnte nicht gebannt werden da du keine rechte daruf hast oder die person hat die gleichen rechte wie du uwu.")
  if (botRolePossition <= rolePosition) return message.channel.send("❌**Error:** konnte nicht gebannt werden da du keine Rchte auf den command hast.")
  if (!message.guild.member(user).bannable) {
    message.channel.send(`:redTick: Ich konnte die person nicht bannen da ich keine rechte daruf habe`);
    return
  }else{
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215).toString(16))
    .setAuthor("UwU Bot")
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
    .setFooter("UwU Bot » Ban", 'https://i.imgur.com/F6ufQNB.jpg');
    //let obj = JSON.parse(`{"days":7, "reason": ${reason}}`)
    if(user.bot) return;
    message.mentions.users.first().send({embed}).catch(e =>{
      if(e) return
    });
    message.guild.members.ban(user.id, {days:7, reason: reason})
    let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
    if  (!logchannel){
    message.channel.send({embed})
    }else{
      client.channels.cache.get(logchannel.id).send({embed});
      message.channel.send({embed})
    } 
    if(user.bot) return;
    message.mentions.users.first().send({embed}).catch(e =>{
      if(e) return 
    });
  }
};
