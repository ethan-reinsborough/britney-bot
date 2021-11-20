module.exports = {
    name: "khs",
    description: "Karuta Helper Save: Saves associated tag with a character. Usage: ;khs <character> <code>",
    async execute(message) {
      input = message.content.split(" ");
      global.characters.push([input[1],input[2]]); 
      message.channel.send("Saved " + input[1] + " with an ID of " + input[2]);
    },
  };
  