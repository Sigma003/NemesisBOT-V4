const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'help',
	description: 'help',
  args: false,
	execute(message, args) {
    var auteur = message.author.username
      const help = { //Création de l'embed
            "embed": {
                "color": "fff22b",
                "author": {
                    "name": "Némésis Officiel" ,
                    "icon_url": 'https://s4.gifyu.com/images/imageedit_7_5669175814.png', 
                },
                "description": '\`\`\`fix\n\                  - Liste des commandes -\n\`\`\`',
                "fields": [
		            {
			              "name": `**📩 __Suggestion__ 📩**`,
			              "value":"\`\`/sugg [suggestion]\`\` : Permet de poster une suggestion. \n\ ⌛ __Cooldown :__ 1h.",
                    "inline": true,
		            },
		            {
			              "name": `**📊 __Sondage__ 📊**`,
			              "value":"\`\`/sond [nombre de propositions] [sondage]\`\` : Permet de poster un sondage. \n\ ⌛ __Cooldown :__ 1h.",
                    "inline": true,
		            },
  		          {
			              "name": `**🔗 __Discord__ 🔗**`,
			              "value":"\`\`/discord\`\` : Permet d\'avoir un lien d\'invitation pour le discord.",
                    "inline": true,
		            },
    		        {
			              "name": `**📰 __IP__ 📰**`,
			              "value":"\`\`/ip\`\` : Permet d\'avoir l\'adresse IP du serveur.",
                    "inline": true,
		            },
                {
			              "name": `**✂️ __Chifoumi__ ✂️**`,
			              "value":"\`\`/ppc [Pierre,Papier,Ciseaux]\`\` : Permet de jouer au pierre, papier, ciseaux contre le bot",
                    "inline": true,
		            },
                {
			              "name": `**✅ __On__ ✅**`,
			              "value":"\`\`/on\`\` : Permet de voir si le bot est en ligne.",
                  	"inline": true,
		            },
                ],
                timestamp: new Date(),
                "footer": {
                    "text": `🤖 Némésis - Bot Officiel`
                }
              }
        
            }
      message.delete();
       message.channel.send(help); //Envoie de l'embed
      }};
