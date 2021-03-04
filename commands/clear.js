require("dotenv").config();
module.exports = {
    name: 'clear',
    aliases: 'cl',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Clear maessages",
    async execute(client, message, args) {

        if(message.member.roles.cache.has(process.env.ADMIN_ROLE_ID)){
            if(!args[0]) return message.reply("Please enter the amount of messages");
            if(isNaN(args[0])) return message.reply("Enter a valid number");

            if(args[0] > 100) return message.reply("No more than 100");
            if(args[0] < 1) return message.reply("Really? No.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                messages.forEach((message) => {
                    message.delete();
                });
            });
        } else {
            message.channel.send('Nah');
        
        }
    
    }
}