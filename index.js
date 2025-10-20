import http from 'http';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import 'dotenv/config';
import { contactsHandler, geminiHandler, promptHandler, studentHandler, technologyHandler } from './handlers.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running!');
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const keyboard = {
  reply_markup: {
    keyboard: [
      [{ text: 'Студент' }, { text: 'ІТ-технології' }],
      [{ text: 'Контакти' }, { text: 'Промпт' }],
    ],
    resize_keyboard: true,
  },
};

bot.start(async (ctx) => {
  const answer = `Вітаю! 👋\nОберіть одну з опцій на клавіатурі нижче:`;
  await ctx.reply(answer, {
    ...keyboard,
  });
});

bot.hears('Студент', studentHandler);

bot.hears('ІТ-технології', technologyHandler);

bot.hears('Контакти', contactsHandler);

bot.hears('Промпт', promptHandler);

bot.on(message('text'), geminiHandler);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
