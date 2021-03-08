
const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'ip',
	description: 'donne l\'adresse ip du serveur minecraft',
  args: false,
	execute(message, args) {
    message.delete();
    message.channel.send("**📰 Voici l\'adresse IP du serveur :** \`Nemesis.ouimc.fr\`")
  }};