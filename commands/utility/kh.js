module.exports = {
    name: "kh",
    description: "Karuta Helper: Shows associated tag for character. Usage: ;kh <character>",
    async execute(message) {
      input = message.content.split(" ");
      
      for(i = 0; i < global.characters.length; i++){
          if(global.characters[i][0] == input[1]){
              message.channel.send(global.characters[0][i][0]);
          }
      }
    },
  };
  