import { generateContent } from './generateContent.js';

export const studentHandler = async (ctx) => {
  const studentInfo = `**Студент:** Малий Олександр Сергійович\n**Група:** ІП-24`;
  await ctx.reply(studentInfo, {
    parse_mode: 'Markdown',
  });
};

export const technologyHandler = async (ctx) => {
  const itInfo = `🌐 **Огляд IT-технологій (Web-розробка):**
    
**Frontend (Клієнтська частина):**
1. **HTML** — структура сторінки.
2. **CSS** — зовнішній вигляд та стилі.
3. **JavaScript** — інтерактивність та логіка на стороні браузера.
4. *Фреймворки:* React.

**Backend (Серверна частина):**
1. **Мови:** JavaScript (Node.js, Express, Nest).
2. **Бази даних:** MySQL, PostgreSQL, MongoDB.
3. **API** — зв'язок між Frontend та Backend.`;

  await ctx.reply(itInfo, {
    parse_mode: 'Markdown',
  });
};

export const contactsHandler = async (ctx) => {
  const safeUsername = '@freakman\\_s';

  const contactsInfo = `📞 **Контакти:**
*Number:* +380686956510
*Telegram:* ${safeUsername}
*GitHub:* [Посилання на GitHub](https://github.com/JessFreak) 
*Email:* sashamaluq333@gmail.com`;

  await ctx.reply(contactsInfo, {
    parse_mode: 'Markdown',
  });
};

export const promptHandler = async (ctx) => {
  const promptInfo = `💡 **Я готовий!** Просто напишіть мені своє запитання або промпт (наприклад, "Напиши вірш про кота").`;
  await ctx.reply(promptInfo, {
    parse_mode: 'Markdown',
  });
};

export const geminiHandler = async (ctx) => {
  const userPrompt = ctx.message.text;
  const chatId = ctx.message.chat.id;

  let loadingMessage;
  try {
    loadingMessage = await ctx.reply('⌛️ Обробляю ваш запит через Gemini...', { parse_mode: 'Markdown' });

    const responseText = await generateContent(userPrompt);

    await ctx.telegram.editMessageText(
      chatId,
      loadingMessage.message_id,
      null,
      responseText,
      { parse_mode: 'Markdown' },
    );

  } catch (error) {
    console.error('Помилка в обробнику Gemini:', error);
    const errorMessage = ` Виникла помилка: ${error.message}. Перевірте ваш GEMINI_API_KEY.`;

    if (loadingMessage) {
      await ctx.telegram.editMessageText(
        chatId,
        loadingMessage.message_id,
        null,
        errorMessage,
      );
    } else {
      await ctx.reply(errorMessage);
    }
  }
};