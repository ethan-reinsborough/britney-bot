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
            ['SEMANTICS'],
            ['BIG -- BOOBS; AREOLAS.'],
            ['SYNOPSIS'],
            ['I SCHLAMMED MY PENITH IN THE CAR DOOR!'],
            ["HE'S A CLEVER ONE!"],
            ["MISTY, MISTY! I'M MISTYYY"],
            ["We got a number one Victory Royale. Yeah, Fortnite, we 'bout to get down (get down)."],
            ["I'm gonna say a bad word"],
            ["I'm gonna get racist"],
            ["meow"],
            ["breedable."],
            ["rice rocket"],
            ["I made eggs and rice"],
            ["Hello, how are you. Please help me, I am under the water"],
            ["STEAAAAAALTH TIME"],
            ["I WAS HIDING HAHAHAHA"],
            ["DEEDEEDEEDEEDEEE DEDEDEDEDEEEEEEEEEEEEEE (aggressively)"],
            ["BROOOOOOOOOOOOO"],
            ["FINGERS IN HIS ASS"],
            ["LOGIC PUZZLE"],
            ["SUDOKU"],
            ["CROSSWORD PUZZLE"],
            ["4 AM PISS"],
            ["LEBLANC"],
            ["NEW JERSEY"]
        ];
        let wordnum = Math.floor(Math.random() * words.length);
        message.channel.send(words[wordnum]);
    },
  };
  