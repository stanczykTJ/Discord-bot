require("dotenv").config();
const { Client, Intents, Permissions, Guild } = require("discord.js");
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
    if(Message.content.startsWith(".kick")) {
        if(!Message.member.roles.cache.has("970350869495296030")) return Message.reply("You cannot kick or ban members!");
        var targetedUser = Message.mentions.members.first();
        if(!targetedUser) return Message.reply("Not a valid user!");
        targetedUser.kick();
        return Message.reply("User succesfully kicked");
    }
    else if(Message.content.startsWith(".ban")) {
        if(!Message.member.roles.cache.has("970350869495296030")) return Message.reply("You cannot kick or ban members!");
        var targetedUser = Message.mentions.members.first();
        if(!targetedUser) return Message.reply("Not a valid user!");
        //add var banReason here later
        targetedUser.ban({reason: banReason});
        return Message.reply(`User ${targetedUser.displayName} succesfully banned for ${banReason}`);
    }

})

client.login(process.env.DISCORDJS_BOT_TOKEN);