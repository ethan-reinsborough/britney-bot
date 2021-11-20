module.exports = {
    name: "rd",
    description: "Reminder delete. Removes the current reminder.",
    async execute(message) {
        message.channel.send("Cleared reminder!");
        clearInterval(global.interval);
        global.interval = null;
        global.cont = false;
    },
  };
  