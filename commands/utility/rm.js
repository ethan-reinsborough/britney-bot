module.exports = {
    name: "rm",
    description: "Remind me! Usage: rm <reminder> (can only have one reminder up at a time for now, this is mostly for stuff like Karuta draw timer etc).",
    async execute(message) {
        global.counter = 0;
        global.after = "";
        global.page = 1;
        
        global.counter2 = 0;
        global.after2 = "";
        global.page2 = 1;
        message.channel.send("Counters reset.");
    },
  };
  