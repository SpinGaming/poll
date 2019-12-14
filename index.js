const { Client, RichEmbed } = require('discord.js');
const bot = new Client();

const token = "NjU1NDczNjM3ODQyODc4NDY0.XfUnbA._6jXRj1L65OB0gXnRfQJjEOwNTs";

const PREFIX = "p!";

bot.on('ready', () => {
    console.log("The bot is ready!");
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case "poll":
            const Embed = new RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Poll Help")
                .setDescription("p!poll to initiate a simple yes/no poll!")

            if (!args[1]) {
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("🗳️" + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                setTimeout(() => { messageReaction.react("👎"); }, 1000);
                message.delete(2000).catch(console.error);
            });

            break;
    }

});

bot.login(process.env.BOT_TOKEN);
