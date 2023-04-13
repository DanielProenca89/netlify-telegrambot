newFunction();

function newFunction() {
    const TelegramBot = require('node-telegram-bot-api');
    const token = 'COLOQUE_AQUI_SEU_TOKEN';
    const bot = new TelegramBot(token, { polling: true });
    bot.on('message', (msg) => {
        bot.sendMessage(msg.chat.id, 'Olá! Obrigado por entrar em contato!');

    });
}
