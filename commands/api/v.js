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
        var normalizedText = input[1].toLowerCase().trim();
        var capitalizedName = normalizedText.charAt(0).toUpperCase() + normalizedText.slice(1);

        const res = await fetch(
            `https://acnhapi.com/v1/villagers`
          ).then((response) => response.json());

        for(const key in res){
            if(res[key]["name"]["name-USen"] == capitalizedName){
                var villagerId = res[key]["id"];
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                const embed = new MessageEmbed()
                .setTitle(`${res[key]["name"]["name-USen"]}`)
                .setColor(randomColor)
                .setThumbnail(`http://acnhapi.com/v1/icons/villagers/${villagerId}`)
                .setDescription(`**Gender:** ${res[key]["gender"]} \n**Species:** ${res[key]["species"]} \n**Catchphrase:** ${res[key]["catch-phrase"]}`)
                .setFooter(`Birthday - ${res[key]["birthday-string"]}`)
                .setImage(`${res[key]["image_uri"]}`)
                 message.channel.send(embed);
                return;
            }
        }
        message.channel.send("Villager not found!");
    },
  };
  