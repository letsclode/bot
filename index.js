const {Client,Attachment} = require('discord.js');
const bot = new Client();



const token = process.env.token;
const PREFIX = '!';

bot.on('ready',() =>{
    console.log('Ready');
});

bot.on('message',(msg) =>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hi':
            msg.reply('Hello');
            break;
        
        case 'what is my avatar':
            msg.reply(msg.author.avatarURL);
        break;
    }
});


bot.login(token);
