import TelegramBot from "node-telegram-bot-api";
import { BOT_TOKEN, OWNER } from "./config.js";
import { mainMenu } from "./menu.js";
import * as fun from "./commands/fun.js";
import * as tools from "./commands/tools.js";
import * as ai from "./commands/ai.js";
import * as util from "./commands/util.js";
import * as owner from "./commands/owner.js";
import * as more from "./commands/more_commands.js";

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log("🔥 GudMarani X Bot is Running…");

bot.on("message", async (msg) => {
  const text = msg.text?.toLowerCase();
  const chat = msg.chat.id;

  if (!text) return;

  if (text === "/start") {
    bot.sendPhoto(chat, OWNER.photo, {
      caption: `🌟 Welcome to *GudMarani_X Bot*!\n\nUse /menu to see commands.`,
      parse_mode: "Markdown"
    });
  }

  if (text === "/menu") bot.sendMessage(chat, mainMenu, { parse_mode: "Markdown" });

  // Built-in commands
  if (text === "/owner") return owner.ownerInfo(bot, chat);
  if (text === "/ping") return util.ping(bot, chat);
  if (text === "/alive") return util.alive(bot, chat);

  // Category handlers
  if (text === "/fun") return fun.funMenu(bot, chat);
  if (text === "/tools") return tools.toolsMenu(bot, chat);
  if (text === "/ai") return ai.aiMenu(bot, chat);
  if (text === "/utility") return util.utilityMenu(bot, chat);

  // 350+ commands
  more.handle350Commands(bot, msg);
});
