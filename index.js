const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "a!";

client.on("ready", () => {
    console.log("shaman activer !")
});


//Status
client.on("ready", ()=> {
    function randomStatus() {
        let status = ["7ds l'ère shaman"]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://twitch.tv"});
    }; setInterval(randomStatus, 2000)
})


client.login(process.env.TOKEN)