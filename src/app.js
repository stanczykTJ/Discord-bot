require("dotenv").config();
require("./methods")
const { Client, Intents, Permissions, Guild, Message } = require("discord.js");
const { promises: fs } = require("fs");
const { kickUser, banUser, summonBot } = require("./methods");
require("./methods");

//Function that appends data to logs.txt file in Logs directory (not used for now)
const write = async (data) => {
    await fs.appendFile("../Logs/logs.txt", `${data} \n`);
}

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,               //Enable intent - GUILDS
        Intents.FLAGS.GUILD_MESSAGES        //Enable intent - GUILD_MESSAGES
    ]});

client.on("messageCreate", (Message) => {
    if(!Message.content.startsWith(".")) return;
    let command = Message.content.split(" ")
    console.log(command[0]);
    switch (command[0]) {
        case ".kick":
            kickUser(Message);
            break;
        case ".ban":
            banUser(Message);
            break;
        default:
            Message.reply("This command does not exist!");
            break;
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN);