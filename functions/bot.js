const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
exports.handler = new TelegramBot(token, { polling: true });
