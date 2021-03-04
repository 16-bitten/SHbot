const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'enterhouse',
    aliases: 'eh',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Pick a number",
    async execute(client, message, args, Discord, profileData){
        
        let chestEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setImage('https://i.ibb.co/6w6rKdh/Toad-House-Intro.gif');

        chestEmbed = await message.channel.send(chestEmbed);

        message.channel.send(chestEmbed).then(chestEmbed.react('1️⃣').then(() => chestEmbed.react('2️⃣').then(() => chestEmbed.react('3️⃣')))
          )
        .catch(() => console.error('One of the emojis failed to react.'));

        let chest1Embed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setImage('https://i.ibb.co/t4GKBwJ/thc1.gif');
        let chest2Embed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setImage('https://i.ibb.co/Yk6nQrc/thc2.gif');
        let chest3Embed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setImage('https://i.ibb.co/mG8sHW6/thc3.gif');

        let gamer1 = message.author.id;

        var chestPrizes = ['🍄', '🌻', '🪶', '🍃', '🗿', '🐸', '⭐'];
        var randomPrize = chestPrizes[Math.floor(Math.random() * chestPrizes.length)];

const filter = (reaction, user) => {
	return (['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id);
};



chestEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '1️⃣') {
            chestEmbed.delete();
			message.channel.send(chest1Embed);
            message.channel.send(`You won a ${randomPrize}`);
            
		} else if (reaction.emoji.name === '2️⃣') {
            chestEmbed.delete();
			message.channel.send(chest2Embed);
            message.channel.send(`You won a ${randomPrize}`);
		} else {
            chestEmbed.delete();
			message.channel.send(chest3Embed);
            message.channel.send(`You won a ${randomPrize}`);
        };
        if (randomPrize === '🍄') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 50,
                  },
                }
              );
            })();
            var bal = 50;
            message.channel.send(`Mushroom: 50 coins have been added to your account!`);
        } else if (randomPrize === '🌻') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 75,
                  },
                }
              );
            })();
            var bal = 75;
            message.channel.send(`Fire Flower: 75 coins have been added to your account!`);
        } else if (randomPrize === '🪶') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 100,
                  },
                }
              );
            })();
            var bal = 100;
            message.channel.send(`Feather Cape: 100 coins have been added to your account!`);
        } else if (randomPrize === '🍃') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 125,
                  },
                }
              );
            })();
            var bal = 125;
            message.channel.send(`Super Leaf: 125 coins have been added to your account!`);
        } else if (randomPrize === '🗿') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 150,
                  },
                }
              );
            })();
            var bal = 150;
            message.channel.send(`Tanooki Suit: 150 coins have been added to your account!`);
        } else if (randomPrize === '🐸') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 175,
                  },
                }
              );
            })();
            var bal = 175;
            message.channel.send(`Frog Suit: 175 coins have been added to your account!`);
        } else if (randomPrize === '⭐') {
            (async() => {
            await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: 250,
                  },
                }
              );
            })();
            var bal = 250;
            message.channel.send(`Starman: 250 coins have been added to your account!`);
        };
        var endBal = profileData.coins + bal;
        message.channel.send(`You now have ${endBal} coins.`);
	}
    )
	.catch(collected => {
		message.reply('Time is up or error.');
	});
    }
}
