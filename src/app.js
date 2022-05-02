require("dotenv").config();
require("./methods")
const { Client, Intents, Permissions, Guild, Message } = require("discord.js");
const { promises: fs } = require("fs");
const kick_ban = require("./methods");

//Function that appends data to logs.txt file in Logs directory (not used for now)
const write = async (data) => {
    await fs.appendFile("../Logs/logs.txt", `${data} \n`);
}

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,               //Enable intent - GUILDS
        Intents.FLAGS.GUILD_MESSAGES        //Enable intent - GUILD_MESSAGES
    ]});

client.on("messageCreate", async (Message) => {
    await kick_ban(Message);
})

client.login(process.env.DISCORDJS_BOT_TOKEN);