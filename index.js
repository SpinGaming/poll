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
            const Embedhelp = new RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Poll Help")
                .setDescription("p!poll to initiate a simple yes/no poll!")

            var Embedpoll = new RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Polling Station")
                .setDescription("**" + msgArgs + "**")
                .setThumbnail("http://icons.iconarchive.com/icons/iconarchive/blue-election/512/Election-Polling-Box-01-Outline-icon.png")

            if (!args[1]) {
                message.channel.send(Embedhelp);
                message.delete(2000).catch(console.error);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(EmbedPoll).then(messageReaction => {
                messageReaction.react("👍");
                setTimeout(() => { messageReaction.react("👎"); }, 1000);
                message.delete(2000).catch(console.error);
            });

            break;
    }

});

bot.login(process.env.BOT_TOKEN);
