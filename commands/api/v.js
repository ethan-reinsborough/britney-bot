const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "v",
    description: "Animal crossing villager lookup!",
    async execute(message) {
        input = message.content.split(" ");

        if(input[1] == null){
            message.channel.send("Usage: v <villager name>");
            return;
        }
        var normalizedText = input[1].toLowerCase();
        var capitalizedName = normalizedText.charAt(0).toUpperCase() + normalizedText.slice(1);
        message.channel.send(capitalizedName);
        const res = await fetch(
            `https://acnhapi.com/v1/villagers`
          ).then((response) => response.json());

        for(const key in res){
            if(res[key]["name"]["name-USen"] == capitalizedName){
                var villagerId = res[key]["id"];
                
                const embed = new MessageEmbed()
                .setAuthor(`${res[key]["name"]["name-USen"]}`)
                .setColor("#0000FF")
                .setThumbnail(`http://acnhapi.com/v1/icons/villagers/${villagerId}`)
                 message.channel.send(embed);
                return;
            }
        }
        message.channel.send("Villager not found!");
    },
  };
  