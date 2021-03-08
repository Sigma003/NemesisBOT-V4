const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'verre',
	description: 'verre',
  args: false,
	execute(message, args) {
    message.delete();
    let auteur = message.author.username
    message.channel.send("**🍷 Et un verre pour monsieur " + auteur + " !**");
  }};