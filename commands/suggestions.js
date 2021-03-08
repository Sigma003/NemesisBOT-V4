const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const suggCool = new Set(); //Initialisation tag pour cooldown

module.exports = {
	name: 'sugg',
	description: '',
  args: true,
  	execute(message, args) {
      const ChannelID3 = '736211371431034929'
      var arg = args[0];
      var sugg = ""; //Initialisation de la suggestion
      var auteur = message.author.username;
      var a = args.length;
      for (let i = 0; i < a; i++) {
        sugg = sugg.concat(" " + args[i]); //Définit la suggestion
      };
		  const suggestion = { //Création de l'embed
            "embed": {
                "color": "2b3bff",
                //"author": `<@${auteur}>`,
                "fields": [
		            {
			              "name": `**📩 __Suggestion de ${auteur} :__**`,
			              "value": sugg + ". \n\ ",
		            },
                ],
                timestamp: new Date(),
                }
            }
      
//------------------------------Cooldown--------------------------------------------------
       if (suggCool.has(message.author.id) ) {
               message.delete();
            message.channel.send(`:exclamation: **Tu ne peux envoyer cette commande que toutes les __60 min__, ${message.author} !**`);
               return;
    } else {
//-----------------------------------------------------------------------------------------
      message.delete();  
      message.guild.channels.cache.find(i => i.name === '📪déclarations').send(suggestion) //Envoie le msg + réagit avec oui/non/neutre
              .then(function (message) {
              message.react('<:Oui:742817072693903363>');
              message.react('<:Neutre:742820960109068388>');
              message.react('<:Non:742817368748720249>');
            }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
          message.delete();
          message.channel.send("✅ **Votre suggestion à bien été envoyé " + message.author.username + " !** => <#781080317766795295>") //msg de confirmation
//------------------------------------Test si modo alors outrepasse cooldown------------------------------------------------------
      let modo = message.member.guild.roles.cache.get('730026607116419112'); //Récup le role modo (pas nécessaire)
      if (message.member.roles.cache.some(role => role.name === '🚨 | Modérateur')) { //Test si modo alors outrepasse cooldown
          return;
      } else {
        suggCool.add(message.author.id); //Donne le tag de cooldown qui empèche de renvoyer la commande
        setTimeout(() => {
          suggCool.delete(message.author.id); //Retire le tag de cooldown au bout d'1h
        }, 3600000);
    }
    }
        }};