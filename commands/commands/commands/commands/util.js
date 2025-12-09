export function ping(bot, chat) {
  bot.sendMessage(chat, "🏓 Pong!");
}

export function alive(bot, chat) {
  bot.sendMessage(chat, `
💚 *GudMarani_X Bot is Alive!*  
Version: 1.0  
Owner: CK-ا ERROR
`);
}

export function utilityMenu(bot, chat) {
  bot.sendMessage(chat, `
🧰 *UTILITY*  
/calc  
/uuid  
/time  
/date  
/color
`, { parse_mode: "Markdown" });
}
