const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'gif',
	description: 'gif',
  args: false,
	execute(message, args) {
    message.channel.send("https://s4.gifyu.com/images/Nemesis.gif")
  }};