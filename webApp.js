const TelegramBot = require('node-telegram-bot-api');

const token = '7140733855:AAHGX9v5UFTfx1qDABUts6GItEj_j15xXlw';

const bot = new TelegramBot(token, {polling: true});

const webAppUrl = 'https://fragment.com'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === "/start") {
        await bot.sendMessage(chatId, "Welcome to Safe Transaction! Safe Transaction it's Tonkeeper" +
            " feature made for people who can't reach Fragment for any reasons." +
            " Let's log in with your Tonkeeper wallet!"
        );
    }
});