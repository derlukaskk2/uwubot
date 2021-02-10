const {
    Client,
    Collection,
    MessageEmbed,
    MessageManager
  } = require('discord.js');
var client = new Client();
var token = "ODA3Mjc1Njk4ODEyMzU0NjUw.YB1oFQ.l5yvqs_xWB8xxjPecw_icTyiOPo";
client.login(token);
const fs = require('fs');
const prefix = "%";
const version = "1.8.6";
const developers = ["DerLukas"];


//exports
exports.version = version;
exports.developers = developers;
exports.prefix = prefix;


client.commands = new Collection()
client.aliases = new Collection();
const newUsers = [];


// Requires Manager from discord-reaction-role
const ReactionRoleManager = require("discord-reaction-role");
// Starts updating currents reaction roles
const manager = new ReactionRoleManager(client, {
    storage: "./reaction-role.json"
});
// We now have a reactionRoleManager property to access the manager everywhere!
client.reactionRoleManager = manager;


//rpc.on('ready', () => {
//    rpc.setActivity({
//        details: "FastMC.net » Army",
//		state: "Online",
//		//largeImageText: "FastMCNET • Bot",
//		//smallImageText: "FastMC.net",
//        //instance: false,
//        largeImageKey: "avatar",
//		partySize: 5,
//		partyMax: 50,
//		startTimestamp: new Date()
//    });
//});

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity("Call of Duty®: Mobile", "alone", { type: "PLAYING"})
  })
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    if (jsfile.length <= 0) {
      return console.log("No commands there.");
    }
    jsfile.forEach((file, i) => {
      let pullcmd = require(`./commands/${file}`)
      client.commands.set(pullcmd.config.name, pullcmd)
      pullcmd.config.aliases.forEach(alias => {
        client.aliases.set(alias, pullcmd.config.name)
      })
      console.log(`| ${file} loaded |`);
    })
  });


  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);

})
client.reactionRoleManager.on('reactionRoleAdded',(reactionRole,member,role,reaction) => {
  console.log(`${member.user.username} added his reaction \`${807038793390620752}\` and won the role : ${807290225927258173}`);
})
client.reactionRoleManager.on("reactionRoleRemoved", (reactionRole, member, role, reaction) => {
  console.log(`${member.user.username} removed his reaction \`${807038793390620752}\` and lost the role : ${807290225927258173}`)
});
