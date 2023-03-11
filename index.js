const TelegramApi = require("node-telegram-bot-api");

const token = "6105441864:AAHsVHTVxxIfyzVNff39VutuwZeELpTwOdc";

const bot = new TelegramApi(token, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "saudação inicial" },
    { command: "/info", description: "Obter informações do usuário" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
      if (text === "/start") {
        await bot.sendSticker(
          chatId,
          "https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp"
        );
        return bot.sendMessage(
          chatId,
          `Bem-vindo ao telegram bot por, Criado por Luís de Água Rosada`
        );
      }
      if (text === "/info") {
        return bot.sendMessage(
          chatId,
          `Seu nome ${msg.from.first_name} ${msg.from.last_name}`
        );
      }
      if (text === "/game") {
        return startGame(chatId);
      }
      return bot.sendMessage(chatId, "Não estou entendendo, tente novamente!)");
    } catch (e) {
      return bot.sendMessage(chatId, "Algum erro ocorreu!)");
    }
  });
};

start();
