const Discord = require('discord.js'); 
const client = new Discord.Client();

module.exports = {
	name: 'help',
	description: 'help',
  args: false,
	execute(message, args) {
    var auteur = message.author.username
      const help = { //CrΓ©ation de l'embed
            "embed": {
                "color": "fff22b",
                "author": {
                    "name": "NΓ©mΓ©sis Officiel" ,
                    "icon_url": 'https://s4.gifyu.com/images/imageedit_7_5669175814.png', 
                },
                "description": '\`\`\`fix\n\                  - Liste des commandes -\n\`\`\`',
                "fields": [
		            {
			              "name": `**π© __Suggestion__ π©**`,
			              "value":"\`\`/sugg [suggestion]\`\` : Permet de poster une suggestion. \n\ β __Cooldown :__ 1h.",
                    "inline": true,
		            },
		            {
			              "name": `**π __Sondage__ π**`,
			              "value":"\`\`/sond [nombre de propositions] [sondage]\`\` : Permet de poster un sondage. \n\ β __Cooldown :__ 1h.",
                    "inline": true,
		            },
  		          {
			              "name": `**π __Discord__ π**`,
			              "value":"\`\`/discord\`\` : Permet d\'avoir un lien d\'invitation pour le discord.",
                    "inline": true,
		            },
    		        {
			              "name": `**π° __IP__ π°**`,
			              "value":"\`\`/ip\`\` : Permet d\'avoir l\'adresse IP du serveur.",
                    "inline": true,
		            },
                {
			              "name": `**βοΈ __Chifoumi__ βοΈ**`,
			              "value":"\`\`/ppc [Pierre,Papier,Ciseaux]\`\` : Permet de jouer au pierre, papier, ciseaux contre le bot",
                    "inline": true,
		            },
                {
			              "name": `**β __On__ β**`,
			              "value":"\`\`/on\`\` : Permet de voir si le bot est en ligne.",
                  	"inline": true,
		            },
                ],
                timestamp: new Date(),
                "footer": {
                    "text": `π€ NΓ©mΓ©sis - Bot Officiel`
                }
              }
        
            }
      message.delete();
       message.channel.send(help); //Envoie de l'embed
      }};
