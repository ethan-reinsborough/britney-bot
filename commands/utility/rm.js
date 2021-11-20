module.exports = {
    name: "rm",
    description: "Remind me! Usage: rm <reminder> (can only have one reminder up at a time for now, this is mostly for stuff like Karuta draw timer etc) Reminds once every hour!",
    async execute(message) {
        global.cont = true;
        input = message.content.split(" ");
        message.channel.send("Reminder: " + input[1] + " has been set! I'll remind you in an hour meow.");
          global.interval = setInterval(() => {
            if (global.cont === true) {
            message.channel.send("<@!106944685712375808>" + input[1]);
            }
          }, 3600000);
    },
  };
  