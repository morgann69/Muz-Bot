const Discord = require("discord.js");

var bot = new Discord.Client();

HTMLBodyElement.on("ready", function() {
    bot.user.setGame("A vous faire plaisir");
    console.log("Le bien est bien connecté");
});

bot.login("NDYyOTI2MTM4NzkzMTMyMDMy.DhpaYA.haEvC4JHbaqkBx7G5kq8C7k7kNY");
