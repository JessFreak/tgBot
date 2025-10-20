import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);

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

bot.hears('Студент', async (ctx) => {
  const studentInfo = `**Студент:** Малий Олександр Сергійович\n**Група:** ІП-24`;
  await ctx.reply(studentInfo, {
    parse_mode: 'Markdown',
  });
});

bot.hears('ІТ-технології', async (ctx) => {
  const itInfo = `🌐 **Огляд IT-технологій (Web-розробка):**
    
**Frontend (Клієнтська частина):**
1. **HTML** (HyperText Markup Language) — структура сторінки.
2. **CSS** (Cascading Style Sheets) — зовнішній вигляд та стилі.
3. **JavaScript** — інтерактивність та логіка на стороні браузера.
*Фреймворки:* React, Vue.js, Angular.

**Backend (Серверна частина):**
1. **Мови:** Python (Django, Flask), JavaScript (Node.js, Express), PHP (Laravel), Java.
2. **Бази даних:** MySQL, PostgreSQL, MongoDB.
3. **API** (Application Programming Interface) — зв'язок між Frontend та Backend.`;

  await ctx.reply(itInfo, {
    parse_mode: 'Markdown',
  });
});

bot.hears('Контакти', async (ctx) => {
  const safeUsername = '@freakman\\_s';

  const contactsInfo = `📞 **Контакти:**
*Number:* +380686956510
*Telegram:* ${safeUsername}
*GitHub:* [Посилання на GitHub](https://github.com/JessFreak) 
*Email:* sashamaluq333@gmail.com`;

  await ctx.reply(contactsInfo, {
    parse_mode: 'Markdown',
  });
});

bot.hears('Промпт', async (ctx) => {
  const promptInfo = `💡 **Інформація про Промпт (Prompt):**
Промпт - це вхідний текст або інструкція, яку ви надаєте штучному інтелекту (наприклад, ChatGPT, Gemini, Midjourney), щоб отримати бажаний результат. 

**Приклад вдалого промпту:**
*«Створи 5 ідей для стартапу на основі технології блокчейн, орієнтованих на ринок України. Відповідь подай у вигляді маркованого списку.»*
    `;

  await ctx.reply(promptInfo, {
    parse_mode: 'Markdown',
  });
});

bot.on(message('text'), async (ctx) => {
  const answer = `Я не зрозумів команду **${ctx.message.text}**. Будь ласка, оберіть опцію на клавіатурі.`;
  await ctx.reply(answer, {
    ...keyboard,
    parse_mode: 'Markdown',
  });
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
