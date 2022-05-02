const kick_ban = async (Message) => {
    if (Message.content.startsWith(".kick")) {
        if (!Message.member.roles.cache.has("970350869495296030")) return Message.reply("You cannot kick or ban members!");
        let targetedUser = Message.mentions.members.first();
        if (!targetedUser) return Message.reply("Not a valid user!");
        await targetedUser.kick()
        .then(Message.reply("User succesfully kicked"));
    }
    else if (Message.content.startsWith(".ban")) {
        if (!Message.member.roles.cache.has("970350869495296030")) return Message.reply("You cannot kick or ban members!");
        let targetedUser = Message.mentions.members.first();
        if (!targetedUser) return Message.reply("Not a valid user!");
    //add let banReason here later
        if(!Message.content.includes(" | ")) return Message.reply("You didn't write a reason!");
        let index = Message.content.indexOf("|");
        let banReason = Message.content.substring(index + 1).trim();
    //add validation if banReason not empty!!!
        await targetedUser.ban({ reason: banReason })
        .then(Message.reply(`User ${targetedUser.displayName} succesfully banned for ${banReason}`));
    }
}
module.exports = kick_ban;
