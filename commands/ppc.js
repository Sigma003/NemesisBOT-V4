const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'ppc',
	description: 'ppc',
  args: true,
  	execute(message, args) {
    var msgppc = message.content 
    var choix = msgppc.substring(5) //Obtient le choix
    var choixbot = ["Pierre","Papier","Ciseaux"] //Possibilités de choix du bot
    var fppcbot = [":rock: ",":page_facing_up: ",":scissors: "] //Emoji correspondant
    var randomppc = Math.floor(Math.random() * choixbot.length)
    var repbot = choixbot[randomppc];
    var repbotf = fppcbot[randomppc] + repbot; //Définit le choix du bot et y ajout l'emoji
    if (choix === "Pierre") { //Ajout l'émoji au choix de l'utilisateur
      var choixf = ":rock: " + choix
    }
    else if (choix === "Papier"||choix === "papier") {
      var choixf = ":page_facing_up: " + choix
    }
    else if (choix === "Ciseaux"||choix === "ciseaux"||choix === "Ciseau"||choix === "ciseau") {
      var choixf = ":scissors: " + choix
    }
    else if (choix === "Puit"||choix == "puit") {
      message.channel.send("> ✅ **Bien tenté ! Bon... je suppose que tu as gagné du coup !**");
      return;
    }
    else {
      message.delete();
      message.channel.send("> :x: **Tu dois indiquer ce que tu veux jouer !**"); //Si n'a rien choisit ou pas dans la liste
      return;
    }
    message.delete();
    message.channel.send("\`\`\`Partie de PPC : BOT vs " + message.author.username + "\`\`\`")
    message.channel.send("> :speaking_head: **Tu as jouer : __" + choixf + "__ et le Bot a jouer : __" + repbotf + "__ !** :robot:");
    if (repbot === choix) { //Si égalité
      message.channel.send("> :arrows_clockwise: **Egalitée !**");
      return;
    }
    else if (choix === "Papier") { //Sinon toutes les autres possibilités
      if (repbot === "Pierre") {
        message.channel.send("> :tada: **Bravo tu as gagné !**");
      }
      else if (repbot === "Ciseaux") {
        message.channel.send("> :sleepy: **C'est le Bot qui a gagné ! dommage...**");
      }
      else {
        message.channel.send("> :no_entry_sign: **OUPS !** *Il semblerait qu'il y a eu un problème pour déterminer le vainqueur...*");
        return;
      }
    }
    else if (choix === "Pierre") {
      if (repbot === "Papier") {
        message.channel.send("> :sleepy: **C'est le Bot qui a gagné ! dommage...**");
      }
      else if (repbot === "Ciseaux") {
        message.channel.send("> :tada: **Bravo tu as gagné !**");
      }
      else {
        message.channel.send("> :no_entry_sign: **OUPS !** *Il semblerait qu'il y a eu un problème pour déterminer le vainqueur...*");
        return;
      }
    }
    else if (choix === "Ciseaux") {
      if (repbot === "Papier") {
        message.channel.send("> :tada: **Bravo tu as gagné !**");
      }
      else if (repbot === "Pierre") {
        message.channel.send("> :sleepy: **C'est le Bot qui a gagné ! dommage...**");
      }
      else {
        message.channel.send("> :no_entry_sign: **OUPS !** *Il semblerait qu'il y a eu un problème pour déterminer le vainqueur...*");
        return;
      };
    };
    }
}