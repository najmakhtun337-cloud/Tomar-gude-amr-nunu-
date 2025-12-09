export function toolsMenu(bot, chat) {
  bot.sendMessage(chat, `
🛠 *TOOLS*  
/ssweb URL  
/iplookup  
/weather CITY  
/qr TEXT  
/short URL  
`, { parse_mode: "Markdown" });
}
