// const express = require('express');
// const bodyParser = require('body-parser');
// const TelegramBot = require('node-telegram-bot-api');
// const fetch = require('node-fetch'); // Убедитесь, что `node-fetch` установлен

// const app = express();
// const port = process.env.PORT || 3000;

// let botToken;

// // Получение токена из Firebase при запуске приложения
// fetch("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", { method: "GET" })
//   .then(response => response.json())
//   .then(data => {
//     botToken = data.Token;
//     const bot = new TelegramBot(botToken, { polling: true });

//     bot.on('callback_query', (callbackQuery) => {
//       const message = callbackQuery.message;
//       const chatId = message.chat.id;
//       const messageId = message.message_id;
//       const data = callbackQuery.data;

//       if (data === 'mark') {
//         const newText = `${message.text}\n\nОтмечено`;
//         bot.editMessageText(newText, { chat_id: chatId, message_id: messageId, parse_mode: 'HTML' });
//       }
//     });

//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch(error => {
//     console.error('Ошибка при получении токена:', error);
//   });

// app.use(bodyParser.json());
