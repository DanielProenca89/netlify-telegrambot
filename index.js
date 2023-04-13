const bot = require("./functions/bot.js")
newFunction();

function newFunction() {

    bot.on('message', (msg) => {
        bot.sendMessage(msg.chat.id, 'Olá! Obrigado por entrar em contato!');

    });
}
