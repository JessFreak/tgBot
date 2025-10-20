export const studentHandler = async (ctx) => {
  const studentInfo = `**Студент:** Малий Олександр Сергійович\n**Група:** ІП-24`;
  await ctx.reply(studentInfo, {
    parse_mode: 'Markdown',
  });
}

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
}

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
}

export const promptHandler = async (ctx) => {
  const promptInfo = `💡 **Інформація про Промпт (Prompt):**
Промпт - це вхідний текст або інструкція, яку ви надаєте штучному інтелекту (наприклад, ChatGPT, Gemini, Midjourney), щоб отримати бажаний результат. 

**Приклад вдалого промпту:**
*«Створи 5 ідей для стартапу на основі технології блокчейн, орієнтованих на ринок України. Відповідь подай у вигляді маркованого списку.»*
    `;

  await ctx.reply(promptInfo, {
    parse_mode: 'Markdown',
  });
}