module.exports = {
    name: 'spin',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Test your luck",
    execute(client, message, args){
        message.channel.send("Line up the pictures and get a prize! You only get one try.", {files: ["https://i.ibb.co/mq7RHmL/uX6X0hE.gif"]});  
    }
}