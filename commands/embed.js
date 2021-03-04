module.exports = {
    name: 'embed',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Testing the embed function",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D9D9D9')
        .setTitle('Rules')
        .setURL('https://google.com')
        .setDescription('This is an embed of rules')
        .addFields(
            {name: 'Rule 1', value: 'spin or something'},
            {name: 'Rule 2', value: 'do something'}
        )
        .setImage('https://www.mariowiki.com/images/6/61/Fire_Flower_Spade_Panel_SMB3_sprite.png')
        .setFooter("That's all folks!");

        message.channel.send(newEmbed);
    }
}