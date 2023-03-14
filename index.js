const TelegramApi = require("node-telegram-bot-api");

const token = "xxxxxxxxxxxxxxxxxxxxxxxxxx";

const bot = new TelegramApi(token, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "saudação inicial" },
    { command: "/info", description: "Obter informações do usuário" },
    {
      command: "/hospital",
      description: "Obter informações de Hospitais de Voronezh",
    },
    {
      command: "/shopping",
      description: "Os shopping mais legais da cidade",
    },
    {
      command: "/parques",
      description: "Os Melhores parques da cidade",
    },
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
        return bot.sendMessage(chatId, `Seu nome ${msg.from.first_name}`);
      }
      if (text === "/hospital") {
        await bot.sendPhoto(
          chatId,
          "https://avatars.mds.yandex.net/i?id=01f69330bfdf6ce4cb7929eebea482ff5bf71a2c-5699445-images-thumbs&n=13"
        );
        await bot.sendMessage(
          chatId,
          `Буз ВО Воронежская стоматологическая поликлиника № 6, филиал`
        );

        await bot.sendPhoto(
          chatId,
          "https://avatars.mds.yandex.net/get-altay/2384989/2a000001744ae1e0df0ffee667a90ee94b5c/XXL"
        );
        await bot.sendMessage(
          chatId,
          `Поликлинина ЮВ РЖД,\n просп. Революции, 2, Воронеж`
        );

        await bot.sendPhoto(
          chatId,
          "https://avatars.mds.yandex.net/get-altay/215317/2a00000160cb85730bd37ee1140c38e9cf8f/XXL"
        );
        await bot.sendMessage(
          chatId,
          `БУЗ ВО Воронежская городская клиническая поликлиника No 1,\nг. Воронеж, ул. Чайковского, 8, тел. (473) 255-66-12,
          (473) 252-25-47`
        );
      }
      if (text === "/shopping") {
        await bot.sendPhoto(
          chatId,
          "https://irecommend.ru/sites/default/files/product-images/1048078/Wu9qi6YGi9qL3iH0WmZDg.jpg"
        );
        await bot.sendMessage(
          chatId,
          `Галерея Чижова\n Кольцовская ул., 35, Воронеж `
        );

        await bot.sendPhoto(
          chatId,
          "http://photos.wikimapia.org/p/00/03/87/08/08_full.jpg"
        );
        await bot.sendMessage(
          chatId,
          `АШАН\n Парковая ул., 3, посёлок Солнечный этаж 1`
        );
      }
      if (text === "/parques") {
        await bot.sendMessage(
          chatId,
          `${msg.from.first_name},Por favor Diga ao Rosada para adicionar, de momento ele não adicionou`
        );
      }
      // return bot.sendMessage(chatId, "Não estou entendendo, tente novamente!)");
    } catch (e) {
      return bot.sendMessage(chatId, "Algum erro ocorreu!)");
    }
  });
};

start();
