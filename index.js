const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require('ytdl-core');

bot.login(botconfig.token)

bot.on("ready", async () => {
    console.log(bot.user.username + " is online!");
    bot.user.setActivity("!commands");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd == `${botconfig.prefix}creator`) {
        return message.channel.send("TrickyBot created by https://twitter.com/kyIexo");
    } 

    if(cmd == `${botconfig.prefix}commands`) {
        let botembed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setDescription("!choose \n !boat \n !heyapple \n !knife \n !creator")
        .setThumbnail(bot.user.displayAvatarURL)

        return message.channel.send(botembed);
    } 

    if(cmd == `${botconfig.prefix}choose`) {
        let args = messageArray.slice(1);
        console.log(args);

        if(args.length == 0) {
            return message.channel.send("Error: No names have been entered!");
        } else {
            return message.channel.send(args[Math.floor(Math.random() * args.length)] + " is it!");
        }
    } 

    if(cmd == `${botconfig.prefix}boat`) {
        if(message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            connection.playStream(ytdl(
                'https://www.youtube.com/watch?v=xcnsgtEiUWQ&feature=youtu.be',
                { filter: 'audioonly' }));
            setTimeout(function () {
                message.guild.voiceConnection.disconnect();
            }, 5000);
        } else {
            message.channel.send('You need to be in a channel to use this command!');
        }
    }

    if(cmd == `${botconfig.prefix}knife`) {
        if(message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            connection.playStream(ytdl(
                'https://www.youtube.com/watch?v=zyNSJb-k8Kc&feature=youtu.be',
                { filter: 'audioonly' }));
            setTimeout(function () {
                message.guild.voiceConnection.disconnect();
            }, 5000);
        } else {
            message.channel.send('You need to be in a channel to use this command!');
        }
    }

    if(cmd == `${botconfig.prefix}heyapple`) {
        if(message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            connection.playStream(ytdl(
                'https://www.youtube.com/watch?v=xtVC_YQq5Do&feature=youtu.be',
                { filter: 'audioonly' }));
            setTimeout(function () {
                message.guild.voiceConnection.disconnect();
            }, 5000);
        } else {
            message.channel.send('You need to be in a channel to use this command!');
        }
    }

    if(cmd == `!!choose`) {
        let args = messageArray.slice(1);
        
        if(args.length == 0) {
            return message.channel.send("Error: No names have been entered!");
        } else {
            return message.channel.send(args[1] + " is it!");
        }
    }
});
