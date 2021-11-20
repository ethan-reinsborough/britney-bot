module.exports = {
    name: "bs",
    description: "Britney Speak (BS LOL HAHAHA)! These are words to make you sound more like the famous Britney.",
    async execute(message) {
        let words = [
            ['INHERENTLY'],
            ['PER SE'],
            ['MALICIOUS'],
            ['QUALMS'],
            ['SCOFFED'],
            ['ABHOR'],
            ['MALEVOLENT'],
            ['BIG -- BOOBS; AREOLAS.'],
            ['SYNOPSIS'],
            ['I SCHLAMMED MY PENITH IN THE CAR DOOR!']
        ];
        let wordnum = Math.floor(Math.random() * words.length);
      message.channel.send(words[wordnum]);
    },
  };
  