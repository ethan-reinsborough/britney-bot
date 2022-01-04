//#region Imports
"use strict";
const fetch = require("node-fetch");
const fs = require("fs");
const Discord = require("discord.js");
const prefix = ";";
require("dotenv").config();

const client = new Discord.Client();
//const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
//#endregion

global.waifus = [];

global.characters = [];
global.interval = null;
global.cont = false;

global.counter = 0;
global.after = "";
global.page = 1;

global.counter2 = 0;
global.after2 = "";
global.page2 = 1;

client.on("ready", () => {
  console.log("Bot is ready");
  client.user.setStatus("available");
  client.user.setPresence({
    activity: {
      name: ";help",
      type: 1,
      url: "https://www.twitch.tv/carmitecave",
    },
  });
});

client.login(process.env.BOT_TOKEN);

client.on("message", async (message) => {

  if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply("You can't do this!");
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});