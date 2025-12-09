export function funMenu(bot, chat) {
  bot.sendMessage(chat, `
😂 *FUN COMMANDS* 😂
/joke
/meme
/roast
/truth
/dare
/cat
/dog
`, { parse_mode: "Markdown" });
}
