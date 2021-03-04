const profileModel = require("../models/profileSchema");

module.exports = {
    name: 'toadhouse',
    aliases: 'th',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Line them up",
    async execute(client, message, args, Discord, users, profileData){

      let gamername = message.author.username;
      let gamer1 = message.author.id;

        
        let spin1Embed = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/1K3Lw92/spinny.gif')
          .setTitle(gamername);

        let MushWinEmbed1 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/WzRgjsF/mush-spin-spin.gif')
          .setTitle(gamername);

        let MushWinEmbed2 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/vVTvV0F/mush-mush-spin.gif')
          .setTitle(gamername);

        let MushWinEmbed3 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/tzf1y8C/mush-mush-mush.gif')
          .setTitle(gamername);

        let MushLoseEmbed3 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/KWxB3c4/mush-mush-star.gif')
          .setTitle(gamername);

        let MushLose2Embed2 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/8dw8YpP/mush-flower-spin.gif')
          .setTitle(gamername);

        let MushLose2Embed3 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/XzCyP1c/mush-flower-mush.gif')
          .setTitle(gamername);

        let FlowerWinEmbed1 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/h9dt0j1/flower-spin-spin.gif')
          .setTitle(gamername);

        let FlowerWinEmbed2 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/VJqrt0k/flower-flower-spin.gif')
          .setTitle(gamername);

        let FlowerWinEmbed3 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/fQ85mst/flower-flower-flower.gif')
          .setTitle(gamername);

          let FlowerLoseEmbed3 = new Discord.MessageEmbed()
          .setColor('#FFA500')
          .setImage('https://i.ibb.co/Qcyf4K1/flower-flower-mush.gif')
          .setTitle(gamername);

          let StarWinEmbed1 = new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setImage('https://i.ibb.co/QHCFwb6/star-spin-spin.gif')
            .setTitle(gamername);

          let StarWinEmbed2 = new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setImage('https://i.ibb.co/fYHvq84/star-star-spin.gif')
            .setTitle(gamername);

           let StarWinEmbed3 = new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setImage('https://i.ibb.co/jyLfZPh/star-star-star.gif')
            .setTitle(gamername);

           let StarLoseEmbed3 = new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setImage('https://i.ibb.co/fGB648B/star-star-mush.gif')
            .setTitle(gamername);




          SpinArray = [0, 1, 2, 3, 4, 5, 6];
          var SpinResult = SpinArray[Math.floor(Math.random() * SpinArray.length)];
          console.log("random =>", SpinResult);
          if (SpinResult === 0) {
            spin2Embed = MushWinEmbed1;
            spin3Embed = MushWinEmbed2;
            spin4Embed = MushWinEmbed3;
            balup = "2up! 50 coins have been added to your account!";
            var win = 50;
          } else if (SpinResult === 1) {
            spin2Embed = MushWinEmbed1;
            spin3Embed = MushWinEmbed2;
            spin4Embed = MushLoseEmbed3;
            balup = "You lost. No coins for you.";
          } else if (SpinResult === 2) {
            spin2Embed = MushWinEmbed1;
            spin3Embed = MushLose2Embed2;
            spin4Embed = MushLose2Embed3;
            balup = "You lost. No coins for you.";
          } else if (SpinResult === 3) {
            spin2Embed = FlowerWinEmbed1;
            spin3Embed = FlowerWinEmbed3;
            spin4Embed = FlowerWinEmbed3;
            balup = "3up! 200 coins have been added to your account!";
            var win = 200;
          } else if (SpinResult === 4) {
            spin2Embed = FlowerWinEmbed1;
            spin3Embed = FlowerWinEmbed3;
            spin4Embed = FlowerLoseEmbed3;
            balup = "Shoot! Better luck next time!";
          } else if (SpinResult === 5) {
            spin2Embed = StarWinEmbed1;
            spin3Embed = StarWinEmbed2;
            spin4Embed = StarWinEmbed3;
            balup = "Jackpot!!!!! 500 coins have been added to your account!";
            var win = 500;
          } else if (SpinResult === 6) {
            spin2Embed = StarWinEmbed1;
            spin3Embed = StarWinEmbed2;
            spin4Embed = StarLoseEmbed3;
            balup = "So close but no Star.";
          };

          const filter = (reaction, user) => {
            return (['🛑'].includes(reaction.emoji.name) && user.id === message.author.id);
          };
      
          async function spin1() {
            let spin1Send = await message.channel.send(spin1Embed);
            spin1Send.react('🛑');
            let spin1Reaction = await spin1Send.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            if (spin1Reaction.first().emoji.name === '🛑') {
              spin1Send.delete();
            }
          }
          
          async function spin2() {
            let spin2Send = await message.channel.send(spin2Embed);
            spin2Send.react('🛑');
            let spin2Reaction = await spin2Send.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            if (spin2Reaction.first().emoji.name === '🛑') {
              spin2Send.delete();
            }
          }
      
          async function spin3() {
            let spin3Send = await message.channel.send(spin3Embed);
            spin3Send.react('🛑');
            let spin3Reaction = await spin3Send.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            if (spin3Reaction.first().emoji.name === '🛑') {
              spin3Send.delete();
            }			
          }
          
          await spin1();
          await spin2();
          await spin3();
          await message.channel.send(spin4Embed);
          await message.channel.send(balup);
          await profileModel.findOneAndUpdate(
                {
                  userID: gamer1,
                },
                {
                  $inc: {
                    coins: win,
                  },
                }
              );
            }
        
      }