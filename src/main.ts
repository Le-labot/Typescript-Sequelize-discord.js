import { Client, Message } from 'discord.js';
import { config } from './config/discord';
const client: Client = new Client();
import User from './models/User';

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

client.on("message", async (message: Message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args: string[] = message.content.slice(config.prefix.length).split(/ +/);
    const command: string = args.shift().toLocaleLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send("Pong !");
            break;
        
        case 'createuser':
            User.create({ firstName: args[0], lastName: args[1] });
            message.reply('user created !!')
            break;

        case 'getuser':
            const users: User[] = await User.findAll();
            message.channel.send(users, { code: true })
            break;

        default: message.reply("Commande invalide !!!");
            break;
    }
})

client.login(config.token)