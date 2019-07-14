const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599923460776525848")
setInterval(function() {
channel.send(`كسمك كسمك كسمك كسمك كسمك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);