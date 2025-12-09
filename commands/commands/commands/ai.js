import axios from "axios";

export function aiMenu(bot, chat) {
  bot.sendMessage(chat, `
🤖 *AI COMMANDS*  
/ask  
/chatgpt  
/imagine (coming soon)
`, { parse_mode: "Markdown" });
}

export async function askAI(question) {
  return "AI response coming soon…";
}
