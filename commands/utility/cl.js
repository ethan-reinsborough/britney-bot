module.exports = {
    name: "cl",
    description: "Cool link! Sends a cool Britney-certified link.",
    async execute(message) {
        let words = [
            ['https://www.youtube.com/watch?v=tr8N4lnD3q8'],
            ['https://www.youtube.com/watch?v=6F5azNTnaOI'],
            ['https://www.youtube.com/watch?v=k6Yu2SwmU2s'],
            ['https://www.youtube.com/watch?v=7219-Xa-gfs'],
            ['https://www.youtube.com/watch?v=9ywnLQywz74'],
            ['https://youtu.be/n4hm66oOlNI?t=9'],
            ['https://www.youtube.com/watch?v=kVTAIFi4MJw'],
            ['https://www.youtube.com/watch?v=kFpps3kgaHI&ab_channel=Hydrea'],
            ['https://www.youtube.com/watch?v=8MAfrz2heYg'],
            ['https://www.youtube.com/watch?v=84HJWRjuHkw'],
            ['https://www.youtube.com/watch?v=pOI2Lh3gOjw'],
            ['https://www.youtube.com/watch?v=mJgB8jm2peA']
        ];
        let wordnum = Math.floor(Math.random() * words.length);
        message.channel.send(words[wordnum]);
    },
  };
  