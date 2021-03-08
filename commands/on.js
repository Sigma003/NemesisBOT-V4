const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'on',
	description: 'on',
  args: false,
	execute(message, args) {
    message.delete();
    message.channel.send("**✅ Le bot est bien en ligne !**")
  }};