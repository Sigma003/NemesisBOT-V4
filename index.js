const fs = require('fs');
const Discord = require('discord.js');
const token = process.env.CLIENT_TOKEN;
const prefix = "/";

const client = new Discord.Client();
const express = require("express");
const app = express();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", (request, response) => {
  response.json(dreams);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return; //Doit commencer par le préfix du bot
  const args = message.content.slice(prefix.length).split(/ +/); //Définit les args
  const commandName = args.shift().toLowerCase(); 
  
  if (!client.commands.has(commandName)) return;
  
  const command = client.commands.get(commandName);
  
  if (command.args && !args.length) { //Si pas d'args alors que requis
    message.delete();
    return message.channel.send(`:exclamation: **Tu n'as pas spécifié d'arguments, ${message.author}!**`);
  }

  try { //Execute les commandes et sinon revoie l'erreur
	  command.execute(message, args);
  } catch (error) {
	  console.error(error);
	  message.reply(`:no_entry_sign: **Il y a eu une erreur en essayant d'executer cette commande ! \n:gear: Erreur :** *${error}*`);
  }
  });
client.on('message', message => {
  if (message.content === `ReUp` && message.author.id === client.user.id) {
    message.delete();
    var Reload = function () {
      message.channel.send("ReUp")
    }
     setTimeout(Reload, 3600000);
  }
  else if (message.content === 'Up' && message.author.username === 'ภเς๏lคร03') {
    message.channel.send("ReUp");
    message.channel.send(`✅ **Le bot va maintenant rester up !**`);
    return;
  } else if (message.content === 'Up') {
    message.channel.send(`:x: **Tu n'as pas l'autorisation d'executer cette commande, ${message.author}!**`);
    return;
  }
});



//msg de BVN  
const ChannelID = '730145388870369290' //Récup les salons
const ChannelIDC = '730155757407961189'
client.on('guildMemberAdd', member => { //Réagit à l'arivée d'un membre
  const message = { //Création de l'embed
            "embed": {
                "color": 0x3eff03,
                "author": {
                    "name": client.user.username ,
                    "icon_url": client.user.avatarURL(''), 
                },
                "thumbnail": {
		                  "url": member.user.avatarURL('')
                },
                "fields": [
		            {
			              "name": "**Bienvenue sur <:Nemesis_Part1:802832502845734993><:Nemesis_Part2:802832431076868098><:Nemesis_Part3:802522033514479646> "+ member.user.username +" !**",
			              "value": "Voici ce que tu peux faire sur le serveur :",
		            },
                {
			              "name": '📍 __Règles__ 📍',
			              "value": "> Je t'invite à aller lire les __règles__ ici : <#730142363501985862>",
			              "inline": true,
		            },
		            {
			              "name": '📝 __Candidature__ 📝',
			              "value": "> Puis d'aller faire une __courte candidature__ en répondant à quelques questions : <#730155757407961189>",
			              "inline": true,
		            },
                {
			              "name": '📌 __Infos__ 📌',
			              "value": "> Si tu souhaites avoir plus d'info, je t'invite à aller lire le channel : <#733604192303710229>",
			              "inline": true,
		            },
                {
			              "name": '❓ __Questions__ ❓',
			              "value": "> N'hésite pas a nous poser des questions si tu en as : <#731812731480703056>",
			              "inline": true,
		            },
                ],
                timestamp: new Date(),
                "footer": {
                    "text": `🤖 Némésis - Bot Officiel`
                }
            }};
  const candidature = //Réenvoie un exemple de candidature
      ":warning: __**REGLES DES CANDIDATURES :**__ :warning:"
+ "\n\- **Le plagiat de candidature est strictement interdit et fera l'objet d'un @❌ | Refusé**"
+ "\n- **Mentir sur son âge est interdit !**"
+ "\n- **Les questions qui ne sont pas suivies par **(Facultatif)** sont obligatoires pour rejoindre le serveur.**"
+ "\n"
+ "\n:pencil: **__EXEMPLE DE FICHE CANDIDATURE !__** :pencil:"
+ "\n**Pseudo minecraft :**"
+ "\n**Age** (Min 13ans) **:**"
+ "\n**Ce que vous préférer dans minecraft :** (Expl : Farm, Build, Redstone, PVP, ...)"
+ "\n**Quels sont vos heures de connexion ? :** (Expl : 10h-15h, toute la journée, le soir, 1 fois semaine, ...)"
+ "\n**Pourquoi voulez vous rejoindre le serveur ?** (Motivations) **:**"
+ "\n---------------------------------------------------------------------------------------"
+ "\n**Prénom** (Facultatif) **:**"
+ "\n**Comment avez-vous connus le serveur ?** (Facultatif) **:**"
+ "\n**Présentation IG (In Game)** (Facultatif) **:** (Expl : Vous dîtes vos expériences dans l univers des jeux vidéos pourquoi pas, mais surtout sur Minecraft, l'expérience de jeu etc...)"

  member.roles.set(['730026296394121218', '730029282553757728']); //Set les roles de base
  const channel = member.guild.channels.cache.get(ChannelID)
  const channelC = member.guild.channels.cache.get(ChannelIDC)
  channel.send(`<@${member.id}>`) //Metionne le nouveau membre
  channel.send(message) //Envoie l'embed
  channelC.send(candidature) //Envoie l'exemple de candidature
});


//msg de au revoir !
client.on('guildMemberRemove', oldMember => {
  
  const ChannelID2 = '780018238490411009' //Récup les salons
  const message2 = { //Création de l'embed
            "embed": {
                "color": "ff2b2b",
                "author": {
                    "name": client.user.username ,
                    "icon_url": client.user.avatarURL(''), 
                },
                "thumbnail": {
		                  "url": oldMember.user.avatarURL('')
                },
                "fields": [
		            {
			              "name": "**Au revoir " + oldMember.user.username +" !**",
			              "value": "++ frèro !",
		            },
                //{
			              //"name": '__Ancien roles__',
			              //"value": ">" + oldMember.user.oldRole + " avait les roles suivant :" + oldMember.user.roles + ".",
			              //"inline": true,
		            //},
                ],
                timestamp: new Date(),
                "footer": {
                    "text": `🤖 Némésis - Bot Officiel`
                }
            }
        };

  const channel = oldMember.guild.channels.cache.get(ChannelID2)
  channel.send(message2) //Envoie de l'embed
});

//client.on('message', message => { 
  //let msgauteur = message.author;
//if (message.content.includes(" ip ") && message.author.id !== client.user.id || message.content.includes(" IP ") && message.author.id !== client.user.id || message.content.includes(" Ip ") && message.author.id !== client.user.id || message.content.includes(" iP ") && message.author.id !== client.user.id ){
    //message.channel.send("**📰 Voici l\'adresse IP du serveur :** \`Nemesis.ouimc.fr\`");
//}});
//---------------------------------------------------------------------------------------------------------------------------------

//Retier le ""//"" ci-dessous avant de download les fichiers du bot !

//client.login(token);