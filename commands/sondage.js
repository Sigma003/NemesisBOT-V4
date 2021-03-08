const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const sondCool = new Set(); //Initialisation du tag pour cooldown

module.exports = {
	name: 'sond',
	description: 'sondage',
  args: true,
  	execute(message, args) { 
     
      let auteur = message.author.username;
      let proposition = args[0]; //nombre d'émojis à mettre, en type string
      let nbrProposition = parseInt(proposition); //transfo en type nombre
      let sondagetxt = ""; //initialisation du msg du sondage
      let a = args.length;
      for (let i = 1; i < a; i++) {
        sondagetxt = sondagetxt.concat(args[i] + " "); //récup du sujet du sondage
      };
      
      if (isNaN(nbrProposition)) { //Si il a pas commencé par un nombre pour indiquer le nbr de propositions
        message.delete();
        message.channel.send(`:exclamation: **Tu dois indiquer le nombre de proposition\(s\) du sondage avant d'écrire celui-ci, ${message.author} ! Suis le modèle du \/help.**`)
        return;
      } else if (!sondagetxt) { //Si il a pas mis de txt de sondage
        message.delete();
        message.channel.send(`:exclamation: **Tu dois indiquer un sondage, ${message.author} ! Suis le modèle du \/help.**`)
        return;
      } 
        const sondageem = { //Création de l'embed
            "embed": {
                "color": "00FFFF",
                //"author": `<@${auteur}>`,
                "fields": [
		            {
			              "name": `**📊 __Sondage de ${auteur} :__**`,
			              "value": sondagetxt,
		            },
                ],
                timestamp: new Date(),
                }
            }

//-----------------------Cooldown ------------------------------------------
             if (sondCool.has(message.author.id) ) {
               message.delete();
            message.channel.send(`:exclamation: **Tu ne peux envoyer cette commande que toutes les __60 min__, ${message.author} !**`);
               return;
    } else {
//----------------------Envoie message--------------------------------------------
            switch (proposition) {
              case "1" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
              case "2" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
              case "3" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              message.react('<:3_:781129019340619776>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
               case "4" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              message.react('<:3_:781129019340619776>');
              message.react('<:4_:781129032115683328>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
               case "5" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              message.react('<:3_:781129019340619776>');
              message.react('<:4_:781129032115683328>');
              message.react('<:5_:781129047866081320>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
               case "6" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              message.react('<:3_:781129019340619776>');
              message.react('<:4_:781129032115683328>');
              message.react('<:5_:781129047866081320>');
              message.react('<:6_:781129060759633950>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
               case "7" :
                message.delete();
                message.guild.channels.cache.find(i => i.name === '📪déclarations').send(sondageem)
              .then(function (message) {
              message.react('<:1_:781128991494504478>');
              message.react('<:2_:781129005985693696>');
              message.react('<:3_:781129019340619776>');
              message.react('<:4_:781129032115683328>');
              message.react('<:5_:781129047866081320>');
              message.react('<:6_:781129060759633950>');
              message.react('<:7_:781129073472438283>');
              }).catch(function() {
             message.channel.send("**Il y a eu un problème en essayant de mettre les réactions !**")
             });
                message.channel.send("✅ **Votre sondage à bien été envoyé " + message.author.username + " !** => <#781080317766795295>")
                break;
              default :
                message.channel.send(`:exclamation: **Le nombre maximum de propositions est fixé à 7 !**`) //Si nbr fixé > 7
            }
//-----------------------------------Fin msg, modo outre-passe cooldown------------------------------------------------
      let modo = message.member.guild.roles.cache.get('730026607116419112'); //Obtenir role modo (pas nécessaire)
      if (message.member.roles.cache.some(role => role.name === '🚨 | Modérateur')) { //Test si c'est un modo alors outrepasse cooldown
          return;
      } else {
        sondCool.add(message.author.id); //Add le tag qui empèche d'envoyer encore la commande
        setTimeout(() => {
          sondCool.delete(message.author.id); //Retire le tag de cooldown au bout de 1h
        }, 3600000);
    }}
      
    }
}