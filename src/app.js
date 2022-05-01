require("dotenv").config();
const { Client, Intents, Message } = require("discord.js");
const { promises: fs } = require("fs")

//Function that appends data to logs.txt file in Logs directory
const write = async (data) => {
    await fs.appendFile("../Logs/logs.txt", `${data} \n`);
}

const client = new Client({ 
    intents: [                      
    Intents.FLAGS.GUILDS,               //Enable intent - GUILDS
    Intents.FLAGS.GUILD_MESSAGES]       //Enable intent - GUILD_MESSAGES
});

client.on("messageCreate", (Message) => {
    try{
        write(Message.content); //Use write function to write user's message to logs.txt file in Logs directory
        console.log(`Message written succesfully with content: ${Message.content}`)
    }
    catch(err){
        console.log(err);
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);