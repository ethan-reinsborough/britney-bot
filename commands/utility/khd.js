module.exports = {
    name: "khd",
    description: "Karuta Helper Dictionary: Shows all saved characters.",
    async execute(message) {
        for(i = 0; i < global.characters.length; i++){
            message.channel.send("\n" + global.characters[i] + ":" + global.characters[i][0]);
        }

        message.channel.send(table(global.characters));
    },
  };
  