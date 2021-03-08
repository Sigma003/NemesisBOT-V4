const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'discord',
	description: 'donne un lien pour le discord',
  args: false,
	execute(message, args) {
    message.delete();
    message.channel.send("🔗 **Voici un lien d\'invitation pour le serveur :** \`https://discord.gg/Y9FCaFD\`")
  }};