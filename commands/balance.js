const profileModel = require("../models/profileSchema");
const mongoose = require("mongoose");

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Check the user balance",
    execute(client, message, args, Discord, profileData) {
      message.channel.send(`Your wallet bal is ${profileData.coins}, you banks bal is ${profileData.bank}`);
    }
  }