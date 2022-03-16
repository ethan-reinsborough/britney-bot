const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "v",
    description: "Animal crossing villager lookup!",
    async execute(message) {
        /*
        input = message.content.split(" ");

        if(input[1] == null){
            message.channel.send("Usage: v <villager name>");
            return;
        }
        var capitalizedName = input[1].charAt(0).toUpperCase() + input[1].slice(1)

        const res = await fetch(
            `https://acnhapi.com/v1/villagers`
          ).then((response) => response.json());
        const keys = Object.keys(res);
        for(let z = 0; z < keys.length; z++){
            var matchVillager = res[z]
            if(res[z]["name"]["name-USen"] == capitalizedName){

            }
        }  
        */
        const res = await fetch(
            `https://acnhapi.com/v1/villagers`
          ).then((response) => response.json());
        message.channel.send("TEST");
        message.channel.send(res[0]["name"]["name-USen"]);
        
        /*
        const embed = new MessageEmbed()
                .setAuthor(`${title} | Rank: ${rank}`)
                .setColor(randomColor)
                .setFooter(`ED 1 #${printNum}`)
                .setImage(res["top"][`${listNum}`]["image_url"])
                message.channel.send(embed);*/
    },
  };
  